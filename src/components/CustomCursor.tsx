import { useEffect, useRef, useState, useCallback } from 'react';

const CustomCursor = () => {
  const ringRef = useRef<HTMLDivElement>(null);
  const dotRef = useRef<HTMLDivElement>(null);
  const pos = useRef({ x: -100, y: -100 });
  const ringPos = useRef({ x: -100, y: -100 });
  const rafId = useRef<number>(0);
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [isTouchDevice, setIsTouchDevice] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  // Detect touch device + reduced motion
  useEffect(() => {
    const touchMq = window.matchMedia('(pointer: coarse)');
    const motionMq = window.matchMedia('(prefers-reduced-motion: reduce)');

    setIsTouchDevice(touchMq.matches);
    setHasReducedMotion(motionMq.matches);

    const onTouchChange = (e: MediaQueryListEvent) => setIsTouchDevice(e.matches);
    const onMotionChange = (e: MediaQueryListEvent) => setHasReducedMotion(e.matches);

    touchMq.addEventListener('change', onTouchChange);
    motionMq.addEventListener('change', onMotionChange);

    return () => {
      touchMq.removeEventListener('change', onTouchChange);
      motionMq.removeEventListener('change', onMotionChange);
    };
  }, []);

  // Apply/remove cursor:none on document
  useEffect(() => {
    if (isTouchDevice || hasReducedMotion) {
      document.documentElement.style.cursor = '';
      return;
    }
    document.documentElement.style.cursor = 'none';

    // Also hide cursor on all interactive elements
    const style = document.createElement('style');
    style.id = 'kd-cursor-hide';
    style.textContent = `
      *, *::before, *::after { cursor: none !important; }
    `;
    document.head.appendChild(style);

    return () => {
      document.documentElement.style.cursor = '';
      style.remove();
    };
  }, [isTouchDevice, hasReducedMotion]);

  // Track hoverable elements
  const handleMouseOver = useCallback((e: MouseEvent) => {
    const target = e.target as HTMLElement;
    if (!target) return;
    const isClickable =
      target.closest('a, button, [role="button"], input, textarea, select, label, [tabindex]') !== null ||
      window.getComputedStyle(target).cursor === 'pointer';
    setIsHovering(isClickable);
  }, []);

  // Mouse tracking + ring animation loop
  useEffect(() => {
    if (isTouchDevice || hasReducedMotion) return;

    const onMouseMove = (e: MouseEvent) => {
      pos.current = { x: e.clientX, y: e.clientY };
      if (!isVisible) setIsVisible(true);

      // Dot follows instantly
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
      }
    };

    const onMouseLeave = () => setIsVisible(false);
    const onMouseEnter = () => setIsVisible(true);

    // Smooth ring follow loop
    const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
    const animate = () => {
      ringPos.current.x = lerp(ringPos.current.x, pos.current.x, 0.15);
      ringPos.current.y = lerp(ringPos.current.y, pos.current.y, 0.15);

      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringPos.current.x}px, ${ringPos.current.y}px) translate(-50%, -50%)`;
      }
      rafId.current = requestAnimationFrame(animate);
    };

    document.addEventListener('mousemove', onMouseMove, { passive: true });
    document.addEventListener('mouseover', handleMouseOver, { passive: true });
    document.addEventListener('mouseleave', onMouseLeave);
    document.addEventListener('mouseenter', onMouseEnter);

    rafId.current = requestAnimationFrame(animate);

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseover', handleMouseOver);
      document.removeEventListener('mouseleave', onMouseLeave);
      document.removeEventListener('mouseenter', onMouseEnter);
      cancelAnimationFrame(rafId.current);
    };
  }, [isTouchDevice, hasReducedMotion, isVisible, handleMouseOver]);

  // Don't render on touch devices or reduced motion
  if (isTouchDevice || hasReducedMotion) return null;

  return (
    <>
      {/* Outer ring — trails with lerp */}
      <div
        ref={ringRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          width: isHovering ? 44 : 32,
          height: isHovering ? 44 : 32,
          borderRadius: '50%',
          border: `1.5px solid ${isHovering ? 'var(--kd-red)' : 'rgba(255, 255, 255, 0.6)'}`,
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.25s cubic-bezier(0.16,1,0.3,1), height 0.25s cubic-bezier(0.16,1,0.3,1), border-color 0.25s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
      />
      {/* Center dot — follows instantly */}
      <div
        ref={dotRef}
        aria-hidden="true"
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 99999,
          pointerEvents: 'none',
          width: isHovering ? 6 : 5,
          height: isHovering ? 6 : 5,
          borderRadius: '50%',
          backgroundColor: 'var(--kd-red)',
          opacity: isVisible ? 1 : 0,
          transition: 'width 0.2s ease, height 0.2s ease, opacity 0.2s ease',
          willChange: 'transform',
        }}
      />
    </>
  );
};

export default CustomCursor;
