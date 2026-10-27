import React from 'react';

interface HeroProps {
  onExploreCatalog?: () => void;
  onOpenCustomizer?: () => void;
  onOpenQuoteModal?: () => void;
}

export const Hero: React.FC<HeroProps> = () => {
  const kicker = 'Luxury Trophy Atelier';
  const title = 'Timeless Elegance & Grandeur in Every Trophy';
  const description =
    'Discover master-crafted optical crystal awards, 24k electroplated championship chalices, and bespoke corporate citations engineered to immortalize every triumph.';

  return (
    <section className="relative w-full min-h-screen flex items-center overflow-hidden bg-[#070D18]">
      
      {/* Background Trophy Video */}
      <div className="absolute inset-0 z-0">
        <video
          className="w-full h-full object-cover object-center lg:object-right"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          poster="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/Silver%20and%20Gold%20Trophy%20Under%20Stadium%20Lights.png"
          aria-hidden="true"
        >
          <source
            src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/trophy.mp4"
            type="video/mp4"
          />
        </video>

        {/* Cinematic Scrim & Directional Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/25 sm:via-black/55 sm:to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-36 bg-gradient-to-b from-black/80 via-black/30 to-transparent" />
        {/* <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-[#FAF9F5] via-[#FAF9F5]/40 to-transparent" /> */}
      </div>

      {/* Hero Foreground Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16 sm:pt-36 sm:pb-24">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Static Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-6 sm:space-y-8 max-w-2xl text-left min-h-[300px]">

            <div className="space-y-5">
              {/* Small Kicker Label */}
              <div className="inline-flex items-center gap-2.5">
                <span className="text-xs sm:text-[13px] font-semibold tracking-[0.22em] uppercase text-white/70">
                  {kicker}
                </span>
              </div>

              {/* Oversized Serif Headline */}
              <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white leading-[1.08] text-balance drop-shadow-md">
                {title}
              </h1>

              {/* Refined Prose */}
              <p className="font-sans text-sm sm:text-base lg:text-lg text-white/80 leading-relaxed max-w-xl">
                {description}
              </p>
            </div>

          </div>

          {/* Right Column: Kept open to reveal the magnificent stadium trophy visual */}
          <div className="lg:col-span-5 hidden lg:block" />

        </div>

        {/* Hero Bottom Stats Strip */}
        <div className="mt-14 sm:mt-16 pt-8 border-t border-white/20 grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 w-full max-w-5xl">
          <div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums drop-shadow-sm tracking-tight">
              50,000 +
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-1.5">
              Customer Served
            </div>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums drop-shadow-sm tracking-tight">
              50 +
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-1.5">
              Cities We Deliver
            </div>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums drop-shadow-sm tracking-tight">
              10 +
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-1.5">
              Years of Experience
            </div>
          </div>

          <div>
            <div className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white tabular-nums drop-shadow-sm tracking-tight">
              3,000 +
            </div>
            <div className="text-xs sm:text-sm font-medium tracking-wide text-white/80 mt-1.5">
              Design and Options
            </div>
          </div>
        </div>

      </div>

    </section>
  );
};
