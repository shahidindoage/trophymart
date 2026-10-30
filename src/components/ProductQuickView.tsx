import React, { useState } from 'react';
import { X, Check, Shield, Clock, Sparkles, ShoppingBag } from 'lucide-react';
import { TrophyProduct } from '../types/trophy';
import { TrophySilhouette } from './TrophySilhouette';

interface ProductQuickViewProps {
  product: TrophyProduct | null;
  onClose: () => void;
  onAddToCart: (product: TrophyProduct, customization?: any) => void;
  onOpenCustomizer: (product: TrophyProduct) => void;
}

export const ProductQuickView: React.FC<ProductQuickViewProps> = ({
  product,
  onClose,
  onAddToCart,
  onOpenCustomizer
}) => {
  const [quantity, setQuantity] = useState<number>(1);
  const [recipientName, setRecipientName] = useState<string>('');
  const [awardTitle, setAwardTitle] = useState<string>('');
  const [plateFinish, setPlateFinish] = useState<'gold' | 'chrome' | 'rose-gold' | 'matte-black'>('gold');
  const [added, setAdded] = useState(false);

  if (!product) return null;

  // Calculate tier price based on selected quantity
  const matchedTier = [...product.bulkTiers]
    .reverse()
    .find((t) => quantity >= t.minQty) || product.bulkTiers[0];

  const handleAdd = () => {
    onAddToCart(
      { ...product, price: matchedTier.price },
      recipientName || awardTitle
        ? {
            recipientName,
            awardTitle,
            organization: 'Trophy Mart Honors',
            plateFinish,
            eventDate: '2026'
          }
        : undefined
    );
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-[60] overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-white border border-[#E5E0D4] rounded-lg max-w-4xl w-full max-h-[92vh] overflow-y-auto overflow-x-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 p-6 sm:p-8">
          
          {/* Left Column: Visual Silhouette & Plate Toggle */}
          <div className="bg-[#FAF9F5] border border-[#E5E0D4] rounded-lg p-6 flex flex-col justify-between items-center relative">
            <div className="w-full flex items-center justify-between text-xs text-[#64748B]">
              <span className="font-semibold text-[#0E233E]">{product.categoryLabel}</span>
              <span className="font-mono">{product.sku}</span>
            </div>

            <div className="py-6 flex items-center justify-center w-full min-h-[300px]">
              <TrophySilhouette
                silhouetteType={product.silhouetteType}
                plateFinish={plateFinish}
                recipientName={recipientName || 'HONOREE'}
                awardTitle={awardTitle || 'EXCELLENCE'}
                className="w-56 h-72"
              />
            </div>

            {/* Plaque Finish Selector */}
            <div className="w-full pt-3 border-t border-[#E8E4DA] flex items-center justify-center gap-2">
              <span className="text-[11px] text-[#64748B]">Plaque Tone:</span>
              <button
                onClick={() => setPlateFinish('gold')}
                className={`w-5 h-5 rounded-full bg-amber-400 border ${
                  plateFinish === 'gold' ? 'ring-2 ring-[#0E233E]' : ''
                }`}
                title="24k Gold"
              />
              <button
                onClick={() => setPlateFinish('chrome')}
                className={`w-5 h-5 rounded-full bg-slate-300 border ${
                  plateFinish === 'chrome' ? 'ring-2 ring-[#0E233E]' : ''
                }`}
                title="Chrome Silver"
              />
              <button
                onClick={() => setPlateFinish('rose-gold')}
                className={`w-5 h-5 rounded-full bg-rose-300 border ${
                  plateFinish === 'rose-gold' ? 'ring-2 ring-[#0E233E]' : ''
                }`}
                title="Rose Gold"
              />
              <button
                onClick={() => setPlateFinish('matte-black')}
                className={`w-5 h-5 rounded-full bg-zinc-800 border ${
                  plateFinish === 'matte-black' ? 'ring-2 ring-[#0E233E]' : ''
                }`}
                title="Matte Black"
              />
            </div>
          </div>

          {/* Right Column: Specifications & Tier Table */}
          <div className="flex flex-col justify-between space-y-5">
            <div>
              <div className="text-xs uppercase tracking-wider font-semibold text-[#C5222A]">
                {product.categoryLabel}
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E233E] mt-1">
                {product.name}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                {product.description}
              </p>
            </div>

            {/* Technical Specifications Grid */}
            <div className="grid grid-cols-2 gap-3 py-3 border-y border-[#E8E4DA] text-xs">
              <div>
                <span className="text-[#64748B] block text-[11px]">Material</span>
                <span className="font-semibold text-[#0E233E]">{product.material}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[11px]">Dimensions</span>
                <span className="font-semibold text-[#0E233E]">{product.height}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[11px]">Net Weight</span>
                <span className="font-semibold text-[#0E233E]">{product.weight}</span>
              </div>
              <div>
                <span className="text-[#64748B] block text-[11px]">Dispatch Lead</span>
                <span className="font-semibold text-[#0E233E]">{product.turnaroundDays} Working Days</span>
              </div>
            </div>

            {/* Wholesale Volume Pricing Table */}
            <div>
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#0E233E] mb-2">
                Factory Volume Tier Pricing
              </div>
              <div className="grid grid-cols-4 gap-2 text-center text-xs">
                {product.bulkTiers.map((tier) => (
                  <div
                    key={tier.minQty}
                    className={`p-2 rounded border ${
                      quantity >= tier.minQty &&
                      (product.bulkTiers[product.bulkTiers.indexOf(tier) + 1] === undefined ||
                        quantity < product.bulkTiers[product.bulkTiers.indexOf(tier) + 1].minQty)
                        ? 'border-[#0E233E] bg-[#F4F1EA] text-[#0E233E] font-bold'
                        : 'border-[#E2E8F0] bg-white text-[#64748B]'
                    }`}
                  >
                    <div className="text-[10px] uppercase">{tier.minQty}+ pcs</div>
                    <div className="font-serif text-sm font-bold text-[#0E233E] mt-0.5 tabular-nums">
                      ₹{tier.price.toLocaleString('en-IN')}
                    </div>
                    <div className="text-[9px] text-[#C5222A]">{tier.discount}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Engraving Fields */}
            <div className="space-y-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#0E233E] block">
                Quick Engraving Inscription (Optional)
              </span>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="text"
                  placeholder="Honoree Name"
                  value={recipientName}
                  onChange={(e) => setRecipientName(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
                <input
                  type="text"
                  placeholder="Award Title"
                  value={awardTitle}
                  onChange={(e) => setAwardTitle(e.target.value)}
                  className="px-3 py-1.5 text-xs bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>
            </div>

            {/* Quantity Stepper & Price & Actions */}
            <div className="pt-3 border-t border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex items-center border border-[#CBD5E1] rounded bg-white">
                  <button
                    onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                    className="px-2.5 py-1 text-sm font-bold text-[#0E233E] hover:bg-[#F3F0E8]"
                  >
                    -
                  </button>
                  <span className="px-3 py-1 text-xs font-semibold tabular-nums text-[#0E233E]">
                    {quantity}
                  </span>
                  <button
                    onClick={() => setQuantity((q) => q + 1)}
                    className="px-2.5 py-1 text-sm font-bold text-[#0E233E] hover:bg-[#F3F0E8]"
                  >
                    +
                  </button>
                </div>

                <div>
                  <div className="text-[10px] text-[#64748B]">Total (Tier Rate)</div>
                  <div className="font-serif text-xl font-bold text-[#0E233E] tabular-nums">
                    ₹{(matchedTier.price * quantity).toLocaleString('en-IN')}
                  </div>
                </div>
              </div>

              <div className="flex items-center gap-2 w-full sm:w-auto">
                <button
                  onClick={() => {
                    onClose();
                    onOpenCustomizer(product);
                  }}
                  className="p-2.5 text-xs font-semibold text-[#0E233E] bg-[#FAF9F5] border border-[#0E233E] rounded hover:bg-[#0E233E] hover:text-white transition-colors"
                  title="Open in Full Bespoke Studio"
                >
                  <Sparkles className="w-4 h-4" />
                </button>

                <button
                  onClick={handleAdd}
                  className={`flex-1 sm:flex-initial px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-white rounded transition-all flex items-center justify-center gap-2 shadow-xs ${
                    added ? 'bg-emerald-700' : 'bg-[#C5222A] hover:bg-[#991B1B]'
                  }`}
                >
                  {added ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Add to Bag</span>
                    </>
                  )}
                </button>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};
