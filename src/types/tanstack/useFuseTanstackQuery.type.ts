import { useFuseParams } from "../useFuse.type";

/**
 * Configuration for TanStack Query's caching behavior.
 *
 * Controls how long query results are cached and retained in memory.
 * These settings apply to all queries created by the hooks in this SDK.
 *
 * @remarks
 * **Caching Strategy:**
 * - `staleTime`: How long until cached data is considered stale (needs refetching)
 * - `gcTime`: How long unused data is kept in memory before garbage collection
 *
 * For example, with defaults:
 * - Fresh data: [0-5 minutes] - Query uses cached data without background refetch
 * - Stale data: [5-12 minutes] - Query uses cached data but triggers background refetch
 * - Evicted: [12+ minutes] - Data is removed from cache memory
 *
 * **Common patterns:**
 * - Frequently changing data (chat): `{ staleTime: 0, gcTime: 1000 * 60 }` (1 min)
 * - Stable data (model info): `{ staleTime: 1000 * 60 * 60, gcTime: 1000 * 60 * 60 * 24 }` (1 day)
 *
 * @see https://tanstack.com/query/latest/docs/react/guides/important-defaults
 */
interface CacheConfig {
  /**
   * Time in milliseconds until the data is considered stale.
   *
   * During the stale time window, cached data is used immediately without background refetch.
   * After stale time expires, the next query will trigger a background refetch while still
   * using the stale data initially.
   *
   * @default 300000 (5 minutes)
   */
  staleTime?: number;

  /**
   * Time in milliseconds until unused data is removed from the cache (garbage collection).
   * Data that hasn't been accessed for this duration will be permanently removed from memory.
   *
   * @default 720000 (12 minutes)
   */
  gcTime?: number;

  /**
   * Maximum number of search queries to keep in the cache simultaneously.
   *
   * Each unique search term creates a new cache entry. Keeping this value low
   * (e.g., 3-5) helps maintain memory efficiency, especially with large datasets.
   *
   * @default 3
   */
  maxCacheLimit?: number;
}

export interface useFuseTanstackQueryParams<T> extends useFuseParams<T> {
  /**
   * Caching configuration for the search results.
   */
  cacheConfig: CacheConfig;

  /**
   * An optional additional key to unique-ify the query in the TanStack cache.
   * This is useful when using multiple search hooks for the same data with different configurations.
   */
  queryKey?: string;
}
