import React from 'react';
import { MapPin, Palette, Zap } from 'lucide-react';

export const BespokeProcess: React.FC = () => {
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
          {/* Quick Turnaround â€” wide */}
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

          {/* Customization â€” tall */}
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

          {/* Pan India Reach â€” full strip */}
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
      </div>
    </section>
  );
};
