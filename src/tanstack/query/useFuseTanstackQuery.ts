import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFuseTanstackQueryParams } from "../../types/tanstack/useFuseTanstackQuery.type";
import { startTransition, useDeferredValue, useEffect, useMemo } from "react";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js/min";

export const useFuseTanstackQuery = <T>(
  options: useFuseTanstackQueryParams<T>,
) => {
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  const defferedSearchTerm = useDeferredValue(options.searchQuery.trim());

  const queryKey = [
    "react-fusejs",
    options.defferSearchQuery ? defferedSearchTerm : options.searchQuery.trim(),
    options.queryKey,
  ] as const;

  const {
    threshold = 0.5,
    defferSearchQuery = true,
    matchAllOnEmptyQuery = false,
    limit,
    ...restOptions
  } = options;

  const defaultItems: FuseResult<T>[] = useMemo(() => {
    return options.items.map((item, index) => ({ item, refIndex: index }));
  }, [options.items]);

  const fuse = useMemo(
    () =>
      new Fuse(options.items, {
        threshold,
        ...restOptions,
      }),
    [threshold, restOptions, options.items],
  );

  useEffect(() => {
    // 1. Find all search-related queries in the cache
    const searchQueries = queryCache.findAll({ queryKey: ["react-fusejs"] });
    const maxLimit = options.cacheConfig.maxCacheLimit ?? 3;
    // 2. If we have more than maxLimit, remove the oldest ones
    if (searchQueries.length > maxLimit) {
      startTransition(() => {
        const sortedByOldest = searchQueries.sort(
          (a, b) => a.state.dataUpdatedAt - b.state.dataUpdatedAt,
        );

        // Remove the oldest entries until we are back down to maxLimit
        const entriesToRemove = sortedByOldest.slice(
          0,
          sortedByOldest.length - maxLimit,
        );

        entriesToRemove.forEach((query) => {
          queryClient.removeQueries({ queryKey: query.queryKey });
        });
      });
    }
  }, [
    options.defferSearchQuery ? defferedSearchTerm : options.searchQuery.trim(),
    queryClient,
    queryCache,
  ]);
  return {
    /** `['react-fusejs', searchQuery, options.queryKey]` */
    queryKey,
    results: useQuery({
      queryKey,
      queryFn: () => {
        const searchTerm = defferSearchQuery
          ? defferedSearchTerm
          : options.searchQuery;
        const results = searchTerm
          ? fuse.search(searchTerm, {
              ...(limit !== undefined && { limit }),
            })
          : defaultItems;

        const finalResults =
          results.length > 0
            ? results
            : matchAllOnEmptyQuery
              ? options.items
              : [];

        return finalResults;
      },
      meta: {
        queryKey,
      },
    }),
  };
};
