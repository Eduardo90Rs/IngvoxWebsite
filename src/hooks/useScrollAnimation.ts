import { useEffect, useRef } from 'react';

interface UseScrollAnimationOptions {
  threshold?: number;
  rootMargin?: string;
  triggerOnce?: boolean;
}

export const useScrollAnimation = (
  options: UseScrollAnimationOptions = {}
) => {
  const elementRef = useRef<HTMLElement>(null);
  const {
    threshold = 0.1,
    rootMargin = '0px 0px -50px 0px',
    triggerOnce = true
  } = options;

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up');
            entry.target.classList.remove('animate-on-scroll');
            
            if (triggerOnce) {
              observer.unobserve(entry.target);
            }
          } else if (!triggerOnce) {
            entry.target.classList.remove('animate-fade-in-up');
            entry.target.classList.add('animate-on-scroll');
          }
        });
      },
      {
        threshold,
        rootMargin,
      }
    );

    // Add initial class
    element.classList.add('animate-on-scroll');
    observer.observe(element);

    return () => {
      observer.disconnect();
    };
  }, [threshold, rootMargin, triggerOnce]);

  return elementRef;
};

export const useStaggerAnimation = (
  delay: number = 100,
  options: UseScrollAnimationOptions = {}
) => {
  const containerRef = useRef<HTMLElement>(null);
  
  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = Array.from(container.children) as HTMLElement[];
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            children.forEach((child, index) => {
              setTimeout(() => {
                child.classList.add('animate-fade-in-up');
                child.classList.remove('animate-on-scroll');
              }, index * delay);
            });
            
            if (options.triggerOnce !== false) {
              observer.unobserve(entry.target);
            }
          }
        });
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || '0px 0px -50px 0px',
      }
    );

    // Add initial classes to children
    children.forEach((child) => {
      child.classList.add('animate-on-scroll');
    });
    
    observer.observe(container);

    return () => {
      observer.disconnect();
    };
  }, [delay, options.threshold, options.rootMargin, options.triggerOnce]);

  return containerRef;
};