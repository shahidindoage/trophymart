import React, { useRef } from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface CategoryShowcaseProps {
  onSelectCategory: (category: string) => void;
}

interface CategoryItem {
  id: string;
  title: string;
  image: string;
  fit: 'contain' | 'cover';
}

const TROPHY_PATH = '/trophis/';

const categories: CategoryItem[] = [
  {
    id: 'crystal',
    title: 'Crystal Trophies',
    image: `${TROPHY_PATH}Haven-Star-1031-G-1-3-scaled-removebg-preview.png`,
    fit: 'contain'
  },
  {
    id: 'sculpted-gold',
    title: 'Gold Cups',
    image: `${TROPHY_PATH}Zenith-Star-1022-AG-1-3-scaled-removebg-preview.png`,
    fit: 'contain'
  },
  {
    id: 'plaques',
    title: 'Plaques & Mementos',
    image: `${TROPHY_PATH}Kite-Star-1011-L-4-scaled-removebg-preview.png`,
    fit: 'contain'
  },
  {
    id: 'medals',
    title: 'Championship Medals',
    image: `${TROPHY_PATH}Calvin-Star-1035-G-1-3-scaled-removebg-preview.png`,
    fit: 'contain'
  },
  {
    id: 'bespoke',
    title: 'Bespoke Awards',
    image: `${TROPHY_PATH}Fresco-Star-1007-L-1-1-scaled-removebg-preview.png`,
    fit: 'contain'
  },
  {
    id: 'all',
    title: 'All Trophies',
    image:
      'https://bombaytrophies.co.in/wp-content/uploads/2026/03/Custom-Glass-Trophies.webp',
    fit: 'cover'
  }
];

export const CategoryShowcase: React.FC<CategoryShowcaseProps> = ({ onSelectCategory }) => {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollByCard = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;

    const card = track.querySelector<HTMLElement>('[data-card]');
    const step = card ? card.offsetWidth + 20 : track.clientWidth * 0.8;

    track.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  return (
    <section
      id="collections"
      className="relative overflow-hidden bg-[#070D18] border-b border-white/10 py-16 sm:py-20"
    >
      {/* Background Trophy Visual */}
      <img
        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/Silver%20and%20Gold%20Trophy%20Under%20Stadium%20Lights.png"
        alt=""
        aria-hidden="true"
        referrerPolicy="no-referrer"
        className="absolute inset-0 w-full h-full object-cover object-right opacity-40"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-[#070D18] via-[#070D18]/85 to-[#070D18]/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-transparent to-[#070D18]/70" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex items-end justify-between gap-6 mb-8 sm:mb-10">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-white tracking-tight leading-[1.02] lg:whitespace-nowrap">
            Shopping <span className="italic text-[#C5222A]">by Category</span>
          </h2>

          <div className="flex shrink-0 gap-3">
            <button
              onClick={() => scrollByCard(-1)}
              aria-label="Previous categories"
              className="w-10 h-10 sm:w-11 sm:h-11  border border-white/25 text-white/80 flex items-center justify-center transition-colors hover:bg-white hover:text-[#0E233E]"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollByCard(1)}
              aria-label="Next categories"
              className="w-10 h-10 sm:w-11 sm:h-11  border border-white/25 text-white/80 flex items-center justify-center transition-colors hover:bg-white hover:text-[#0E233E]"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div
          ref={trackRef}
          className="no-scrollbar flex gap-5 overflow-x-auto scroll-smooth snap-x snap-mandatory py-2 -my-2"
        >
          {categories.map((category) => (
            <article
              key={category.id}
              data-card
              onClick={() => onSelectCategory(category.id)}
              className="snap-start shrink-0 w-[78%] sm:w-[calc(50%-0.625rem)] lg:w-[calc(33.333%-0.834rem)] xl:w-[calc(25%-0.9375rem)] cursor-pointer  bg-white p-5 sm:p-6 flex flex-col items-center gap-5 shadow-xl transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="relative aspect-square w-full max-w-[210px] rounded-full overflow-hidden bg-[#F4F1EA]">
                <img
                  src={category.image}
                  alt={category.title}
                  loading="lazy"
                  decoding="async"
                  referrerPolicy="no-referrer"
                  className={`h-full w-full ${
                    category.fit === 'contain' ? 'object-contain p-5' : 'object-cover'
                  }`}
                />
              </div>

              <h3 className="text-center text-base sm:text-lg font-medium text-[#161C24] leading-snug">
                {category.title}
              </h3>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
