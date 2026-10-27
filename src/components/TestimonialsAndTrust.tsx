import React from 'react';
import { Star, Quote } from 'lucide-react';
import { TESTIMONIALS } from '../data/trophyData';

export const TestimonialsAndTrust: React.FC = () => {
  return (
    <section id="clients" className="py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] mt-4 leading-[1.02] tracking-tight lg:whitespace-nowrap">
            Reflections of{' '}
            <span className="italic text-[#C5222A]">our craftsmanship.</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E5E0D4]  p-6 flex flex-col justify-between hover:border-[#0E233E] transition-all duration-300 hover:shadow-lg relative"
            >
              <Quote className="w-8 h-8 text-[#E8E4DA] absolute top-5 right-5 pointer-events-none" />

              <div>
                <div className="flex text-amber-500 gap-0.5 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-amber-400 text-amber-500" />
                  ))}
                </div>

                <p className="font-sans text-xs sm:text-sm text-[#334155] leading-relaxed italic">
                  "{t.quote}"
                </p>
              </div>

              <div className="pt-5 mt-5 border-t border-[#F1EFE9]">
                <div className="font-serif text-base font-bold text-[#0E233E]">
                  {t.name}
                </div>
                <div className="text-[11px] text-[#C5222A] font-medium">
                  {t.designation}
                </div>
                <div className="text-[11px] text-[#64748B]">
                  {t.organization} · {t.city}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
