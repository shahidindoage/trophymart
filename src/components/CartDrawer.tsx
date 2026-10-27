import React from 'react';
import { X, Trash2, ShoppingBag, ArrowRight, ShieldCheck, Sparkles } from 'lucide-react';
import { CartItem } from '../types/trophy';
import { TrophySilhouette } from './TrophySilhouette';

interface CartDrawerProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
  onExplore: () => void;
}

export const CartDrawer: React.FC<CartDrawerProps> = ({
  isOpen,
  onClose,
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout,
  onExplore
}) => {
  if (!isOpen) return null;

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  // Subtotal calculation
  const subtotal = items.reduce((sum, item) => {
    // Check if item qualifies for bulk tier
    const bulkTier = [...item.product.bulkTiers]
      .reverse()
      .find((t) => item.quantity >= t.minQty) || item.product.bulkTiers[0];
    return sum + bulkTier.price * item.quantity;
  }, 0);

  // Automatic volume discount bonus: 10% off for 10+ total units, 20% off for 50+ total units
  let volumeDiscount = 0;
  if (totalUnits >= 50) {
    volumeDiscount = Math.round(subtotal * 0.15);
  } else if (totalUnits >= 10) {
    volumeDiscount = Math.round(subtotal * 0.08);
  }

  const netTotal = subtotal - volumeDiscount;
  const estimatedGst = Math.round(netTotal * 0.18);
  const grandTotal = netTotal + estimatedGst;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-black/60 backdrop-blur-xs flex justify-end">
      <div
        className="bg-white border-l border-[#E5E0D4] w-full max-w-lg sm:max-w-md h-full flex flex-col justify-between shadow-2xl relative overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Drawer Header */}
        <div className="p-5 border-b border-[#E8E4DA] flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <ShoppingBag className="w-5 h-5 text-[#0E233E]" />
            <h2 className="font-serif text-xl font-bold text-[#0E233E]">
              Commemorative Bag ({totalUnits} {totalUnits === 1 ? 'award' : 'awards'})
            </h2>
          </div>
          <button
            onClick={onClose}
            aria-label="Close cart"
            className="p-1.5 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Drawer Items List */}
        <div className="flex-1 overflow-y-auto p-5 space-y-4">
          {items.length === 0 ? (
            <div className="text-center py-24 space-y-4">
              <div className="w-16 h-16 rounded-full bg-[#FAF9F5] border border-[#E8E4DA] flex items-center justify-center mx-auto text-[#94A3B8]">
                <ShoppingBag className="w-8 h-8" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-[#0E233E]">
                  Your commemorative bag is empty
                </h3>
                <p className="text-xs text-[#64748B] mt-1 max-w-xs mx-auto">
                  Browse our curated collections or personalize a trophy with custom engraving.
                </p>
              </div>
              <button
                onClick={() => {
                  onClose();
                  onExplore();
                }}
                className="px-5 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0E233E] text-white rounded hover:bg-[#1A365D] transition-colors"
              >
                Browse Masterworks
              </button>
            </div>
          ) : (
            items.map((item) => {
              const matchedTier = [...item.product.bulkTiers]
                .reverse()
                .find((t) => item.quantity >= t.minQty) || item.product.bulkTiers[0];

              return (
                <div
                  key={item.id}
                  className="p-4 bg-[#FAF9F5] border border-[#E5E0D4] rounded-lg flex gap-4 relative group"
                >
                  {/* Miniature Silhouette */}
                  <div className="w-20 h-24 bg-white border border-[#E8E4DA] rounded p-1 flex items-center justify-center shrink-0">
                    <TrophySilhouette
                      silhouetteType={item.product.silhouetteType}
                      plateFinish={item.customization?.plateFinish || 'gold'}
                      className="w-16 h-20"
                    />
                  </div>

                  {/* Item Details */}
                  <div className="flex-1 min-w-0 space-y-1">
                    <div className="flex items-start justify-between gap-2">
                      <h4 className="font-serif text-base font-bold text-[#0E233E] truncate">
                        {item.product.name}
                      </h4>
                      <button
                        onClick={() => onRemoveItem(item.id)}
                        className="text-[#94A3B8] hover:text-[#C5222A] transition-colors p-1"
                        title="Remove piece"
                      >
                        <Trash2 className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <div className="text-[11px] text-[#64748B]">
                      {item.product.material}
                    </div>

                    {/* Customization Citation Note */}
                    {item.customization && (
                      <div className="text-[10px] bg-white border border-[#E2E8F0] p-1.5 rounded text-[#334155] space-y-0.5 mt-1">
                        <div className="font-semibold text-[#C5222A] flex items-center gap-1">
                          <Sparkles className="w-2.5 h-2.5" />
                          <span>Engraved: "{item.customization.recipientName}"</span>
                        </div>
                        <div className="text-[#64748B] truncate">
                          {item.customization.awardTitle}
                        </div>
                      </div>
                    )}

                    {/* Quantity Stepper & Price */}
                    <div className="pt-2 flex items-center justify-between">
                      <div className="flex items-center border border-[#CBD5E1] rounded bg-white">
                        <button
                          onClick={() => onUpdateQuantity(item.id, -1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#0E233E] hover:bg-[#F3F0E8]"
                        >
                          -
                        </button>
                        <span className="px-2.5 py-0.5 text-xs font-bold tabular-nums text-[#0E233E]">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() => onUpdateQuantity(item.id, 1)}
                          className="px-2 py-0.5 text-xs font-bold text-[#0E233E] hover:bg-[#F3F0E8]"
                        >
                          +
                        </button>
                      </div>

                      <div className="text-right">
                        <div className="text-[10px] text-[#64748B]">
                          ₹{matchedTier.price.toLocaleString('en-IN')} / unit
                        </div>
                        <div className="font-serif text-base font-bold text-[#0E233E] tabular-nums">
                          ₹{(matchedTier.price * item.quantity).toLocaleString('en-IN')}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Drawer Footer & Checkout Action */}
        {items.length > 0 && (
          <div className="p-5 border-t border-[#E8E4DA] bg-white space-y-3">
            <div className="space-y-1.5 text-xs text-[#475569]">
              <div className="flex justify-between">
                <span>Subtotal ({totalUnits} items)</span>
                <span className="font-bold text-[#0E233E] tabular-nums">
                  ₹{subtotal.toLocaleString('en-IN')}
                </span>
              </div>

              {volumeDiscount > 0 && (
                <div className="flex justify-between text-[#C5222A]">
                  <span>Tier Volume Savings</span>
                  <span className="font-bold tabular-nums">
                    - ₹{volumeDiscount.toLocaleString('en-IN')}
                  </span>
                </div>
              )}

              <div className="flex justify-between">
                <span>GST (18% Official Invoice)</span>
                <span className="font-bold text-[#0E233E] tabular-nums">
                  ₹{estimatedGst.toLocaleString('en-IN')}
                </span>
              </div>

              <div className="flex justify-between pt-2 border-t border-[#E8E4DA] font-serif text-xl font-bold text-[#0E233E]">
                <span>Grand Total</span>
                <span className="tabular-nums">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </span>
              </div>
            </div>

            <div className="flex items-center gap-2 text-[11px] text-[#64748B] pt-1">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
              <span>Includes Velvet Caskets, Laser Engraving & Secure Transit</span>
            </div>

            <button
              onClick={onCheckout}
              className="w-full py-3.5 text-xs font-semibold tracking-wider uppercase text-white bg-[#0E233E] hover:bg-[#1A365D] rounded transition-all flex items-center justify-center gap-2 shadow-md"
            >
              <span>Proceed to Checkout</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
