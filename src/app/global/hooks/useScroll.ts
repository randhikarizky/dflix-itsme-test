'use client';

import { useScroll as Scroll, useMotionValueEvent } from 'framer-motion';
import { useRef, useMemo, useState, useCallback } from 'react';

// ----------------------------------------------------------------------

export type UseScrollOffSetTopReturn = {
  offsetTop: boolean;
  elementRef: React.RefObject<HTMLDivElement>;
};

export function useScroll(top = 0): UseScrollOffSetTopReturn {
  const elementRef = useRef<HTMLDivElement>(null);
  
  const { scrollY } = Scroll();
  
  const [offsetTop, setOffsetTop] = useState(false);
  
  const handleScrollChange = useCallback(
    (val: number) => {
      const scrollHeight = Math.round(val);
      
      if (elementRef?.current) {
        const rect = elementRef.current.getBoundingClientRect();
        const elementTop = Math.round(rect.top);
        
        setOffsetTop(elementTop < top);
      } else {
        setOffsetTop(scrollHeight > top);
      }
    },
    [elementRef, top]
  );
  
  useMotionValueEvent(
    scrollY,
    'change',
    useMemo(() => handleScrollChange, [handleScrollChange])
  );
  
  const memoizedValue = useMemo(() => ({ elementRef, offsetTop }), [offsetTop]);
  
  return memoizedValue;
}
