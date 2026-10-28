import React, { useEffect, useRef, useState } from 'react';

const STATS = [
  { value: 50000, label: 'Customers Served' },
  { value: 50, label: 'Cities We Deliver' },
  { value: 10, label: 'Years of Experience' },
  { value: 3000, label: 'Design and Options' }
];

const COUNT_DURATION_MS = 1800;
const easeOutCubic = (t: number) => 1 - Math.pow(1 - t, 3);

export const StatsSection: React.FC = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  // Count-up animation, triggered once when the section scrolls into view
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();

        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
          setProgress(1);
          return;
        }

        const start = performance.now();
        const tick = (now: number) => {
          const t = Math.min((now - start) / COUNT_DURATION_MS, 1);
          setProgress(easeOutCubic(t));
          if (t < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="stats"
      className="relative overflow-hidden bg-[#FAF9F5] border-b border-[#E8E4DA] border-t"
    >
      {/* Ambient navy aura */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[36rem] h-40 bg-[#0E233E]/5 blur-3xl pointer-events-none rounded-full" />
      {/* <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#C59B27]/70 to-transparent"
      /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 sm:py-16">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-8">
          {STATS.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] tabular-nums tracking-tight leading-none">
                {Math.round(stat.value * progress).toLocaleString('en-IN')} +
              </div>
              <span className="mt-3 mx-auto block h-px w-10 bg-[#C59B27]" />
              <div className="mt-3 text-xs sm:text-sm font-semibold uppercase tracking-[0.16em] text-[#C5222A]">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
