import React from 'react';
import { Building2 } from 'lucide-react';
import { CLIENT_LOGOS } from '../data/trophyData';

export const TrustStrip: React.FC = () => {
  return (
    <section id="trust" className="py-2  bg-white border-b border-[#E8E4DA]">
     

      {/* Logo Marquee */}
      <div className="relative overflow-hidden py-8">
        <div className="pointer-events-none absolute inset-y-0 left-0 w-20 sm:w-40 bg-gradient-to-r from-white to-transparent z-10" />
        <div className="pointer-events-none absolute inset-y-0 right-0 w-20 sm:w-40 bg-gradient-to-l from-white to-transparent z-10" />

        <div className="flex w-max animate-marquee">
          {[0, 1].map((half) => (
            <div key={half} className="flex shrink-0 items-center gap-14 pr-14">
              {[...CLIENT_LOGOS, ...CLIENT_LOGOS].map((client, idx) => (
                <img
                  key={`${half}-${idx}`}
                  src={client.logo}
                  alt={client.name}
                  loading="lazy"
                  referrerPolicy="no-referrer"
                  title={client.name}
                  className="h-8 sm:h-10 w-auto max-w-[140px] shrink-0 object-contain grayscale opacity-60 transition duration-300 hover:grayscale-0 hover:opacity-100"
                />
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
