// LocomotiveScrollProvider.js
import React, { createContext, useContext, useEffect, useRef } from 'react';
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll/src/locomotive-scroll.scss'; // Ensure you have this line to import the necessary styles

const LocomotiveScrollContext = createContext();

export const LocomotiveScrollProvider = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true,
    });

    return () => {
      if (scroll) scroll.destroy();
    };
  }, []);

  return (
    <LocomotiveScrollContext.Provider value={{ scrollRef }}>
      <div ref={scrollRef}>{children}</div>
    </LocomotiveScrollContext.Provider>
  );
};

export const useLocomotiveScroll = () => useContext(LocomotiveScrollContext);
