import React from 'react';
import { ArrowRight, MapPin, Palette, Sparkles, Zap } from 'lucide-react';

interface BespokeProcessProps {
  onOpenCustomizer: () => void;
  onOpenQuoteModal: () => void;
}

export const BespokeProcess: React.FC<BespokeProcessProps> = ({
  onOpenCustomizer,
  onOpenQuoteModal
}) => {
  const features = [
    {
      icon: Zap,
      title: 'Quick Turnaround',
      description: 'Fast and efficient service to meet your urgent needs.',
      image:
        'https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80'
    },
    {
      icon: Palette,
      title: 'Customization',
      description: 'Personalised trophies designed to your specifications.',
      image:
        'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/trohpy-2.jpg'
    },
    {
      icon: MapPin,
      title: 'Pan India Reach',
      description: 'Serving clients across the country.',
      image:
        'https://images.unsplash.com/photo-1524492412937-b28074a5d7da?auto=format&fit=crop&w=1400&q=80'
    }
  ];

  const steps = [
    'Tell us your vision',
    'Collaborate with our expert designers',
    'Personalise your trophy',
    'Review and confirm your order',
    'Final approval and dispatch'
  ];

  const marqueeItems = [
    'Optical Crystal',
    '24K Gold Plating',
    'Laser Engraving',
    'Bespoke Designs',
    '66+ Cities',
    'Factory Direct'
  ];

  return (
    <section
      id="craftsmanship"
      className="py-20 sm:py-24 bg-white border-b border-[#E8E4DA] relative overflow-hidden"
    >
      <div className="absolute -top-24 right-0 w-96 h-96 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#070D18]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] mt-4 leading-[1.02] tracking-tight lg:whitespace-nowrap">
            Why Choose <span className="italic text-[#C5222A]">Trophy Mart?</span>
          </h2>
        </div>

        {/* Bento Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Quick Turnaround — wide */}
          <article className="lg:col-span-7 group relative overflow-hidden  bg-[#070D18] min-h-[300px] sm:min-h-[340px] border border-white/10">
            <img
              src={features[0].image}
              alt={features[0].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/85 to-[#070D18]/10" />

            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Zap className="w-4 h-4 text-[#DFB967]" />
                </span>
                <span className="font-serif text-5xl sm:text-6xl font-bold text-white/15 leading-none">
                  01
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {features[0].title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/70 leading-relaxed">
                  {features[0].description}
                </p>
                <span className="mt-4 block h-px w-12 bg-[#DFB967] transition-all duration-500 group-hover:w-24" />
              </div>
            </div>
          </article>

          {/* Customization — tall */}
          <article className="lg:col-span-5 group relative overflow-hidden  bg-[#070D18] min-h-[300px] sm:min-h-[340px] border border-white/10">
            <img
              src={features[1].image}
              alt={features[1].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/60 to-[#070D18]/15" />

            <div className="relative h-full flex flex-col justify-between p-7 sm:p-9">
              <div className="flex items-start justify-between">
                <span className="w-10 h-10 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <Palette className="w-4 h-4 text-[#DFB967]" />
                </span>
                <span className="font-serif text-5xl sm:text-6xl font-bold text-white/15 leading-none">
                  02
                </span>
              </div>

              <div>
                <h3 className="font-serif text-3xl sm:text-4xl font-bold text-white tracking-tight">
                  {features[1].title}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/70 leading-relaxed">
                  {features[1].description}
                </p>
                <span className="mt-4 block h-px w-12 bg-[#DFB967] transition-all duration-500 group-hover:w-24" />
              </div>
            </div>
          </article>

          {/* Pan India Reach — full strip */}
          <article className="lg:col-span-12 group relative overflow-hidden  bg-[#070D18] border border-white/10">
            <img
              src={features[2].image}
              alt={features[2].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/90 to-[#070D18]/30" />

            <div className="relative flex flex-col sm:flex-row sm:items-center justify-between gap-5 p-7 sm:p-9">
              <div className="flex items-center gap-4">
                <span className="w-10 h-10 shrink-0 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center">
                  <MapPin className="w-4 h-4 text-[#DFB967]" />
                </span>
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white tracking-tight">
                    {features[2].title}
                  </h3>
                  <p className="text-sm text-white/70 mt-1">
                    {features[2].description}
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap gap-2">
                {['Mumbai', 'New Delhi', 'Bengaluru', 'Chennai', 'Kolkata', '+61 more'].map(
                  (city) => (
                    <span
                      key={city}
                      className="px-3 py-1.5  border border-white/15 bg-white/5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/75"
                    >
                      {city}
                    </span>
                  )
                )}
              </div>
            </div>
          </article>
        </div>

      

        {/* Bespoke Customisation Panel */}
        <div className="relative mt-16 sm:mt-20">
          <div className="relative overflow-hidden bg-[#070D18] border border-white/10 shadow-2xl">
            {/* Background image */}
            <img
              src="https://trophymart.co.in/wp-content/uploads/2024/07/AdobeStock_734878397-scaled-1.jpeg"
              alt=""
              aria-hidden="true"
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 h-full w-full object-cover object-center opacity-90"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,#070D18_0%,rgba(7,13,24,0.95)_30%,rgba(7,13,24,0.78)_48%,rgba(7,13,24,0.32)_66%,rgba(7,13,24,0.05)_88%)]" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/50" />

            {/* Fine frame + top light */}
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-3 sm:inset-4 "
            />
            <span
              aria-hidden="true"
              className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#DFB967]/80 to-transparent"
            />

            <div className="relative">
              {/* Copy */}
              <div className="px-7 pt-12 pb-10 sm:px-12 sm:pt-14 lg:px-16 lg:pt-16 lg:pb-14">
                <div className="max-w-xl lg:max-w-[52%]">
                

                  <h3 className="mt-5 font-serif text-[2.15rem] sm:text-5xl lg:text-[3.1rem] font-bold text-white leading-[1.02] tracking-tight">
                    Want to customise
                    <br />
                    <span className="italic text-[#DFB967]">
                      your own trophy?
                    </span>
                  </h3>

                  <p className="mt-4 max-w-md text-sm text-white/60 leading-relaxed">
                    Work directly with our master craftspeople to shape an award
                    that is entirely, unmistakably yours — from first sketch to
                    final polish.
                  </p>

                  <div className="mt-7 flex flex-wrap items-center gap-3">
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
              </div>

              {/* Process band */}
              <div className="relative border-t border-white/10 bg-[#070D18]/75 backdrop-blur-md">
                <div className="flex items-center justify-between gap-4 px-7 pt-5 sm:px-12 lg:px-16">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.25em] text-white/40">
                    The Process
                  </span>
                 
                </div>

                <ol className="grid grid-cols-2 gap-x-6 gap-y-7 px-7 py-6 sm:grid-cols-5 sm:gap-0 sm:px-12 sm:py-7 lg:px-16">
                  {steps.map((step, idx) => (
                    <li
                      key={step}
                      className={`group ${
                        idx !== 0
                          ? 'sm:border-l sm:border-white/10 sm:pl-5 lg:pl-6'
                          : ''
                      }`}
                    >
                      <span className="font-serif text-2xl font-bold leading-none text-[#DFB967]">
                        {String(idx + 1).padStart(2, '0')}
                      </span>
                      <span className="mt-3 block h-px w-6 bg-white/20 transition-all duration-500 group-hover:w-full group-hover:bg-[#DFB967]/60" />
                      <p className="mt-3 text-[11px] sm:text-xs text-white/65 leading-relaxed">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
