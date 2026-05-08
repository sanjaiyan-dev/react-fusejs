import { useQuery, useQueryClient } from "@tanstack/react-query";
import { useFuseTanstackQueryParams } from "../../types/tanstack/useFuseTanstackQuery.type";
import { useDeferredValue, useMemo } from "react";
import type { FuseResult } from "fuse.js";
import Fuse from "fuse.js/min";

const useFuseTanstackQuery = <T>(options: useFuseTanstackQueryParams<T>) => {
  const queryClient = useQueryClient();
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
