import React, { useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { TrophyProduct } from '../types/trophy';
import { RELATED_PRODUCTS } from '../data/trophyData';
import { TrophySilhouette } from './TrophySilhouette';

interface SimilarProductsProps {
  currentCategory: TrophyProduct['category'];
  excludeId: string;
}

export const SimilarProducts: React.FC<SimilarProductsProps> = ({
  currentCategory,
  excludeId
}) => {
  const picks = useMemo(() => {
    const pool = RELATED_PRODUCTS.filter((p) => p.id !== excludeId);
    const sameCategory = pool.filter((p) => p.category === currentCategory);
    const rest = pool.filter((p) => p.category !== currentCategory);
    return [...sameCategory, ...rest].slice(0, 4);
  }, [currentCategory, excludeId]);

  if (picks.length === 0) return null;

  return (
    <section className="border-t border-[#E5E0D4] bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20">
        {/* Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
          <div>
            <div className="w-10 h-px bg-[#C59B27]" />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#C5222A]">
              Curated For You
            </p>
            <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E233E] mt-2 leading-[1.05]">
              Similar <span className="italic text-[#C5222A]">Products</span>
            </h2>
          </div>

          <Link
            to="/"
            className="hidden sm:inline-flex items-center gap-2 self-start sm:self-auto text-[11px] font-bold uppercase tracking-[0.15em] text-[#0E233E] border-b border-[#0E233E]/30 pb-1 hover:text-[#C5222A] hover:border-[#C5222A] transition-colors"
          >
            Explore All Products
            <ArrowRight size={13} />
          </Link>
        </div>

        {/* Hairline card grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-[#E5E0D4] border border-[#E5E0D4]">
          {picks.map((product) => (
            <article
              key={product.id}
              className="group bg-white text-left flex flex-col"
            >
              <div className="relative aspect-[4/5] bg-[#FAF9F5] overflow-hidden">
                {product.image ? (
                  <img
                    src={product.image}
                    alt={product.name}
                    loading="lazy"
                    draggable={false}
                    className="absolute inset-0 h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <TrophySilhouette
                      silhouetteType={product.silhouetteType}
                      plateFinish="gold"
                      className="h-2/3 w-auto transition-transform duration-500 group-hover:scale-105"
                    />
                  </div>
                )}
              </div>

              <div className="p-4 sm:p-5 flex flex-1 flex-col">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C59B27]">
                  {product.categoryLabel}
                </p>
                <h3 className="mt-1.5 font-serif text-[15px] sm:text-lg font-bold leading-snug text-[#0E233E] line-clamp-2">
                  {product.name}
                </h3>

                <div className="mt-auto pt-4 flex items-baseline gap-2">
                  <span className="font-serif text-lg sm:text-xl font-bold text-[#0E233E] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </span>
                  {product.originalPrice && (
                    <span className="text-[11px] text-[#94A3B8] line-through tabular-nums">
                      ₹{product.originalPrice.toLocaleString('en-IN')}
                    </span>
                  )}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
