import type { IFuseOptions } from "fuse.js";

export interface useFuseParams<T> extends IFuseOptions<T> {
  /**
   * Whether to match all items when the search query is empty.
   *
   * @default false
   */
  matchAllOnEmptyQuery?: boolean;

  /**
   * Whether to defer the search query updates for a smoother user experience.
   * Internally, this uses React's `useDeferredValue` to prevent UI lag during typing.
   *
   * @default true
   */
  deferSearchQuery?: boolean;

  /**
   * At what point does the match algorithm give up. A threshold of `0.0`
   * requires a perfect match, while a threshold of `1.0` would match anything.
   *
   * @default 0.5
   */
  threshold?: number;

  /**
   * When `true`, it enables the use of unix-like search commands.
   * See Fuse.js documentation for details on extended search syntax.
   */
  extendedSearch?: boolean;

  /**
   * When `true`, enables token search with TF-IDF scoring.
   */
  tokenSearch?: boolean;

  /**
   * The search query string.
   */
  searchQuery: string;

  /**
   * The array of items to search through.
   */
  items: T[];

  /**
   * Maximum number of items to return in the search results.
   * If not provided, all matching items are returned.
   */
  limit?: number;
}
