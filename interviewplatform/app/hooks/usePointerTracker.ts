import { useEffect } from 'react';

export const usePointerTracker = () => {
  useEffect(() => {
    let animFrameId: number | null = null;
    let mouseX = 0;
    let mouseY = 0;

    const updateCSSVariables = () => {
      document.documentElement.style.setProperty('--mx', `${mouseX}`);
      document.documentElement.style.setProperty('--my', `${mouseY}`);
    };

    const onPointerMove = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;

      // Use requestAnimationFrame for throttling
      if (animFrameId === null) {
        animFrameId = requestAnimationFrame(() => {
          updateCSSVariables();
          animFrameId = null;
        });
      }
    };

    const onPointerDown = (e: PointerEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      updateCSSVariables();
    };

    const onPointerLeave = () => {
      // Optional: fade out glow when leaving window
      // You can keep it or reset to 0, 0
    };

    window.addEventListener('pointermove', onPointerMove);
    window.addEventListener('pointerdown', onPointerDown);
    window.addEventListener('pointerleave', onPointerLeave);

    return () => {
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('pointerdown', onPointerDown);
      window.removeEventListener('pointerleave', onPointerLeave);

      if (animFrameId !== null) {
        cancelAnimationFrame(animFrameId);
      }
    };
  }, []);
};
