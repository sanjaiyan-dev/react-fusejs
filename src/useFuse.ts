import { useDeferredValue, useMemo } from "react";
import Fuse, { FuseResult } from "fuse.js";
import { useFuseParams } from "./types/useFuse.type";

export const useFuse = <T>(options: useFuseParams<T>) => {
  "use memo";
  const defferedSearchTerm = useDeferredValue(options.searchQuery.trim());
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
  const searchTerm = defferSearchQuery
    ? defferedSearchTerm
    : options.searchQuery;
  const results = searchTerm
    ? fuse.search(searchTerm, {
        ...(limit !== undefined && { limit }),
      })
    : defaultItems;

  const finalResults =
    results.length > 0 ? results : matchAllOnEmptyQuery ? options.items : [];

  return {
    defferedSearchTerm,
    results: finalResults,
  };
};
