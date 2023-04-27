import { useEffect, RefObject } from "react";

type EventType = MouseEvent | TouchEvent;

function useClickOutside<T extends HTMLElement = HTMLElement>(
  refs: RefObject<T>[],
  callback: () => void
): void {
  useEffect(() => {
    function handleClickOutside(event: EventType) {
      const isClickInside = refs.some((ref) => {
        return ref.current && ref.current.contains(event.target as Node);
      });

      if (!isClickInside) {
        callback();
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [refs, callback]);
}

export default useClickOutside;
