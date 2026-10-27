import React, { useState } from 'react';
import { X, Check, Calculator, PhoneCall, ShieldCheck, FileText } from 'lucide-react';
import { BespokeQuoteRequest } from '../types/trophy';

interface CorporateQuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const CorporateQuotationModal: React.FC<CorporateQuotationModalProps> = ({
  isOpen,
  onClose
}) => {
  if (!isOpen) return null;

  const [formData, setFormData] = useState<BespokeQuoteRequest>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    trophyCategory: 'Optical Crystal Obelisks',
    approximateQuantity: 50,
    targetBudgetPerPiece: '₹2,500 – ₹4,000',
    eventDate: '',
    deliveryCity: 'Mumbai',
    notes: ''
  });

  const [submittedRef, setSubmittedRef] = useState<string | null>(null);

  // Dynamic Volume Discount Calculation
  const getEstimatedDiscount = (qty: number) => {
    if (qty >= 100) return 'Up to 35% Wholesale Savings';
    if (qty >= 50) return 'Up to 25% Wholesale Savings';
    if (qty >= 20) return 'Up to 15% Wholesale Savings';
    return 'Direct Factory Tier Rates';
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const randomRef = `TM-RFQ-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedRef(randomRef);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-white border border-[#E5E0D4] rounded-lg max-w-2xl w-full max-h-[92vh] overflow-y-auto overflow-x-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          aria-label="Close quote modal"
          className="absolute top-4 right-4 z-10 p-2 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submittedRef ? (
          <div className="p-8 sm:p-10 text-center space-y-5">
            <div className="w-14 h-14 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <Check className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C5222A]">
                Request Successfully Registered
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#0E233E] mt-1">
                Your RFQ Reference: {submittedRef}
              </h2>
              <p className="text-sm text-[#475569] mt-2 max-w-md mx-auto">
                Thank you, {formData.fullName}. Our institutional sales desk at the Mumbai manufacturing facility has received your specifications for {formData.approximateQuantity} pieces.
              </p>
            </div>

            <div className="p-4 bg-[#FAF9F5] border border-[#E8E4DA] rounded text-left text-xs space-y-2 max-w-md mx-auto">
              <div className="flex justify-between">
                <span className="text-[#64748B]">Organization:</span>
                <span className="font-bold text-[#0E233E]">{formData.companyName}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Estimated Units:</span>
                <span className="font-bold text-[#0E233E] tabular-nums">{formData.approximateQuantity} Awards</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Estimated Benefit:</span>
                <span className="font-bold text-[#C5222A]">{getEstimatedDiscount(formData.approximateQuantity)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-[#64748B]">Target Destination:</span>
                <span className="font-semibold text-[#0E233E]">{formData.deliveryCity}</span>
              </div>
            </div>

            <div className="pt-3 text-xs text-[#64748B]">
              A formal GST quote with 3D CAD digital rendering will be transmitted to <strong>{formData.email}</strong> and WhatsApp within 3 business hours.
            </div>

            <div className="pt-2">
              <button
                onClick={() => {
                  setSubmittedRef(null);
                  onClose();
                }}
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider bg-[#0E233E] text-white rounded hover:bg-[#1A365D] transition-colors"
              >
                Return to Storefront
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-5">
            <div>
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5222A]">
                <Calculator className="w-3.5 h-3.5" />
                <span>Factory Wholesale Desk</span>
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E233E] mt-1">
                Request Corporate Volume Quotation
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Direct factory pricing for orders of 10 to 10,000+ pieces with complimentary 3D visual proofing and custom presentation packaging.
              </p>
            </div>

            {/* Estimated Discount Live Banner */}
            <div className="p-3 bg-[#FAF9F5] border border-[#E8E4DA] rounded flex items-center justify-between text-xs">
              <span className="text-[#475569]">Quantity Tier Advantage:</span>
              <span className="font-bold text-[#C5222A]">
                {getEstimatedDiscount(formData.approximateQuantity)}
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Contact Person *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Swati Gidwani"
                  value={formData.fullName}
                  onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Company / Institution Name *
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. HDFC Life / Apex Sports"
                  value={formData.companyName}
                  onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Work Email *
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Phone (with WhatsApp) *
                </label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98200 XXXXX"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Award Category
                </label>
                <select
                  value={formData.trophyCategory}
                  onChange={(e) => setFormData({ ...formData, trophyCategory: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                >
                  <option value="Optical Crystal Obelisks">Optical Crystal Obelisks & Towers</option>
                  <option value="Sculpted 24k Gold Chalices">Sculpted 24k Gold Chalices</option>
                  <option value="Executive Wooden & Glass Plaques">Executive Wooden & Glass Plaques</option>
                  <option value="Custom Die-Cast Medallions">Custom Die-Cast Medallions</option>
                  <option value="Bespoke 3D Sculptures">Bespoke 3D Custom Mold Sculpture</option>
                </select>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Approximate Quantity: <span className="text-[#C5222A] tabular-nums font-bold">{formData.approximateQuantity}</span> units
                </label>
                <input
                  type="range"
                  min="10"
                  max="1000"
                  step="10"
                  value={formData.approximateQuantity}
                  onChange={(e) => setFormData({ ...formData, approximateQuantity: Number(e.target.value) })}
                  className="w-full accent-[#C5222A] cursor-pointer"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Target Event / Delivery Date
                </label>
                <input
                  type="text"
                  placeholder="e.g. 15th December 2026"
                  value={formData.eventDate}
                  onChange={(e) => setFormData({ ...formData, eventDate: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Destination City (Pan-India)
                </label>
                <input
                  type="text"
                  placeholder="e.g. Mumbai / Delhi / Bengaluru / Pune"
                  value={formData.deliveryCity}
                  onChange={(e) => setFormData({ ...formData, deliveryCity: e.target.value })}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>
            </div>

            <div>
              <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                Customization Brief, Logo Notes or Special Requirements
              </label>
              <textarea
                rows={3}
                placeholder="Mention desired heights, logo engraving preferences, velvet casket branding, or urgent delivery deadlines..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3 py-2 text-xs bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
              />
            </div>

            <div className="pt-3 border-t border-[#E8E4DA] flex items-center justify-between">
              <div className="text-[11px] text-[#64748B]">
                ⚡ Response within 3 hours during business days
              </div>
              <button
                type="submit"
                className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#C5222A] hover:bg-[#991B1B] rounded transition-colors shadow-sm"
              >
                Submit RFQ Request
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};
