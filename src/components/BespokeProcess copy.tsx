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
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0E233E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Editorial Header */}
        <div className="grid lg:grid-cols-12 gap-8 items-end mb-12 sm:mb-16">
          <div className="lg:col-span-7">
           
            <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] mt-4 leading-[0.95] tracking-tight">
              Why Choose
            
              <span className="italic text-[#C5222A]">Trophy Mart?</span>
            </h2>
          </div>

         
        </div>

        {/* Bento Feature Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          {/* Quick Turnaround — wide */}
          <article className="lg:col-span-7 group relative overflow-hidden rounded-2xl bg-[#0E233E] min-h-[300px] sm:min-h-[340px] border border-[#0E233E]">
            <img
              src={features[0].image}
              alt={features[0].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-60 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E233E] via-[#0E233E]/85 to-[#0E233E]/10" />

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
          <article className="lg:col-span-5 group relative overflow-hidden rounded-2xl bg-[#0E233E] min-h-[300px] sm:min-h-[340px] border border-[#0E233E]">
            <img
              src={features[1].image}
              alt={features[1].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-55 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0E233E] via-[#0E233E]/60 to-[#0E233E]/15" />

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
          <article className="lg:col-span-12 group relative overflow-hidden rounded-2xl bg-[#0E233E] border border-[#0E233E]">
            <img
              src={features[2].image}
              alt={features[2].title}
              loading="lazy"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover opacity-30 transition-transform duration-700 ease-out group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-[#0E233E] via-[#0E233E]/90 to-[#0E233E]/30" />

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
                      className="px-3 py-1.5 rounded-full border border-white/15 bg-white/5 text-[10px] sm:text-[11px] font-semibold uppercase tracking-wider text-white/75"
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
          <div className="relative overflow-hidden rounded-[1.75rem] bg-[#0A1A30] px-6 py-10 sm:p-12 lg:p-14 shadow-xl">
            {/* Ambient accents */}
            <div className="absolute -top-28 -left-24 w-80 h-80 rounded-full bg-[#C59B27]/20 blur-3xl pointer-events-none" />
            <div className="absolute -bottom-28 right-1/4 w-80 h-80 rounded-full bg-[#C5222A]/20 blur-3xl pointer-events-none" />
            <span className="pointer-events-none absolute -bottom-8 right-0 select-none font-serif text-[7rem] sm:text-[12rem] font-bold leading-none text-white/[0.035]">
              Trophy
            </span>

            <div className="relative grid lg:grid-cols-12 gap-10 lg:gap-8 items-center">
              {/* Copy + Timeline */}
              <div className="lg:col-span-7">
              
                <h3 className="font-serif text-3xl sm:text-4xl lg:text-[2.75rem] font-bold text-white mt-2 leading-[1.05] tracking-tight">
                  Want To Customise
                  <br className="hidden sm:block" /> Your Own Trophy?
                </h3>
                <p className="mt-3 text-sm text-white/65 leading-relaxed max-w-lg">
                  Freedom to create the perfect award for you — a 5-step
                  customisation process.
                </p>

                {/* Timeline */}
                <ol className="relative mt-8 grid grid-cols-2 sm:grid-cols-5 gap-x-4 gap-y-7">
                  <span
                    aria-hidden="true"
                    className="hidden sm:block absolute top-4 left-4 right-4 h-px bg-gradient-to-r from-[#DFB967]/70 via-white/25 to-transparent"
                  />
                  {steps.map((step, idx) => (
                    <li key={step} className="relative">
                      <span className="relative z-10 flex h-8 w-8 items-center justify-center rounded-full border border-[#DFB967]/70 bg-[#0A1A30] font-serif text-sm font-bold text-[#DFB967]">
                        {idx + 1}
                      </span>
                      <p className="mt-3 pr-2 text-[11px] sm:text-xs text-white/75 leading-snug">
                        {step}
                      </p>
                    </li>
                  ))}
                </ol>

                <div className="mt-8 flex flex-wrap gap-3">
                  <button
                    onClick={onOpenCustomizer}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#DFB967] text-[#0E233E] hover:bg-[#C59B27] rounded-full transition-colors shadow-sm inline-flex items-center gap-1.5"
                  >
                    <span>Start Designing</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                  <button
                    onClick={onOpenQuoteModal}
                    className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-transparent border border-white/30 hover:border-white hover:bg-white/5 text-white rounded-full transition-colors"
                  >
                    Request a Quote
                  </button>
                </div>
              </div>

              {/* Trophy Visual */}
              <div className="lg:col-span-5 relative flex items-center justify-center">
                <div className="absolute w-56 h-56 sm:w-72 sm:h-72 rounded-full border border-dashed border-white/15 animate-[spin_40s_linear_infinite]" />
                <div className="absolute w-40 h-40 sm:w-52 sm:h-52 rounded-full bg-[#DFB967]/20 blur-3xl" />
                <img
                  src="/trophis/Zenith-Star-1022-AG-1-3-scaled-removebg-preview.png"
                  alt="Bespoke crystal trophy"
                  className="relative h-56 sm:h-72 lg:h-80 w-auto object-contain drop-shadow-[0_25px_45px_rgba(0,0,0,0.55)]"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
