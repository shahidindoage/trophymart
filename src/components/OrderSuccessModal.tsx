import React, { useState } from 'react';
import { X, Check, ShieldCheck, Printer, ArrowRight, PackageCheck, MapPin } from 'lucide-react';
import { CartItem } from '../types/trophy';

interface OrderSuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onOrderCompleted: () => void;
}

export const OrderSuccessModal: React.FC<OrderSuccessModalProps> = ({
  isOpen,
  onClose,
  items,
  onOrderCompleted
}) => {
  if (!isOpen) return null;

  const [step, setStep] = useState<'checkout' | 'success'>('checkout');
  const [customerName, setCustomerName] = useState('Swati Gidwani');
  const [phone, setPhone] = useState('+91 98200 44211');
  const [email, setEmail] = useState('swati@apexlifesciences.com');
  const [address, setAddress] = useState('Tower 4, Equinox Business Park, LBS Marg, Kurla West');
  const [city, setCity] = useState('Mumbai');
  const [pincode, setPincode] = useState('400070');
  const [gstin, setGstin] = useState('27AAACA1234F1Z5');
  const [paymentMethod, setPaymentMethod] = useState<'neft' | 'upi' | 'cod'>('neft');

  const [confirmedOrderId, setConfirmedOrderId] = useState<string>('');

  const subtotal = items.reduce((sum, item) => {
    const bulkTier = [...item.product.bulkTiers]
      .reverse()
      .find((t) => item.quantity >= t.minQty) || item.product.bulkTiers[0];
    return sum + bulkTier.price * item.quantity;
  }, 0);

  const grandTotal = Math.round(subtotal * 1.18);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    const orderId = `TM-ORD-2026-${Math.floor(1000 + Math.random() * 9000)}`;
    setConfirmedOrderId(orderId);
    setStep('success');
  };

  const handleFinish = () => {
    onOrderCompleted();
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto overflow-x-hidden bg-black/60 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div
        className="bg-white border border-[#E5E0D4] rounded-lg max-w-2xl w-full max-h-[92vh] overflow-y-auto overflow-x-hidden shadow-2xl relative"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          aria-label="Close modal"
          className="absolute top-4 right-4 z-10 p-2 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {step === 'checkout' ? (
          <form onSubmit={handlePlaceOrder} className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-[0.2em] text-[#C5222A]">
                Secure Direct Factory Order
              </div>
              <h2 className="font-serif text-2xl sm:text-3xl font-bold text-[#0E233E] mt-1">
                Dispatch & Delivery Specifications
              </h2>
              <p className="text-xs text-[#64748B] mt-1">
                Trophy Mart ships via insured air express with white-glove presentation boxes.
              </p>
            </div>

            {/* Customer & Shipping Form */}
            <div className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    Recipient / Authorized Officer *
                  </label>
                  <input
                    type="text"
                    required
                    value={customerName}
                    onChange={(e) => setCustomerName(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    Contact Phone (WhatsApp Tracked) *
                  </label>
                  <input
                    type="tel"
                    required
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    Official Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    Corporate GSTIN (Optional)
                  </label>
                  <input
                    type="text"
                    placeholder="27AAAAA0000A1Z5"
                    value={gstin}
                    onChange={(e) => setGstin(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                  Delivery Destination Address *
                </label>
                <input
                  type="text"
                  required
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                />
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    City *
                  </label>
                  <input
                    type="text"
                    required
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-semibold text-[#0E233E] mb-1">
                    Postal Code *
                  </label>
                  <input
                    type="text"
                    required
                    value={pincode}
                    onChange={(e) => setPincode(e.target.value)}
                    className="w-full px-3 py-2 bg-white border border-[#CBD5E1] rounded focus:outline-none focus:border-[#0E233E]"
                  />
                </div>
              </div>

              {/* Payment Methods */}
              <div>
                <label className="block text-[11px] font-semibold text-[#0E233E] mb-2">
                  Payment Arrangement
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5">
                  <button
                    type="button"
                    onClick={() => setPaymentMethod('neft')}
                    className={`p-3 text-left border rounded transition-all ${
                      paymentMethod === 'neft'
                        ? 'border-[#0E233E] bg-[#F4F1EA] text-[#0E233E] ring-1 ring-[#0E233E]'
                        : 'border-[#E2E8F0] bg-white text-[#475569]'
                    }`}
                  >
                    <div className="font-semibold text-xs">Corporate RTGS / NEFT</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5">Official Tax Invoice</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('upi')}
                    className={`p-3 text-left border rounded transition-all ${
                      paymentMethod === 'upi'
                        ? 'border-[#0E233E] bg-[#F4F1EA] text-[#0E233E] ring-1 ring-[#0E233E]'
                        : 'border-[#E2E8F0] bg-white text-[#475569]'
                    }`}
                  >
                    <div className="font-semibold text-xs">UPI / NetBanking</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5">Instant Confirmation</div>
                  </button>

                  <button
                    type="button"
                    onClick={() => setPaymentMethod('cod')}
                    className={`p-3 text-left border rounded transition-all ${
                      paymentMethod === 'cod'
                        ? 'border-[#0E233E] bg-[#F4F1EA] text-[#0E233E] ring-1 ring-[#0E233E]'
                        : 'border-[#E2E8F0] bg-white text-[#475569]'
                    }`}
                  >
                    <div className="font-semibold text-xs">Pay on Dispatch</div>
                    <div className="text-[10px] text-[#64748B] mt-0.5">Verified Institutional</div>
                  </button>
                </div>
              </div>
            </div>

            {/* Total Summary & Action */}
            <div className="pt-4 border-t border-[#E8E4DA] flex items-center justify-between">
              <div>
                <div className="text-[11px] text-[#64748B]">Total Amount Payable</div>
                <div className="font-serif text-2xl font-bold text-[#0E233E] tabular-nums">
                  ₹{grandTotal.toLocaleString('en-IN')}
                </div>
              </div>

              <button
                type="submit"
                className="px-6 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-[#0E233E] hover:bg-[#1A365D] rounded transition-all flex items-center gap-2 shadow-md"
              >
                <span>Authorize & Place Order</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </form>
        ) : (
          /* Order Confirmation Success View */
          <div className="p-8 sm:p-10 text-center space-y-6">
            <div className="w-16 h-16 bg-emerald-50 text-emerald-700 rounded-full flex items-center justify-center mx-auto border border-emerald-200">
              <PackageCheck className="w-8 h-8" />
            </div>

            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#C5222A]">
                Order Confirmed — Preparing Atelier Inscription
              </div>
              <h2 className="font-serif text-3xl font-bold text-[#0E233E] mt-1">
                Order #{confirmedOrderId}
              </h2>
              <p className="text-xs sm:text-sm text-[#475569] mt-2 max-w-md mx-auto">
                Thank you for entrusting Trophy Mart with your recognition awards. Your consignment has been queued for diamond-cut finishing and laser engraving in our Mumbai facility.
              </p>
            </div>

            {/* Receipt Summary Card */}
            <div className="bg-[#FAF9F5] border border-[#E8E4DA] rounded-lg p-5 text-left text-xs space-y-3 max-w-lg mx-auto">
              <div className="flex justify-between border-b border-[#E8E4DA] pb-2">
                <span className="text-[#64748B]">Estimated Dispatch:</span>
                <span className="font-bold text-[#0E233E]">Within 48 Working Hours</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E4DA] pb-2">
                <span className="text-[#64748B]">Delivery Address:</span>
                <span className="font-semibold text-[#0E233E] text-right truncate max-w-xs">{address}, {city} - {pincode}</span>
              </div>
              <div className="flex justify-between border-b border-[#E8E4DA] pb-2">
                <span className="text-[#64748B]">Payment Channel:</span>
                <span className="font-bold text-[#0E233E] uppercase">{paymentMethod}</span>
              </div>
              <div className="flex justify-between font-serif text-base font-bold text-[#0E233E]">
                <span>Total Invoiced (Inc. GST):</span>
                <span className="tabular-nums">₹{grandTotal.toLocaleString('en-IN')}</span>
              </div>
            </div>

            <div className="flex items-center justify-center gap-4 pt-2">
              <button
                onClick={() => window.print()}
                className="px-4 py-2 text-xs font-semibold text-[#0E233E] bg-white border border-[#CBD5E1] rounded hover:bg-[#FAF9F5] flex items-center gap-1.5"
              >
                <Printer className="w-3.5 h-3.5" />
                <span>Print Receipt</span>
              </button>

              <button
                onClick={handleFinish}
                className="px-6 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-[#0E233E] rounded hover:bg-[#1A365D]"
              >
                Continue Browsing
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
