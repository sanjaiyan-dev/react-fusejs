import type { IFuseOptions } from "fuse.js";

export interface useFuseParams<T> extends IFuseOptions<T> {
  /**
   * Whether to match all items when the search query is empty.
   *
   * @default false
   */
  matchAllOnEmptyQuery?: boolean;
  /**
   * Whether to make in input defer the input for smooth and better user experience internally this uses `React.useDefferedValue`
   *
   * @default true
   */
  defferSearchQuery?: boolean;

  /** At what point does the match algorithm give up.
   *
   * @default 0.5
   */
  threshold?: number;

  /** When `true`, it enables the use of unix-like search commands.
   *
   */
  extendedSearch?: boolean;

  /** When `true`, enables token search with TF-IDF scoring.
   *
   */
  tokenSearch?: boolean;

  /**
   * The current search query.
   *
   * @requires
   */
  searchQuery: string;
  items: T[];
  index:JSON;
  limit?: number;
}
