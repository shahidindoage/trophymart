import React, { useEffect, useMemo, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { TrophyProduct } from '../types/trophy';
import { TROPHY_PRODUCTS } from '../data/trophyData';
import { TrophySilhouette } from './TrophySilhouette';

interface ProductCatalogProps {
  selectedCategory: string;
  onSelectCategory: (category: string) => void;
  onQuickView: (product: TrophyProduct) => void;
  onAddToCart: (product: TrophyProduct) => void;
  onOpenCustomizerWithProduct: (product: TrophyProduct) => void;
}

export const ProductCatalog: React.FC<ProductCatalogProps> = ({
  selectedCategory,
  onSelectCategory,
  onQuickView
}) => {
  const products = useMemo(() => {
    if (selectedCategory === 'all') return TROPHY_PRODUCTS;
    return TROPHY_PRODUCTS.filter((p) => p.category === selectedCategory);
  }, [selectedCategory]);

  const sliderRef = useRef<HTMLDivElement>(null);

  const scrollSlider = (direction: 1 | -1) => {
    const el = sliderRef.current;
    if (!el) return;
    const first = el.firstElementChild as HTMLElement | null;
    const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
    const step = (first?.offsetWidth ?? 300) + gap;
    el.scrollBy({ left: direction * step, behavior: 'smooth' });
  };

  // Auto-slide: advances one card at a time, loops back, pauses on hover/touch and off-screen
  useEffect(() => {
    const el = sliderRef.current;
    if (!el) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let paused = false;
    let visible = true;

    const advance = () => {
      if (paused || !visible) return;
      const first = el.firstElementChild as HTMLElement | null;
      const gap = parseFloat(getComputedStyle(el).columnGap || '0') || 0;
      const step = (first?.offsetWidth ?? 300) + gap;
      const atEnd = el.scrollLeft + el.clientWidth >= el.scrollWidth - 4;
      el.scrollTo({ left: atEnd ? 0 : el.scrollLeft + step, behavior: 'smooth' });
    };

    const interval = window.setInterval(advance, 3500);

    const pause = () => {
      paused = true;
    };
    const resume = () => {
      paused = false;
    };

    el.addEventListener('pointerenter', pause);
    el.addEventListener('pointerleave', resume);
    el.addEventListener('touchstart', pause, { passive: true });
    el.addEventListener('touchend', resume);

    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
      },
      { threshold: 0.25 }
    );
    observer.observe(el);

    return () => {
      window.clearInterval(interval);
      observer.disconnect();
      el.removeEventListener('pointerenter', pause);
      el.removeEventListener('pointerleave', resume);
      el.removeEventListener('touchstart', pause);
      el.removeEventListener('touchend', resume);
    };
  }, [products.length]);

  return (
    <section id="catalog" className="py-16 sm:py-20 bg-[#FAF9F5] border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <div className="relative z-20 flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-4 sm:mb-5">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-[#0E233E] leading-[1.02] lg:whitespace-nowrap">
            Find Your <span className="italic text-[#C5222A]">Perfect Trophy</span>
          </h2>

          <div className="flex items-center gap-2 shrink-0">
         

            <button
              onClick={() => scrollSlider(-1)}
              aria-label="Previous products"
              className="w-9 h-9 sm:w-10 sm:h-10  border border-[#0E233E]/25 bg-white flex items-center justify-center text-[#0E233E] transition-colors hover:bg-[#0E233E] hover:text-white"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollSlider(1)}
              aria-label="Next products"
              className="w-9 h-9 sm:w-10 sm:h-10  border border-[#0E233E]/25 bg-white flex items-center justify-center text-[#0E233E] transition-colors hover:bg-[#0E233E] hover:text-white"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Cards Slider */}
        {products.length === 0 ? (
          <div className="py-20 text-center">
            <p className="text-sm text-[#64748B]">No products in this category.</p>
          </div>
        ) : (
          <div
            ref={sliderRef}
            className="flex gap-3 sm:gap-5 overflow-x-auto snap-x snap-mandatory scroll-smooth -mt-14 sm:-mt-20 pt-24 sm:pt-28 pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {products.map((product) => (
              <button
                key={product.id}
                onClick={() => onQuickView(product)}
                aria-label={product.name}
                className="group relative snap-start shrink-0 w-[calc(50%-0.375rem)] sm:w-[calc(33.333%-0.833rem)] lg:w-[calc(25%-0.9375rem)] pt-20 sm:pt-24 text-left"
              >
                {/* Card body */}
                <div className="relative aspect-square overflow-hidden bg-[radial-gradient(circle_at_50%_38%,#242424_0%,#121212_60%,#060606_100%)]">
                  <div className="absolute top-[42%] left-1/2 -translate-x-1/2 h-8 w-20 rounded-full bg-[#DFB967]/15 blur-2xl" />

                  {/* Name */}
                  <div className="absolute inset-x-0 bottom-0 h-14 sm:h-16 px-3 sm:px-4 pt-1.5 flex items-start justify-center bg-gradient-to-t from-[#050505] via-[#050505]/90 to-transparent">
                    <h3 className="text-center font-serif text-[13px] sm:text-sm lg:text-base font-bold text-white leading-snug line-clamp-2">
                      {product.name}
                    </h3>
                  </div>
                </div>

                {/* Image — top portion breaks out above the card */}
                <div className="pointer-events-none absolute inset-x-0 top-0 bottom-16 sm:bottom-[4.5rem] z-10 flex items-end justify-center">
                  {product.image ? (
                    <img
                      src={product.image}
                      alt={product.name}
                      loading="lazy"
                      draggable={false}
                      className="max-h-full max-w-[78%] object-contain drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  ) : (
                    <TrophySilhouette
                      silhouetteType={product.silhouetteType}
                      plateFinish="gold"
                      recipientName="RECIPIENT"
                      awardTitle="EXCELLENCE"
                      className="w-28 sm:w-36 lg:w-40 h-36 sm:h-44 lg:h-52 drop-shadow-2xl transition-transform duration-500 group-hover:scale-105"
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};
