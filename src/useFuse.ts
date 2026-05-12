import { useDeferredValue, useMemo } from "react";
import Fuse, { FuseResult } from "fuse.js";
import { useFuseParams } from "./types/useFuse.type";

/**
 * A high-performance React hook for fuzzy searching using Fuse.js.
 * Supports React Compiler and optional deferred search query updates for better UX.
 *
 * @template T The type of items being searched.
 * @param options Configuration options for Fuse.js and the hook.
 * @returns An object containing the deferred search term and the matching results.
 *
 * @example
 * ```tsx
 * const { results } = useFuse({
 *   items: list,
 *   searchQuery: "search text",
 *   keys: ["title", "author"]
 * });
 * ```
 */
export const useFuse = <T>(options: useFuseParams<T>) => {
  "use memo";
  const deferredSearchTerm = useDeferredValue(options.searchQuery.trim());
  const {
    threshold = 0.5,
    deferSearchQuery = true,
    matchAllOnEmptyQuery = false,
    limit,
    items,
    ...restOptions
  } = options;

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

  const searchTerm = deferSearchQuery
    ? deferredSearchTerm
    : options.searchQuery.trim();

  const results = useMemo(() => {
    if (!searchTerm) {
      return matchAllOnEmptyQuery ? defaultItems : [];
    }

    return fuse.search(searchTerm, {
      ...(limit !== undefined && { limit }),
    });
  }, [searchTerm, fuse, limit, matchAllOnEmptyQuery, defaultItems]);

  return {
    deferredSearchTerm,
    results,
  };
};
