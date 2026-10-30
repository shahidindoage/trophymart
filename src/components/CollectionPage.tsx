import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, SlidersHorizontal, X, Check } from 'lucide-react';
import { All_TROPHY_PRODUCTS } from '../data/trophyData';
import { TrophySilhouette } from './TrophySilhouette';

interface CollectionPageProps {
  onOpenQuoteModal: () => void;
}

export const CollectionPage: React.FC<CollectionPageProps> = ({ onOpenQuoteModal }) => {
  const products = All_TROPHY_PRODUCTS;

  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [maxPrice, setMaxPrice] = useState<number>(Number.MAX_SAFE_INTEGER);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  // Lock body scroll while the filter drawer is open
  useEffect(() => {
    if (!isFilterOpen) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [isFilterOpen]);

  const categories = useMemo(() => {
    const map = new Map<string, string>();
    products.forEach((p) => map.set(p.category, p.categoryLabel));
    return [...map.entries()].map(([id, label]) => ({ id, label }));
  }, [products]);

  const priceCeiling = useMemo(
    () => Math.ceil(Math.max(...products.map((p) => p.price)) / 500) * 500,
    [products]
  );

  const filtered = useMemo(
    () =>
      products.filter(
        (p) =>
          (selectedCategories.length === 0 || selectedCategories.includes(p.category)) &&
          p.price <= maxPrice
      ),
    [products, selectedCategories, maxPrice]
  );

  const activeFilterCount =
    selectedCategories.length + (maxPrice < priceCeiling ? 1 : 0);

  const toggleCategory = (id: string) =>
    setSelectedCategories((prev) =>
      prev.includes(id) ? prev.filter((c) => c !== id) : [...prev, id]
    );

  const clearFilters = () => {
    setSelectedCategories([]);
    setMaxPrice(Number.MAX_SAFE_INTEGER);
  };

  return (
    <div className="min-h-screen bg-white text-[#161C24] font-sans">
      {/* ── Hero Banner (breadcrumb sits at the top of the banner) ── */}
      <section className="relative bg-[#0E233E] overflow-hidden">
        {/* Background image */}
        <img
          src="/banner3.png"
          alt=""
          aria-hidden="true"
          className="absolute inset-0 h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0E233E]/95 via-[#0E233E]/75 to-[#0E233E]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0E233E]/80 via-transparent to-[#0E233E]/60" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6">
          {/* Breadcrumb — top of banner */}
          <nav
            aria-label="Breadcrumb"
            className="py-4 border-b border-white/10 text-[11px] uppercase tracking-[0.18em] text-white/60"
          >
            <Link to="/" className="hover:text-[#DFB967] transition-colors">Home</Link>
            <span className="mx-2.5 text-white/30">/</span>
            <span>Products</span>
            <span className="mx-2.5 text-white/30">/</span>
            <span className="text-[#DFB967] font-semibold">Trophies</span>
          </nav>

          <div className="relative z-10 py-10 sm:py-12 max-w-xl">
            <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl font-bold text-white leading-[1.05]">
              The Trophies Collection
            </h1>
            <p className="mt-3 max-w-md text-xs sm:text-sm leading-relaxed text-white/70">
              Hand-finished crystal, brass and walnut award pieces, engraved and delivered pan-India.
            </p>
          </div>
        </div>
      </section>

      {/* ── Product Grid ── */}
      <div id="collection-pieces" className="max-w-7xl mx-auto px-4 sm:px-6 pt-12 sm:pt-16 pb-16 sm:pb-20">
        {/* Toolbar: piece count + filter trigger (top-right) */}
        <div className="mb-5 flex items-center justify-between gap-4">
          <p className="text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.18em] text-[#64748B]">
            {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
          </p>
          <button
            type="button"
            onClick={() => setIsFilterOpen(true)}
            className="inline-flex items-center gap-2 h-10 px-4 border border-[#0E233E]/25 text-[#0E233E] text-[10px] sm:text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#0E233E] hover:text-white"
          >
            <SlidersHorizontal size={14} />
            Filters
            {activeFilterCount > 0 && (
              <span className="min-w-4 h-4 px-1 inline-flex items-center justify-center bg-[#C5222A] text-white text-[9px] font-bold rounded-full">
                {activeFilterCount}
              </span>
            )}
          </button>
        </div>

        {filtered.length === 0 ? (
          <div className="py-20 text-center border border-[#E5E0D4]">
            <p className="text-sm text-[#64748B]">No pieces match your filters.</p>
            <button
              type="button"
              onClick={clearFilters}
              className="mt-4 text-[11px] font-bold uppercase tracking-wider text-[#C5222A] underline underline-offset-4"
            >
              Clear Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-5">
            {filtered.map((product) => (
            <article key={product.id} className="group bg-white border border-[#E5E0D4] flex flex-col">
              <div className="relative aspect-[3/5] bg-[#FAF9F5] overflow-hidden">
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

                {/* {product.badge && (
                  <span className="absolute top-0 left-0 z-10 bg-[#0E233E] text-white text-[8px] sm:text-[9px] font-bold uppercase tracking-[0.18em] px-2 py-1.5">
                    {product.badge}
                  </span>
                )} */}
              </div>

              <div className="p-4 sm:p-5 flex flex-1 flex-col">
                <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#C59B27]">
                  {product.categoryLabel}
                </p>
                <h2 className="mt-1.5 font-serif text-[15px] sm:text-lg font-bold leading-snug text-[#0E233E] line-clamp-2">
                  {product.name}
                </h2>
                <p className="mt-1.5 text-[10px] sm:text-[11px] tracking-wide text-[#94A3B8] line-clamp-1">
                  {product.height}
                </p>

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
        )}
      </div>

      {/* ── Enquiry Band ── */}
      {/* <section className="border-t border-[#E5E0D4] bg-[#FAF9F5]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.28em] text-[#C5222A]">
              Bespoke Commissions
            </p>
            <h2 className="mt-2 font-serif text-2xl sm:text-3xl font-bold text-[#0E233E] leading-tight">
              Need a trophy made to your story?
            </h2>
            <p className="mt-2 text-sm text-[#64748B]">
              Our studio customises size, material and engraving for every order.
            </p>
          </div>
          <button
            type="button"
            
            className="inline-flex items-center justify-center gap-2 self-start sm:self-auto h-12 px-6 bg-[#0E233E] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#C5222A] transition-colors"
          >
            Request a Quote
            <ArrowRight size={14} />
          </button>
        </div>
      </section> */}
      {/* ── Filter Drawer ── */}
      {isFilterOpen && (
        <>
          <div
            className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm"
            onClick={() => setIsFilterOpen(false)}
          />
          <aside className="fixed inset-y-0 left-0 z-50 w-[85vw] max-w-sm bg-white border-r border-[#E5E0D4] shadow-2xl flex flex-col">
            {/* Drawer header */}
            <div className="flex items-center justify-between px-5 py-4 border-b border-[#E5E0D4]">
              <h3 className="font-serif text-xl font-bold text-[#0E233E]">Filters</h3>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                aria-label="Close filters"
                className="p-2 text-[#64748B] hover:text-[#0E233E] hover:bg-[#F4F1EA] rounded-full transition-colors"
              >
                <X size={18} />
              </button>
            </div>

            {/* Drawer body */}
            <div className="flex-1 overflow-y-auto px-5 py-6 space-y-8">
              {/* Category */}
              <div>
                <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0E233E]">
                  Category
                </h4>
                <div className="mt-3 space-y-2">
                  {categories.map((c) => {
                    const checked = selectedCategories.includes(c.id);
                    return (
                      <button
                        key={c.id}
                        type="button"
                        onClick={() => toggleCategory(c.id)}
                        className="w-full flex items-center gap-3 text-left"
                      >
                        <span
                          className={`w-4 h-4 border flex items-center justify-center shrink-0 transition-colors ${
                            checked ? 'bg-[#0E233E] border-[#0E233E]' : 'border-[#CBD5E1] bg-white'
                          }`}
                        >
                          {checked && <Check size={11} className="text-white" />}
                        </span>
                        <span className="text-xs text-[#334155]">{c.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Price */}
              <div>
                <div className="flex items-center justify-between">
                  <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-[#0E233E]">
                    Max Price
                  </h4>
                  <span className="text-xs font-bold text-[#C5222A] tabular-nums">
                    {maxPrice >= priceCeiling ? 'Any' : `₹${maxPrice.toLocaleString('en-IN')}`}
                  </span>
                </div>
                <input
                  type="range"
                  min={500}
                  max={priceCeiling}
                  step={500}
                  value={Math.min(maxPrice, priceCeiling)}
                  onChange={(e) => setMaxPrice(Number(e.target.value))}
                  className="mt-4 w-full accent-[#C5222A] cursor-pointer"
                />
                <div className="mt-1.5 flex justify-between text-[10px] text-[#94A3B8] tabular-nums">
                  <span>₹500</span>
                  <span>₹{priceCeiling.toLocaleString('en-IN')}</span>
                </div>
              </div>
            </div>

            {/* Drawer footer */}
            <div className="px-5 py-4 border-t border-[#E5E0D4] flex items-center gap-3">
              <button
                type="button"
                onClick={clearFilters}
                className="flex-1 h-11 border border-[#0E233E]/25 text-[#0E233E] text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#F4F1EA]"
              >
                Clear All
              </button>
              <button
                type="button"
                onClick={() => setIsFilterOpen(false)}
                className="flex-1 h-11 bg-[#0E233E] text-white text-[11px] font-bold uppercase tracking-[0.15em] transition-colors hover:bg-[#1A365D]"
              >
                Show {filtered.length} {filtered.length === 1 ? 'Piece' : 'Pieces'}
              </button>
            </div>
          </aside>
        </>
      )}
    </div>
  );
};
