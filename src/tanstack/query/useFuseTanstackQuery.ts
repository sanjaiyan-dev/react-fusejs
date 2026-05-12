import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFuseTanstackQueryParams } from "../../types/tanstack/useFuseTanstackQuery.type";
import { startTransition, useDeferredValue, useEffect, useMemo } from "react";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js";

/**
 * A TanStack Query-powered React hook for fuzzy searching using Fuse.js.
 * Provides built-in caching, automatic cache pruning, and seamless integration with TanStack Query.
 *
 * @template T The type of items being searched.
 * @param options Configuration options for Fuse.js, caching, and the hook.
 * @returns An object containing the query key and the TanStack Query result.
 *
 * @example
 * ```tsx
 * const { results } = useFuseTanstackQuery({
 *   items: list,
 *   searchQuery: "search text",
 *   keys: ["title"],
 *   cacheConfig: { maxCacheLimit: 5 }
 * });
 *
 * if (results.isLoading) return <Loading />;
 * return <ul>{results.data?.map(r => <li key={r.refIndex}>{r.item.title}</li>)}</ul>;
 * ```
 */
export const useFuseTanstackQuery = <T>(
  options: useFuseTanstackQueryParams<T>,
) => {
  const {
    threshold = 0.5,
    deferSearchQuery = true,
    matchAllOnEmptyQuery = false,
    limit,
    items,
    ...restOptions
  } = options;
  const queryClient = useQueryClient();
  const queryCache = queryClient.getQueryCache();
  const deferredSearchTerm = useDeferredValue(restOptions.searchQuery.trim());
  const searchTerm = deferSearchQuery
    ? deferredSearchTerm
    : restOptions.searchQuery.trim();
  const queryKey = ["react-fusejs", searchTerm, restOptions.queryKey] as const;

  const defaultItems: FuseResult<T>[] = useMemo(() => {
    return items.map((item, index) => ({ item, refIndex: index }));
  }, [items]);

  const fuse = useMemo(
    () =>
      new Fuse(items, {
        threshold,
        ...restOptions,
      }),
    [threshold, restOptions, items],
  );

  useEffect(() => {
    // 1. Find all search-related queries in the cache
    const searchQueries = queryCache.findAll({ queryKey: ["react-fusejs"] });
    const maxLimit = restOptions.cacheConfig.maxCacheLimit ?? 3;
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
    searchTerm,
    queryClient,
    queryCache,
    restOptions.cacheConfig.maxCacheLimit,
  ]);

  return {
    /** `['react-fusejs', searchQuery, options.queryKey]` */
    queryKey,
    results: useQuery({
      queryKey,
      queryFn: (): FuseResult<T>[] => {
        if (!searchTerm) {
          return matchAllOnEmptyQuery ? defaultItems : [];
        }

        return fuse.search(searchTerm, {
          ...(limit !== undefined && { limit }),
        });
      },
      staleTime: restOptions.cacheConfig.staleTime ?? Infinity,
      gcTime: restOptions.cacheConfig.gcTime ?? Infinity,
      meta: {
        queryKey,
      },
    }),
  };
};
