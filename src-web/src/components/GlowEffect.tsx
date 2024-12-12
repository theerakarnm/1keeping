import { useEffect, useRef } from 'react';

export function GlowEffect() {
  const glowRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!glowRef.current) return;

      const x = e.clientX - 300;
      const y = e.clientY - 300;

      glowRef.current.style.left = `${x}px`;
      glowRef.current.style.top = `${y}px`;
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return <div ref={glowRef} className="glow" />;
}