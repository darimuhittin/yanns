import React, { useEffect } from 'react';

interface ValidRefTarget {
  contains(target: EventTarget | null): any;
}

function useOutsideAlerter(ref: React.RefObject<ValidRefTarget>, callback) {
  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
    function handleClickOutside(event: MouseEvent) {
      if (ref.current && !ref.current.contains(event.target)) {
        if (callback) {
          callback();
        }
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [ref]);
}

export default useOutsideAlerter;
