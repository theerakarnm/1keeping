import { useEffect, useRef } from 'react';
import { useThrottledCallback } from '@/hooks/useThrottledCallback';

interface ParallaxEffectProps {
  children: React.ReactNode;
}

export function ParallaxEffect({ children }: ParallaxEffectProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = useThrottledCallback((e: MouseEvent) => {
    if (!containerRef.current) return;

    const { left, top, width, height } = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - left) / width - 0.5;
    const y = (e.clientY - top) / height - 0.5;

    const layers = containerRef.current.getElementsByClassName('parallax-layer');
    Array.from(layers).forEach((layer, i) => {
      const speed = (i + 1) * 15;
      const transform = `
        rotateX(${y * speed}deg)
        rotateY(${x * -speed}deg)
        translateZ(${(i + 1) * 10}px)
      `;
      (layer as HTMLElement).style.transform = transform;
    });
  }, 16);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    container.addEventListener('mousemove', handleMouseMove);
    return () => container.removeEventListener('mousemove', handleMouseMove);
  }, [handleMouseMove]);

  return (
    <div ref={containerRef} className="parallax">
      {children}
    </div>
  );
}