import React, { useState, useMemo } from 'react';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { TrophyProduct } from '../types/trophy';
import { TROPHY_PRODUCTS } from '../data/trophyData';
import { TrophySilhouette } from './TrophySilhouette';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelectProduct: (product: TrophyProduct) => void;
  onSelectCategory: (category: string) => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({
  isOpen,
  onClose,
  onSelectProduct,
  onSelectCategory
}) => {
  if (!isOpen) return null;

  const [query, setQuery] = useState('');

  const quickCategories = [
    { id: 'crystal', label: 'Optical Crystal' },
    { id: 'sculpted-gold', label: 'Gold Chalices' },
    { id: 'plaques', label: 'Executive Plaques' },
    { id: 'medals', label: 'Championship Medals' },
    { id: 'bespoke', label: 'Bespoke 3D' }
  ];

  const results = useMemo(() => {
    if (!query.trim()) return TROPHY_PRODUCTS.slice(0, 4);
    const q = query.toLowerCase();
    return TROPHY_PRODUCTS.filter(
      (p) =>
        p.name.toLowerCase().includes(q) ||
        p.categoryLabel.toLowerCase().includes(q) ||
        p.material.toLowerCase().includes(q) ||
        p.description.toLowerCase().includes(q)
    );
  }, [query]);

  return (
    <div className="fixed inset-0 z-50 bg-black/75 backdrop-blur-md flex items-start justify-center pt-20 px-4 animate-in fade-in duration-200">
      <div
        className="bg-white border border-[#E5E0D4] rounded-xl max-w-2xl w-full overflow-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Bar Input */}
        <div className="p-4 border-b border-[#E8E4DA] flex items-center gap-3">
          <Search className="w-5 h-5 text-[#94A3B8] shrink-0" />
          <input
            type="text"
            autoFocus
            placeholder="Search trophies by name, material, crystal, gold chalice..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="w-full text-sm sm:text-base text-[#0E233E] placeholder-[#94A3B8] bg-transparent focus:outline-none"
          />
          <button
            onClick={onClose}
            aria-label="Close search"
            className="p-1.5 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Quick Category Filters */}
        <div className="px-4 py-2.5 bg-[#FAF9F5] border-b border-[#E8E4DA] flex items-center gap-2 overflow-x-auto scrollbar-none">
          <span className="text-[11px] font-semibold text-[#64748B] uppercase tracking-wider shrink-0">
            Categories:
          </span>
          {quickCategories.map((c) => (
            <button
              key={c.id}
              onClick={() => {
                onSelectCategory(c.id);
                onClose();
              }}
              className="px-2.5 py-1 text-xs font-medium text-[#0E233E] bg-white border border-[#E2E8F0] rounded hover:border-[#0E233E] transition-colors whitespace-nowrap shrink-0"
            >
              {c.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="max-h-[60vh] overflow-y-auto p-4 divide-y divide-[#F1EFE9]">
          <div className="text-[11px] font-bold uppercase tracking-wider text-[#64748B] mb-2 px-1">
            {query.trim() ? `Found ${results.length} results` : 'Featured Trophies & Awards'}
          </div>

          {results.length === 0 ? (
            <div className="text-center py-10 text-xs text-[#64748B]">
              No trophies matched "{query}". Try searching for "crystal", "plaque", or "cup".
            </div>
          ) : (
            results.map((product) => (
              <div
                key={product.id}
                onClick={() => {
                  onSelectProduct(product);
                  onClose();
                }}
                className="py-3 px-2 flex items-center justify-between gap-4 hover:bg-[#FAF9F5] rounded-lg cursor-pointer transition-colors group"
              >
                <div className="flex items-center gap-3.5 min-w-0">
                  <div className="w-12 h-14 bg-white border border-[#E8E4DA] rounded p-1 flex items-center justify-center shrink-0">
                    <TrophySilhouette
                      silhouetteType={product.silhouetteType}
                      plateFinish="gold"
                      className="w-10 h-12"
                    />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-serif text-base font-bold text-[#0E233E] group-hover:text-[#C5222A] transition-colors truncate">
                      {product.name}
                    </h4>
                    <div className="text-[11px] text-[#64748B] truncate">
                      {product.material} · {product.height}
                    </div>
                  </div>
                </div>

                <div className="text-right shrink-0">
                  <div className="font-serif text-sm font-bold text-[#0E233E] tabular-nums">
                    ₹{product.price.toLocaleString('en-IN')}
                  </div>
                  <span className="text-[10px] text-[#C5222A] flex items-center gap-1 justify-end font-medium">
                    <span>View</span>
                    <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-0.5" />
                  </span>
                </div>
              </div>
            ))
          )}
        </div>

      </div>
    </div>
  );
};
