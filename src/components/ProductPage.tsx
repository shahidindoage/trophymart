import React, { useState } from 'react';
import { ShoppingCart, Palette, ChevronDown, ChevronUp, Star, Shield, Truck, Award } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Variant {
  label: string;
  size: string;
  image: string;
  price: string;
  dimensions: string;
}

interface AccordionItem {
  title: string;
  content: React.ReactNode;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const VARIANTS: Variant[] = [
  {
    label: 'S',
    size: 'Small',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-S-3-scaled.jpg',
    price: '₹ 850',
    dimensions: 'H: 18 cm  |  W: 8 cm',
  },
  {
    label: 'M',
    size: 'Medium',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-M-1-3-scaled.jpg',
    price: '₹ 1,250',
    dimensions: 'H: 24 cm  |  W: 10 cm',
  },
  {
    label: 'L',
    size: 'Large',
    image: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-L-3-scaled.jpg',
    price: '₹ 1,800',
    dimensions: 'H: 32 cm  |  W: 13 cm',
  },
];

const DESCRIPTION_POINTS = [
  {
    icon: '⚫',
    label: 'Innovation',
    text: 'Exclusive design with a metal body and a glass diamond depicting elegance and craftmanship. Both durable and economical.',
  },
  {
    icon: '⚫',
    label: 'Customization and Personalization',
    text: 'Customers can select from a variety of sizes, forms, and designs in addition to adding custom engravings or logos to honour certain accomplishments or occasions. Our team work closely to build trophy that suits every client.',
  },
  {
    icon: '⚫',
    label: 'Quality Assurance',
    text: 'Quality is our top priority, with the shine of diamond reflected the same even after one year. One year guaranteed period.',
  },
  {
    icon: '⚫',
    label: 'Occasion',
    text: 'Fit for every occasion like star awards, employee of the month, Growth Award, Sales Award and so on.',
  },
  {
    icon: '⚫',
    label: 'Precaution',
    text: 'Keep away from water and direct sunlight. In a cool dry display area.',
  },
];

const ACCORDIONS: AccordionItem[] = [
  {
    title: 'Product Description',
    content: (
      <ul className="space-y-4">
        {DESCRIPTION_POINTS.map((point, i) => (
          <li key={i} className="flex gap-3">
            <span className="mt-0.5 text-xs shrink-0">{point.icon}</span>
            <p className="text-sm text-[#CBD5E0] leading-relaxed">
              <span className="font-semibold text-white">{point.label}: </span>
              {point.text}
            </p>
          </li>
        ))}
      </ul>
    ),
  },
  {
    title: 'Engraving & Customisation Details',
    content: (
      <div className="space-y-3 text-sm text-[#CBD5E0] leading-relaxed">
        <p>
          Each trophy can be personalised with a <span className="text-white font-medium">laser-engraved metal plate</span> on the base. You may include:
        </p>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Recipient name (up to 40 characters)</li>
          <li>Award title / occasion</li>
          <li>Organisation name or logo</li>
          <li>Event date or year</li>
        </ul>
        <p className="text-xs text-[#718096] pt-1">
          * Artwork files accepted in PNG, SVG, or AI formats. Minimum resolution 300 dpi.
          Production lead time: 3–5 working days after artwork approval.
        </p>
      </div>
    ),
  },
  {
    title: 'Shipping & Delivery',
    content: (
      <div className="space-y-3 text-sm text-[#CBD5E0] leading-relaxed">
        <div className="flex items-start gap-3">
          <Truck size={16} className="text-[#DFB967] shrink-0 mt-0.5" />
          <p>Free standard shipping on orders above ₹ 5,000 across India.</p>
        </div>
        <div className="flex items-start gap-3">
          <Shield size={16} className="text-[#DFB967] shrink-0 mt-0.5" />
          <p>Each piece is individually bubble-wrapped and shipped in a rigid gift box to prevent transit damage.</p>
        </div>
        <ul className="list-disc list-inside space-y-1.5 pl-1">
          <li>Metro cities: 2–4 working days</li>
          <li>Tier 2 / Tier 3 cities: 4–7 working days</li>
          <li>Express delivery available at additional cost</li>
        </ul>
        <p className="text-xs text-[#718096] pt-1">* Delivery timelines are indicative and may vary during peak seasons.</p>
      </div>
    ),
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AccordionPanel({ title, content }: AccordionItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-white/10 rounded-xl overflow-hidden">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-5 py-4 text-left bg-white/5 hover:bg-white/10 transition"
      >
        <span className="text-sm font-semibold text-white tracking-wide">{title}</span>
        {open ? <ChevronUp size={16} className="text-[#DFB967]" /> : <ChevronDown size={16} className="text-[#DFB967]" />}
      </button>
      {open && (
        <div className="px-5 py-4 bg-[#0D1829] border-t border-white/10">
          {content}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

interface ProductPageProps {
  onClose?: () => void;
}

export const ProductPage: React.FC<ProductPageProps> = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [qty, setQty] = useState(1);

  const variant = VARIANTS[selectedVariant];

  return (
    <div className="min-h-screen bg-[#070D18] text-white font-sans">

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-6 pb-2">
        <p className="text-xs text-[#718096]">
          Home &nbsp;/&nbsp; Trophies &nbsp;/&nbsp;
          <span className="text-[#DFB967]">Starlight Gold</span>
        </p>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">

        {/* ── Left — Image ── */}
        <div className="space-y-4">
          {/* Main image */}
          <div className="relative rounded-2xl overflow-hidden bg-[#0D1829] border border-white/10 aspect-square flex items-center justify-center">
            <img
              src={variant.image}
              alt={`Starlight Gold – ${variant.size}`}
              className="w-full h-full object-contain p-6 transition-opacity duration-500"
              key={variant.label}
            />
            {/* Badge */}
            <div className="absolute top-4 left-4 flex gap-2">
              <span className="text-[10px] font-bold tracking-widest bg-[#DFB967] text-[#070D18] px-2.5 py-1 rounded-full uppercase">
                Best Seller
              </span>
            </div>
          </div>

          {/* Thumbnail strip */}
          <div className="flex gap-3">
            {VARIANTS.map((v, i) => (
              <button
                key={v.label}
                onClick={() => setSelectedVariant(i)}
                className={`flex-1 rounded-xl overflow-hidden border-2 transition aspect-square ${
                  i === selectedVariant
                    ? 'border-[#DFB967] shadow-[0_0_12px_rgba(223,185,103,0.4)]'
                    : 'border-white/10 hover:border-white/30'
                }`}
              >
                <img src={v.image} alt={v.size} className="w-full h-full object-contain p-2 bg-[#0D1829]" />
              </button>
            ))}
          </div>
        </div>

        {/* ── Right — Details ── */}
        <div className="flex flex-col gap-6">

          {/* Title & rating */}
          <div>
            <p className="text-xs tracking-widest text-[#DFB967] uppercase mb-1 font-semibold">Trophy Mart Exclusive</p>
            <h1 className="text-3xl sm:text-4xl font-bold leading-tight">Starlight Gold</h1>
            <p className="text-sm text-[#718096] mt-1">SKU: TM-SG-1001</p>
            <div className="flex items-center gap-2 mt-2">
              {[1,2,3,4,5].map(s => (
                <Star key={s} size={14} fill={s <= 4 ? '#DFB967' : 'none'} stroke="#DFB967" />
              ))}
              <span className="text-xs text-[#718096]">(48 reviews)</span>
            </div>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3">
            <span className="text-3xl font-bold text-[#DFB967]">{variant.price}</span>
            <span className="text-sm text-[#718096] line-through">
              {variant.label === 'S' ? '₹ 1,100' : variant.label === 'M' ? '₹ 1,600' : '₹ 2,300'}
            </span>
            <span className="text-xs bg-green-900/50 text-green-400 border border-green-700/40 px-2 py-0.5 rounded-full font-semibold">
              Save 22%
            </span>
          </div>

          {/* Dimensions */}
          <p className="text-xs text-[#718096] -mt-3">{variant.dimensions}</p>

          {/* Variant selector */}
          <div>
            <p className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-widest mb-3">
              Select Size — <span className="text-white">{variant.size}</span>
            </p>
            <div className="flex gap-3">
              {VARIANTS.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => setSelectedVariant(i)}
                  className={`w-12 h-12 rounded-xl text-sm font-bold border-2 transition ${
                    i === selectedVariant
                      ? 'border-[#DFB967] bg-[#DFB967]/10 text-[#DFB967]'
                      : 'border-white/15 text-[#A0AEC0] hover:border-white/40 hover:text-white bg-white/5'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity */}
          <div>
            <p className="text-xs font-semibold text-[#A0AEC0] uppercase tracking-widest mb-3">Quantity</p>
            <div className="flex items-center gap-0 w-fit border border-white/15 rounded-xl overflow-hidden">
              <button
                onClick={() => setQty(q => Math.max(1, q - 1))}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition text-lg font-bold"
              >
                −
              </button>
              <span className="w-10 h-10 flex items-center justify-center text-sm font-semibold border-x border-white/15">
                {qty}
              </span>
              <button
                onClick={() => setQty(q => q + 1)}
                className="w-10 h-10 flex items-center justify-center text-white hover:bg-white/10 transition text-lg font-bold"
              >
                +
              </button>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3">
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl bg-[#DFB967] hover:bg-[#c9a550] text-[#070D18] font-bold text-sm tracking-wide transition shadow-lg shadow-[#DFB967]/20">
              <ShoppingCart size={17} />
              Add to Cart
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl border-2 border-[#DFB967]/60 text-[#DFB967] hover:bg-[#DFB967]/10 font-bold text-sm tracking-wide transition">
              <Palette size={17} />
              Customise This Trophy
            </button>
          </div>

          {/* Trust badges */}
          <div className="grid grid-cols-3 gap-3 pt-2">
            {[
              { icon: <Shield size={15} />, text: '1-Year Guarantee' },
              { icon: <Truck size={15} />, text: 'Free Shipping ₹5k+' },
              { icon: <Award size={15} />, text: 'Premium Crafted' },
            ].map((b, i) => (
              <div key={i} className="flex flex-col items-center gap-1.5 text-center p-3 rounded-xl bg-white/5 border border-white/8">
                <span className="text-[#DFB967]">{b.icon}</span>
                <span className="text-[10px] text-[#A0AEC0] font-medium leading-tight">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── Accordion Section ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-16">
        <div className="h-px bg-white/10 mb-8" />
        <h2 className="text-lg font-bold text-white mb-5 tracking-wide">Product Information</h2>
        <div className="space-y-3">
          {ACCORDIONS.map((acc, i) => (
            <AccordionPanel key={i} title={acc.title} content={acc.content} />
          ))}
        </div>
      </div>

    </div>
  );
};

