import React from 'react';
import { ArrowRight } from 'lucide-react';

interface BespokeCustomisationSectionProps {
  onOpenCustomizer: () => void;
  onOpenQuoteModal: () => void;
}

export const BespokeCustomisationSection: React.FC<
  BespokeCustomisationSectionProps
> = ({ onOpenCustomizer, onOpenQuoteModal }) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#070D18] border-y border-white/10">
      {/* Background image */}
      <img
        src="https://trophymart.co.in/wp-content/uploads/2024/07/AdobeStock_734878397-scaled-1.jpeg"
        alt=""
        aria-hidden="true"
        loading="lazy"
        referrerPolicy="no-referrer"
        className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
      />
      <div className="absolute inset-0 bg-[#070D18]/80" />
      <div className="absolute inset-0 bg-gradient-to-b from-[#070D18] via-transparent to-[#070D18]" />

      <span
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFB967]/80 to-transparent"
      />

      {/* Centered content */}
      <div className="relative mx-auto flex max-w-4xl flex-col items-center px-6 py-24 text-center sm:py-28 lg:py-32">
        <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-[1.05] tracking-tight">
          Want to customise
          <span className="block italic text-[#DFB967]">
            your own trophy?
          </span>
        </h2>

        <p className="mt-5 max-w-xl text-sm sm:text-base text-white/65 leading-relaxed">
          Work directly with our master craftspeople to shape an award that is
          entirely, unmistakably yours — from first sketch to final polish.
        </p>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <button
            onClick={onOpenCustomizer}
            className="group inline-flex items-center gap-2 bg-[#DFB967] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-[#070D18] transition-colors hover:bg-[#F0D08A]"
          >
            <span>Start Designing</span>
            <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-0.5" />
          </button>
          <button
            onClick={onOpenQuoteModal}
            className="inline-flex items-center border border-white/25 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.18em] text-white transition-colors hover:border-white/70 hover:bg-white/5"
          >
            Request a Quote
          </button>
        </div>
      </div>
    </section>
  );
};
