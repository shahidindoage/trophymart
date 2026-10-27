import React, { useState } from 'react';
import { Sparkles, ShoppingBag, Check, ShieldCheck, Download, RefreshCw } from 'lucide-react';
import { TrophySilhouette } from './TrophySilhouette';
import { TrophyProduct } from '../types/trophy';
import { TROPHY_PRODUCTS } from '../data/trophyData';

interface CustomizerStudioProps {
  onAddToCart: (product: TrophyProduct, customization: any) => void;
  onOpenQuoteModal: () => void;
}

export const CustomizerStudio: React.FC<CustomizerStudioProps> = ({
  onAddToCart,
  onOpenQuoteModal
}) => {
  const [selectedProductId, setSelectedProductId] = useState<string>('tm-cryst-01');
  const [plateFinish, setPlateFinish] = useState<'gold' | 'chrome' | 'rose-gold' | 'matte-black'>('gold');
  const [recipientName, setRecipientName] = useState<string>('Prajakta Samant');
  const [awardTitle, setAwardTitle] = useState<string>('Distinguished Leadership Award');
  const [organization, setOrganization] = useState<string>('Trophy Mart Conclave 2026');
  const [eventDate, setEventDate] = useState<string>('November 2026');
  const [specialNotes, setSpecialNotes] = useState<string>('Engrave company crest centered above text');
  const [addedSuccess, setAddedSuccess] = useState<boolean>(false);

  const selectedProduct = TROPHY_PRODUCTS.find((p) => p.id === selectedProductId) || TROPHY_PRODUCTS[0];

  const handleAddToCart = () => {
    onAddToCart(selectedProduct, {
      recipientName,
      awardTitle,
      organization,
      plateFinish,
      eventDate,
      specialNotes
    });
    setAddedSuccess(true);
    setTimeout(() => setAddedSuccess(false), 2500);
  };

  const plateOptions = [
    { id: 'gold', label: '24k Brushed Gold', previewBg: 'bg-amber-400' },
    { id: 'chrome', label: 'Sterling Chrome', previewBg: 'bg-slate-300' },
    { id: 'rose-gold', label: 'Rose Gold Bronze', previewBg: 'bg-rose-300' },
    { id: 'matte-black', label: 'Obsidian Matte', previewBg: 'bg-zinc-800' }
  ];

  return (
    <section id="studio" className="py-20 bg-white border-b border-[#E8E4DA] relative overflow-hidden">
      
      {/* Background Decorative Aura */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#0E233E]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-[#C5222A]/5 rounded-full blur-3xl pointer-events-none -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5222A] mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Live Interactive Atelier</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#0E233E] tracking-tight">
            Personalize your commemorative award.
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#475569] leading-relaxed">
            Preview your custom citation, honoree name, and metallic plate finish in real-time. Each piece is precision laser-etched in our Mumbai facility with crisp micro-typography.
          </p>
        </div>

        {/* 2-Column Studio Canvas */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch w-full min-w-0">
          
          {/* Left Column: Live Visual Render Viewport */}
          <div className="lg:col-span-6 bg-[#FAF9F5] border border-[#E5E0D4] rounded-lg p-6 sm:p-8 flex flex-col justify-between shadow-sm relative min-w-0 overflow-hidden">
            
            {/* Viewport Header Bar */}
            <div className="flex items-center justify-between pb-4 border-b border-[#E8E4DA]">
              <div className="flex items-center gap-2 text-xs text-[#64748B]">
                <span className="font-semibold text-[#0E233E]">{selectedProduct.name}</span>
                <span aria-hidden="true">·</span>
                <span>{selectedProduct.sku}</span>
              </div>
              <div className="flex items-center gap-2 text-xs text-[#0E233E] font-medium">
                <span className="w-2 h-2 rounded-full bg-[#C59B27]" />
                <span className="capitalize">{plateFinish} Plate</span>
              </div>
            </div>

            {/* Live Interactive Trophy Model Render */}
            <div className="py-8 my-auto flex items-center justify-center min-h-[380px]">
              <TrophySilhouette
                silhouetteType={selectedProduct.silhouetteType}
                recipientName={recipientName}
                awardTitle={awardTitle}
                organization={organization}
                plateFinish={plateFinish}
                className="w-72 h-96 transition-all duration-300"
              />
            </div>

            {/* Live Plaque Transcript Drawer */}
            <div className="p-4 bg-white border border-[#E8E4DA] rounded text-center">
              <div className="text-[11px] font-bold uppercase tracking-wider text-[#C5222A]">
                Laser Inscription Transcript
              </div>
              <div className="font-serif text-base font-bold text-[#0E233E] mt-1">
                "{recipientName || 'Honoree Name'}"
              </div>
              <div className="text-xs text-[#475569] mt-0.5">
                {awardTitle || 'Award Title'} — {organization || 'Organization'} ({eventDate})
              </div>
            </div>

          </div>

          {/* Right Column: Customization Controls & Specifications */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6 min-w-0">
            
            {/* Step 1: Select Trophy Silhouette */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0E233E] mb-2.5">
                1. Select Trophy Architecture
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5">
                {TROPHY_PRODUCTS.slice(0, 6).map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setSelectedProductId(item.id)}
                    className={`p-3 text-left border rounded transition-all flex flex-col justify-between ${
                      selectedProductId === item.id
                        ? 'border-[#0E233E] bg-[#0E233E] text-white shadow-xs'
                        : 'border-[#E2E8F0] bg-white text-[#334155] hover:border-[#CBD5E1]'
                    }`}
                  >
                    <span className="text-[11px] font-semibold line-clamp-1">{item.name}</span>
                    <span className={`text-xs mt-1 tabular-nums ${
                      selectedProductId === item.id ? 'text-[#FAF9F5]' : 'text-[#64748B]'
                    }`}>
                      ₹{item.price.toLocaleString('en-IN')}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 2: Choose Metal Plate Finish */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0E233E] mb-2.5">
                2. Plaque Metallic Finish
              </label>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                {plateOptions.map((opt) => (
                  <button
                    key={opt.id}
                    onClick={() => setPlateFinish(opt.id as any)}
                    className={`p-2.5 flex items-center gap-2 border rounded text-xs font-medium transition-all ${
                      plateFinish === opt.id
                        ? 'border-[#0E233E] bg-[#F4F1EA] text-[#0E233E] ring-1 ring-[#0E233E]'
                        : 'border-[#E2E8F0] bg-white text-[#475569] hover:bg-[#FAF9F5]'
                    }`}
                  >
                    <span className={`w-3.5 h-3.5 rounded-full ${opt.previewBg} border border-black/10 shrink-0`} />
                    <span className="truncate">{opt.label}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Step 3: Text Inscription Fields */}
            <div className="space-y-3.5">
              <label className="block text-xs font-bold uppercase tracking-wider text-[#0E233E]">
                3. Precision Laser Typography
              </label>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                    Honoree / Recipient Name
                  </span>
                  <input
                    type="text"
                    value={recipientName}
                    onChange={(e) => setRecipientName(e.target.value)}
                    placeholder="e.g. Prajakta Samant"
                    maxLength={32}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E] focus:ring-1 focus:ring-[#0E233E]"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                    Award Title / Distinction
                  </span>
                  <input
                    type="text"
                    value={awardTitle}
                    onChange={(e) => setAwardTitle(e.target.value)}
                    placeholder="e.g. Leadership Distinction 2026"
                    maxLength={40}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E] focus:ring-1 focus:ring-[#0E233E]"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                    Company / Event / Institution
                  </span>
                  <input
                    type="text"
                    value={organization}
                    onChange={(e) => setOrganization(e.target.value)}
                    placeholder="e.g. LIC Mutual Fund Annual Gala"
                    maxLength={40}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E] focus:ring-1 focus:ring-[#0E233E]"
                  />
                </div>

                <div>
                  <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                    Event Date / Serial
                  </span>
                  <input
                    type="text"
                    value={eventDate}
                    onChange={(e) => setEventDate(e.target.value)}
                    placeholder="e.g. 24th October 2026"
                    maxLength={24}
                    className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E] focus:ring-1 focus:ring-[#0E233E]"
                  />
                </div>
              </div>

              <div>
                <span className="text-[11px] font-medium text-[#64748B] block mb-1">
                  Logo Placement & Special Atelier Notes
                </span>
                <input
                  type="text"
                  value={specialNotes}
                  onChange={(e) => setSpecialNotes(e.target.value)}
                  placeholder="e.g. Please position vector logo at the apex, sub-surface frost"
                  className="w-full px-3.5 py-2 text-sm bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E] focus:ring-1 focus:ring-[#0E233E]"
                />
              </div>
            </div>

            {/* Price & Add to Bag Action */}
            <div className="pt-4 border-t border-[#E8E4DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <div className="text-xs text-[#64748B]">Personalized Price (Includes Custom Engraving)</div>
                <div className="font-serif text-3xl font-bold text-[#0E233E] tabular-nums">
                  ₹{selectedProduct.price.toLocaleString('en-IN')}
                </div>
              </div>

              <div className="flex items-center gap-3 w-full sm:w-auto">
                <button
                  onClick={handleAddToCart}
                  className={`w-full sm:w-auto px-6 py-3.5 text-xs font-semibold tracking-wider uppercase rounded transition-all flex items-center justify-center gap-2 shadow-md ${
                    addedSuccess
                      ? 'bg-emerald-700 text-white'
                      : 'bg-[#C5222A] hover:bg-[#991B1B] text-white'
                  }`}
                >
                  {addedSuccess ? (
                    <>
                      <Check className="w-4 h-4" />
                      <span>Added to Bag</span>
                    </>
                  ) : (
                    <>
                      <ShoppingBag className="w-4 h-4" />
                      <span>Order This Custom Piece</span>
                    </>
                  )}
                </button>

                <button
                  onClick={onOpenQuoteModal}
                  title="Need 10+ pieces? Request volume wholesale rate"
                  className="px-4 py-3.5 text-xs font-semibold text-[#0E233E] bg-[#F4F1EA] hover:bg-[#EAE5D9] border border-[#CBD5E1] rounded whitespace-nowrap"
                >
                  Bulk Quote
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
