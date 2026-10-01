import { useEffect, useRef, useState } from 'react';
import type { ReactNode } from 'react';

type RevealVariant = 'up' | 'left' | 'right' | 'scale' | 'none';

interface ScrollRevealProps {
  children: ReactNode;
  variant?: RevealVariant;
  delay?: number; // stagger in ms
  className?: string;
  threshold?: number;
}

export const ScrollReveal = ({
  children,
  variant = 'up',
  delay = 0,
  className = '',
  threshold = 0.1
}: ScrollRevealProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);
    const listener = (e: MediaQueryListEvent) => setHasReducedMotion(e.matches);
    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Trigger EVERY time it enters or leaves the viewport
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold,
        rootMargin: '0px 0px -10% 0px'
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold]);

  // If reduced motion is enabled, render without animations
  if (hasReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  const baseStyles = 'transition-all duration-700 ease-out';
  const delayStyle = delay ? { transitionDelay: `${delay}ms` } : {};

  const variants = {
    'up': 'opacity-0 translate-y-[30px]',
    'left': 'opacity-0 -translate-x-[30px]',
    'right': 'opacity-0 translate-x-[30px]',
    'scale': 'opacity-0 scale-[0.97]',
    'none': ''
  };

  const visibleState = isVisible 
    ? 'opacity-100 translate-y-0 translate-x-0 scale-100' 
    : variants[variant];

  return (
    <div 
      ref={ref} 
      className={`${baseStyles} ${visibleState} ${className}`}
      style={delayStyle}
    >
      {children}
    </div>
  );
};
