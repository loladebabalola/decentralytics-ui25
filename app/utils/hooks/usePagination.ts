import { useState } from "react";

export function usePagination<T>(data: T[], initialCount: number = 5) {
  const [visibleCount, setVisibleCount] = useState(initialCount);
  const [showAll, setShowAll] = useState(false);


  /**
   * Returns a paginated subset of the data based on the showAll state.
   * If showAll is true, it returns the entire data array.
   * Otherwise, it returns a slice of the data array based on the visibleCount.
   */
  const paginatedData = showAll ? data : data.slice(0, visibleCount);


  // * Increases the number of visible items by the initialCount,
  //  * but ensures it doesn't exceed the total data length.
  // const showMore = () => {
  //   const nextCount = Math.min(visibleCount + initialCount, data.length);
  //   setVisibleCount(nextCount);
  // };


  /**
 * Toggles between showing all items and showing just a portion.
 * Also updates the visibleCount accordingly.
 */
  const toggleShowAll = () => {
    setShowAll((prev) => {
      const nextShowAll = !prev;
      setVisibleCount(nextShowAll ? data.length : initialCount);
      return nextShowAll;
    });
  };

  /**
   * Checks if there are more items to show.
   * Returns true if the visibleCount is less than the total data length.
   */
  const hasMore = visibleCount < data.length;

  return {
    paginatedData,
    showAll,
    toggleShowAll,
    hasMore,
    isTruncated: !showAll,
  };
}
