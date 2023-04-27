import { useEffect, useRef, useCallback } from "react";

export const useDebounce = <Args extends unknown[]>(
  delay: number,
  handler: (...args: Args) => unknown
) => {
  const timerRef = useRef<ReturnType<typeof setTimeout>>();

  const cancelIfProccessing = () => {
    if (timerRef.current) {
      clearTimeout(timerRef.current);
    }
  };

  useEffect(() => cancelIfProccessing, []);

  return useCallback(
    (...args: Args) => {
      cancelIfProccessing();

      timerRef.current = setTimeout(() => {
        handler(...args);
      }, delay);
    },
    [delay, handler]
  );
};
