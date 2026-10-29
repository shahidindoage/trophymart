import React, { useEffect, useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { TESTIMONIALS } from '../data/trophyData';

interface TestimonialsCustomisationSectionProps {
  onOpenCustomizer: () => void;
  onOpenQuoteModal: () => void;
}

const AUTO_ADVANCE_MS = 6000;

export const TestimonialsCustomisationSection: React.FC<TestimonialsCustomisationSectionProps> = ({
  onOpenCustomizer,
  onOpenQuoteModal
}) => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const id = window.setInterval(
      () => setActive((cur) => (cur + 1) % TESTIMONIALS.length),
      AUTO_ADVANCE_MS
    );
    return () => window.clearInterval(id);
  }, [paused]);

  const goTo = (index: number) =>
    setActive((index + TESTIMONIALS.length) % TESTIMONIALS.length);

  const t = TESTIMONIALS[active];

  // Shared card classes — both cards now identical in size treatment
  const CARD_CLASSES =
    'relative w-full flex-1 overflow-hidden border border-white/10 bg-white/5 backdrop-blur-sm p-5 sm:p-9 flex flex-col justify-between';

  return (
    <section
      id="clients"
      className="relative overflow-hidden bg-[#070D18] border-y border-white/10 py-12 sm:py-20 lg:py-24"
    >
      <img
        src="https://trophymart.co.in/wp-content/uploads/2024/07/AdobeStock_734878397-scaled-1.jpeg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-40"
      />
      <div className="absolute inset-0 bg-[#070D18]/70" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/60 to-[#070D18]/30" />
      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFB967]/80 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-stretch">

          {/* Left Column: Testimonials Carousel */}
          <div
            className="flex flex-col h-full"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <h2 className="font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white">
              Reflections of{' '}
              <span className="italic text-[#DFB967]">our craftsmanship.</span>
            </h2>

            <div className={`${CARD_CLASSES} mt-6 sm:mt-10`}>
              <div>
                <Quote className="w-6 h-6 sm:w-8 sm:h-8 text-[#DFB967]/30 absolute top-5 right-5 sm:top-6 sm:right-6 pointer-events-none" />

                <div className="flex text-amber-400 gap-0.5 mb-3 sm:mb-4">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <blockquote className="font-sans text-sm sm:text-base text-white/85 leading-relaxed italic min-h-[5.5rem] sm:min-h-[7rem]">
                  "{t.quote}"
                </blockquote>
              </div>

              <div className="pt-4 sm:pt-5 mt-4 sm:mt-5 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <div className="font-serif text-sm sm:text-base font-bold text-white">{t.name}</div>
                  <div className="text-[11px] text-[#DFB967] font-medium">{t.designation}</div>
                  <div className="text-[11px] text-white/55">
                    {t.organization} · {t.city}
                  </div>
                </div>

                <div className="flex shrink-0 self-end sm:self-auto gap-2">
                  <button
                    onClick={() => goTo(active - 1)}
                    aria-label="Previous testimonial"
                    className="w-9 h-9 border border-white/25 text-white/80 flex items-center justify-center transition-colors hover:bg-[#DFB967] hover:text-[#070D18] hover:border-[#DFB967]"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => goTo(active + 1)}
                    aria-label="Next testimonial"
                    className="w-9 h-9 border border-white/25 text-white/80 flex items-center justify-center transition-colors hover:bg-[#DFB967] hover:text-[#070D18] hover:border-[#DFB967]"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Bespoke Customisation Card */}
          <div className="flex flex-col h-full">
            {/* Title block mirrors the left column so both cards top-align — only needed at lg+ */}
            <h2 className="hidden lg:block font-serif text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white opacity-0 pointer-events-none select-none">
              Reflections of{' '}
              <span className="italic text-[#DFB967]">our craftsmanship.</span>
            </h2>

            <div className={`${CARD_CLASSES} mt-6 sm:mt-10 items-center text-center`}>
              <span
                aria-hidden="true"
                className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFB967]/80 to-transparent"
              />

              <div>
                <h3 className="font-serif text-2xl sm:text-4xl lg:text-5xl font-bold text-white leading-tight sm:leading-[1.05] tracking-tight">
                  Want to customise
                  <span className="block italic text-[#DFB967]">your own trophy?</span>
                </h3>

                <p className="mt-4 sm:mt-5 max-w-md text-xs sm:text-base text-white/65 leading-relaxed mx-auto">
                  Work directly with our master craftspeople to shape an award that is
                  entirely, unmistakably yours — from first sketch to final polish.
                </p>
              </div>

              <div className="mt-6 sm:mt-8 flex flex-wrap items-center justify-center gap-3 w-full sm:w-auto">
                <button
                  onClick={onOpenCustomizer}
                  className="group w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#DFB967] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#070D18] transition-colors hover:bg-[#F0D08A]"
                >
                  <span>Reach out to us</span>
                  <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};