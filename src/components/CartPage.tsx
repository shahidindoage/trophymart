import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowRight,
  Check,
  Gift,
  MessageCircle,
  ShieldCheck,
  ShoppingBag,
  Sparkles,
  Trash2,
  Truck
} from 'lucide-react';
import { CartItem } from '../types/trophy';
import { TrophySilhouette } from './TrophySilhouette';

interface CartPageProps {
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemoveItem: (id: string) => void;
  onCheckout: () => void;
}

const FREE_SHIPPING_THRESHOLD = 5000;

const TRUST_BADGES = [
  { icon: ShieldCheck, text: '1-Year Guarantee' },
  { icon: Gift, text: 'Velvet Casket' },
  { icon: Truck, text: 'Insured Transit' }
];

function tierFor(item: CartItem) {
  return (
    [...item.product.bulkTiers].reverse().find((t) => item.quantity >= t.minQty) ||
    item.product.bulkTiers[0]
  );
}

export const CartPage: React.FC<CartPageProps> = ({
  items,
  onUpdateQuantity,
  onRemoveItem,
  onCheckout
}) => {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, []);

  const totalUnits = items.reduce((sum, item) => sum + item.quantity, 0);

  const subtotal = items.reduce((sum, item) => sum + tierFor(item).price * item.quantity, 0);

  let volumeDiscount = 0;
  if (totalUnits >= 50) {
    volumeDiscount = Math.round(subtotal * 0.15);
  } else if (totalUnits >= 10) {
    volumeDiscount = Math.round(subtotal * 0.08);
  }

  const netTotal = subtotal - volumeDiscount;
  const estimatedGst = Math.round(netTotal * 0.18);
  const grandTotal = netTotal + estimatedGst;

  const shippingGap = Math.max(0, FREE_SHIPPING_THRESHOLD - netTotal);
  const shippingProgress = Math.min(100, (netTotal / FREE_SHIPPING_THRESHOLD) * 100);

  return (
    <div className="min-h-screen bg-white text-[#161C24] font-sans">
      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-7">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
          <Link to="/" className="hover:text-[#C5222A] transition-colors">Home</Link>
          <span className="mx-2.5 text-[#CBD5E1]">/</span>
          <span className="text-[#0E233E] font-semibold">Commemorative Bag</span>
        </p>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-28 md:pb-20">
        {/* ── Page Heading ── */}
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-5 mb-8 sm:mb-10">
          <div>
            <div className="w-10 h-px bg-[#C59B27]" />
            <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#C5222A]">
              Your Selection
            </p>
            <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0E233E] mt-2 leading-[1.05]">
              Commemorative <span className="italic text-[#C5222A]">Bag</span>
            </h1>
            <p className="mt-3 text-xs tracking-wide text-[#64748B]">
              {totalUnits > 0
                ? `${totalUnits} ${totalUnits === 1 ? 'award' : 'awards'} · ${items.length} ${
                    items.length === 1 ? 'line' : 'lines'
                  } prepared for engraving`
                : 'Nothing selected yet'}
            </p>
          </div>

          <Link
            to="/"
            className="inline-flex items-center gap-2 self-start sm:self-auto text-[11px] font-bold uppercase tracking-[0.15em] text-[#0E233E] border-b border-[#0E233E]/30 pb-1 hover:text-[#C5222A] hover:border-[#C5222A] transition-colors"
          >
            Continue Browsing
            <ArrowRight size={13} />
          </Link>
        </div>

        {items.length === 0 ? (
          /* ── Empty State ── */
          <div className="border border-[#E5E0D4] bg-white py-20 px-6 text-center">
            <div className="w-16 h-16 mx-auto border border-[#E5E0D4] bg-[#FAF9F5] flex items-center justify-center text-[#94A3B8]">
              <ShoppingBag size={26} strokeWidth={1.5} />
            </div>
            <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E233E] mt-6">
              Your commemorative bag is empty
            </h2>
            <p className="text-xs sm:text-sm text-[#64748B] mt-2 max-w-sm mx-auto leading-relaxed">
              Browse our curated collections or personalize a piece with custom engraving for the next
              recognition ceremony.
            </p>
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <Link
                to="/"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 bg-[#C5222A] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#991B1B] transition-colors"
              >
                Browse Masterworks
                <ArrowRight size={14} />
              </Link>
              <a
                href="https://wa.me/917980620672"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-6 border border-[#0E233E] bg-white text-[#0E233E] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#0E233E] hover:text-white transition-colors"
              >
                Speak To A Consultant
              </a>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            {/* ── Left — Line Items ── */}
            <div className="lg:col-span-8 space-y-4">
              {items.map((item) => {
                const tier = tierFor(item);
                const unitPrice = tier.price;
                const lineTotal = unitPrice * item.quantity;
                const hasTierSaving = tier.minQty > 1;

                return (
                  <article
                    key={item.id}
                    className="border border-[#E5E0D4] bg-white flex flex-col sm:flex-row"
                  >
                    {/* Piece preview */}
                    <div className="relative w-full sm:w-36 h-44 sm:h-auto bg-[#FAF9F5] border-b sm:border-b-0 sm:border-r border-[#E5E0D4] flex items-center justify-center shrink-0 p-3">
                      <span className="absolute top-0 left-0 bg-[#0E233E] text-white text-[9px] font-bold uppercase tracking-[0.2em] px-2.5 py-1.5">
                        {item.product.categoryLabel}
                      </span>
                      {item.product.image ? (
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="max-h-36 sm:max-h-44 max-w-[75%] object-contain"
                        />
                      ) : (
                        <TrophySilhouette
                          silhouetteType={item.product.silhouetteType}
                          plateFinish={item.customization?.plateFinish || 'gold'}
                          recipientName={item.customization?.recipientName}
                          awardTitle={item.customization?.awardTitle}
                          className="h-32 w-24"
                        />
                      )}
                    </div>

                    {/* Line details */}
                    <div className="flex-1 min-w-0 p-5 sm:p-6 flex flex-col">
                      <div className="flex items-start justify-between gap-4">
                        <div className="min-w-0">
                          <p className="text-[10px] font-bold uppercase tracking-[0.22em] text-[#C59B27]">
                            {item.product.sku}
                          </p>
                          <h2 className="font-serif text-xl sm:text-2xl font-bold text-[#0E233E] mt-1 leading-snug">
                            {item.product.name}
                          </h2>
                          <p className="text-[11px] text-[#64748B] mt-1.5 leading-relaxed">
                            {item.product.material}
                          </p>
                          <p className="text-[10px] uppercase tracking-[0.14em] text-[#94A3B8] mt-1">
                            {item.product.height} · Dispatches in {item.product.turnaroundDays} working days
                          </p>
                        </div>
                        <button
                          onClick={() => onRemoveItem(item.id)}
                          aria-label={`Remove ${item.product.name}`}
                          className="p-2 -mr-2 -mt-2 text-[#94A3B8] hover:text-[#C5222A] transition-colors focus:outline-none focus:ring-2 focus:ring-[#C5222A]/20"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                      {/* Engraving proof plate */}
                      {item.customization && (
                        <div className="mt-4 bg-[#FAF9F5] border border-[#E5E0D4] px-4 py-3.5">
                          <div className="flex items-center justify-between gap-3">
                            <span className="flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.18em] text-[#0E233E]">
                              <Sparkles size={11} className="text-[#C5222A]" />
                              Engraving Proof
                            </span>
                            <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-[#C5222A]">
                              {item.customization.plateFinish.replace('-', ' ')} Plate
                            </span>
                          </div>
                          <p className="mt-2.5 font-serif text-base italic text-[#0E233E] leading-snug">
                            “{item.customization.recipientName}”
                          </p>
                          <p className="text-[11px] text-[#475569] mt-1">
                            {item.customization.awardTitle}
                          </p>
                          <p className="text-[10px] text-[#64748B] mt-0.5">
                            {item.customization.organization} · {item.customization.eventDate}
                          </p>
                        </div>
                      )}

                      {/* Quantity + line total */}
                      <div className="mt-5 pt-4 border-t border-[#E5E0D4] flex flex-wrap items-end justify-between gap-4">
                        <div>
                          <p className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#64748B] mb-2">
                            Quantity
                          </p>
                          <div className="flex border border-[#E5E0D4] bg-white">
                            <button
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              aria-label="Decrease quantity"
                              className="w-10 h-11 flex items-center justify-center text-lg font-bold text-[#0E233E] hover:bg-[#FAF9F5] transition-colors"
                            >
                              −
                            </button>
                            <span className="w-11 h-11 flex items-center justify-center text-sm font-semibold text-[#0E233E] tabular-nums border-x border-[#E5E0D4]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              aria-label="Increase quantity"
                              className="w-10 h-11 flex items-center justify-center text-lg font-bold text-[#0E233E] hover:bg-[#FAF9F5] transition-colors"
                            >
                              +
                            </button>
                          </div>
                        </div>

                        <div className="text-right">
                          <p className="text-[10px] text-[#64748B] tabular-nums">
                            ₹{unitPrice.toLocaleString('en-IN')} / unit
                          </p>
                          <p className="font-serif text-2xl font-bold text-[#0E233E] tabular-nums leading-tight">
                            ₹{lineTotal.toLocaleString('en-IN')}
                          </p>
                          {hasTierSaving && (
                            <p className="text-[9px] font-bold uppercase tracking-[0.14em] text-[#C5222A] mt-1">
                              {tier.discount} volume tier
                            </p>
                          )}
                        </div>
                      </div>
                    </div>
                  </article>
                );
              })}

              {/* Assurance strip */}
              <div className="grid grid-flow-col auto-cols-fr gap-px bg-[#E5E0D4] border border-[#E5E0D4]">
                {TRUST_BADGES.map((badge, i) => (
                  <div
                    key={i}
                    className="bg-white flex flex-col items-center gap-2 py-5 px-2 text-center"
                  >
                    <badge.icon size={17} className="text-[#C59B27]" strokeWidth={1.5} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569] leading-tight">
                      {badge.text}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* ── Right — Order Summary ── */}
            <aside className="lg:col-span-4 lg:sticky lg:top-8 self-start space-y-4">
              <div className="border border-[#E5E0D4] bg-white">
                <div className="px-6 py-5 border-b border-[#E5E0D4]">
                  <h2 className="font-serif text-xl font-bold text-[#0E233E]">Order Summary</h2>
                  <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#64748B] mt-1.5">
                    Official GST Invoice Included
                  </p>
                </div>

                <div className="px-6 py-5 space-y-3 text-xs text-[#475569]">
                  <div className="flex justify-between gap-4">
                    <span>Subtotal ({totalUnits} {totalUnits === 1 ? 'item' : 'items'})</span>
                    <span className="font-bold text-[#0E233E] tabular-nums">
                      ₹{subtotal.toLocaleString('en-IN')}
                    </span>
                  </div>

                  {volumeDiscount > 0 && (
                    <div className="flex justify-between gap-4 text-[#C5222A]">
                      <span>Tier Volume Savings</span>
                      <span className="font-bold tabular-nums">
                        − ₹{volumeDiscount.toLocaleString('en-IN')}
                      </span>
                    </div>
                  )}

                  <div className="flex justify-between gap-4">
                    <span>GST (18% Official Invoice)</span>
                    <span className="font-bold text-[#0E233E] tabular-nums">
                      ₹{estimatedGst.toLocaleString('en-IN')}
                    </span>
                  </div>

                  <div className="flex justify-between gap-4">
                    <span>Delivery &amp; Casket</span>
                    <span className="font-bold text-[#0E233E] tabular-nums">
                      {shippingGap === 0 ? 'Complimentary' : 'At dispatch'}
                    </span>
                  </div>

                  <div className="flex justify-between items-baseline pt-3 mt-1 border-t border-[#E5E0D4] font-serif text-xl font-bold text-[#0E233E]">
                    <span>Grand Total</span>
                    <span className="tabular-nums">₹{grandTotal.toLocaleString('en-IN')}</span>
                  </div>
                </div>

                {/* Free shipping progress */}
                <div className="px-6">
                  <div className="flex items-center justify-between gap-3 text-[10px] font-semibold uppercase tracking-[0.12em]">
                    <span className={shippingGap === 0 ? 'text-[#0E233E]' : 'text-[#64748B]'}>
                      {shippingGap === 0
                        ? 'Free insured shipping unlocked'
                        : `₹${shippingGap.toLocaleString('en-IN')} to free shipping`}
                    </span>
                    {shippingGap === 0 && <Check size={13} className="text-emerald-600 shrink-0" />}
                  </div>
                  <div className="mt-2 h-1 w-full bg-[#E5E0D4]">
                    <div
                      className="h-full bg-[#C59B27] transition-all duration-500"
                      style={{ width: `${shippingProgress}%` }}
                    />
                  </div>
                </div>

                <div className="p-6 space-y-3">
                  <button
                    onClick={onCheckout}
                    className="w-full h-12 flex items-center justify-center gap-2.5 px-4 bg-[#C5222A] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#991B1B] transition-colors"
                  >
                    Proceed To Checkout
                    <ArrowRight size={15} />
                  </button>
                  <p className="flex items-center justify-center gap-1.5 text-[10px] text-[#64748B]">
                    <ShieldCheck size={12} className="text-emerald-600 shrink-0" />
                    Secure checkout · Insured air express
                  </p>
                </div>
              </div>

              {/* Consultant card */}
              <div className="border border-[#E5E0D4] bg-[#FAF9F5] p-5">
                <h3 className="font-serif text-lg font-bold text-[#0E233E]">
                  Planning 25 awards or more?
                </h3>
                <p className="text-[11px] text-[#64748B] mt-1.5 leading-relaxed">
                  Our award consultants can lock bulk pricing, artwork proofs and a single delivery
                  date for your ceremony.
                </p>
                <a
                  href="https://wa.me/917980620672"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-3.5 inline-flex items-center gap-1.5 text-[10px] font-bold uppercase tracking-[0.15em] text-[#0E233E] border-b border-[#0E233E]/30 pb-1 hover:text-[#C5222A] hover:border-[#C5222A] transition-colors"
                >
                  <MessageCircle size={12} />
                  Speak To A Consultant
                </a>
              </div>
            </aside>
          </div>
        )}
      </div>
    </div>
  );
};
