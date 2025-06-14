"use client";
import { useState, useEffect } from 'react';

export const useCardWidth = () => {
  const [cardWidth, setCardWidth] = useState(300);

  useEffect(() => {
     const update = () => {
      const width = window.innerWidth;
      if (width < 768) setCardWidth(250);
    //   else if (width < 768) setCardWidth(260);
      else if (width < 1200) setCardWidth(280);
      else setCardWidth(317);
    };

    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  return cardWidth;
};
