import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShoppingCart, Palette, ChevronDown, ChevronUp, Star, Shield, Truck, Award, Sparkles } from 'lucide-react';

// ─── Types ────────────────────────────────────────────────────────────────────

interface Variant {
  label: string;
  size: string;
  mainImage: string;
  gallery: string[];
  price: number;
  originalPrice: number;
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
    mainImage: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-S-3-scaled.jpg',
    gallery: [
      'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-S-1-1-scaled.jpg',
    ],
    price: 850,
    originalPrice: 1100,
    dimensions: 'H: 18 cm  |  W: 8 cm',
  },
  {
    label: 'M',
    size: 'Medium',
    mainImage: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-M-1-3-scaled.jpg',
    gallery: [
      'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-M-1-scaled.jpg',
      'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-M-2-1-scaled.jpg',
    ],
    price: 1250,
    originalPrice: 1600,
    dimensions: 'H: 24 cm  |  W: 10 cm',
  },
  {
    label: 'L',
    size: 'Large',
    mainImage: 'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-L-3-scaled.jpg',
    gallery: [
      'https://trophymart.co.in/wp-content/uploads/2024/09/Starlight-Gold-1001-L-1-scaled.jpg',
    ],
    price: 1800,
    originalPrice: 2300,
    dimensions: 'H: 32 cm  |  W: 13 cm',
  },
];

const DESCRIPTION_POINTS = [
  {
    icon: '◆',
    label: 'Innovation',
    text: 'Exclusive design with a metal body and a glass diamond depicting elegance and craftsmanship. Both durable and economical.',
  },
  {
    icon: '◆',
    label: 'Customization and Personalization',
    text: 'Customers can select from a variety of sizes, forms, and designs in addition to adding custom engravings or logos to honour certain accomplishments or occasions. Our team works closely to build a trophy that suits every client.',
  },
  {
    icon: '◆',
    label: 'Quality Assurance',
    text: 'Quality is our top priority, with the shine of the diamond reflected the same even after one year. One year guaranteed period.',
  },
  {
    icon: '◆',
    label: 'Occasion',
    text: 'Fit for every occasion like star awards, employee of the month, Growth Award, Sales Award and so on.',
  },
  {
    icon: '◆',
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
            <span className="mt-0.5 text-[9px] text-[#C59B27] shrink-0 leading-5">{point.icon}</span>
            <p className="text-sm text-[#475569] leading-relaxed">
              <span className="font-semibold text-[#0E233E]">{point.label}: </span>
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
      <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
        <p>
          Freedom to create the perfect award for you - <span className="text-[#0E233E] font-medium">A 5-step customisation process</span>
          {/* Each trophy can be personalised with a <span className="text-[#0E233E] font-medium">laser-engraved metal plate</span> on the base. You may include: */}
        </p>
        <ul className="space-y-1.5">
          {[
            'Tell us your vision',
            'Collaborate with our expert designers',
            'Personalise your trophy',
            'Review and confirm your order',
            'Final Approval and dispatch'
          ].map((item) => (
            <li key={item} className="flex items-baseline gap-2.5">
              <span className="text-[8px] text-[#C59B27] shrink-0">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      
      </div>
    ),
  },
  {
    title: 'Shipping & Delivery',
    content: (
      <div className="space-y-3 text-sm text-[#475569] leading-relaxed">
        <div className="flex items-start gap-3">
          <Truck size={16} className="text-[#C59B27] shrink-0 mt-0.5" />
          <p>Free standard shipping on orders above ₹ 5,000 across India.</p>
        </div>
        <div className="flex items-start gap-3">
          <Shield size={16} className="text-[#C59B27] shrink-0 mt-0.5" />
          <p>Each piece is individually bubble-wrapped and shipped in a rigid gift box to prevent transit damage.</p>
        </div>
        <ul className="space-y-1.5">
          {[
            'Metro cities: 2–4 working days',
            'Tier 2 / Tier 3 cities: 4–7 working days',
            'Express delivery available at additional cost',
          ].map((item) => (
            <li key={item} className="flex items-baseline gap-2.5">
              <span className="text-[8px] text-[#C59B27] shrink-0">◆</span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-xs text-[#64748B] pt-1">* Delivery timelines are indicative and may vary during peak seasons.</p>
      </div>
    ),
  },
];

const TRUST_BADGES = [
  { icon: Shield, text: '1-Year Guarantee' },
  { icon: Truck, text: 'Free Shipping ₹5k+' },
  { icon: Award, text: 'Premium Crafted' },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function AccordionPanel({ title, content }: AccordionItem) {
  const [open, setOpen] = useState(false);
  return (
    <div className="border border-[#E5E0D4] bg-white">
      <button
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between px-6 py-5 text-left bg-white hover:bg-[#FAF9F5] transition-colors"
      >
        <span className="font-serif text-base sm:text-lg font-bold text-[#0E233E] tracking-wide">{title}</span>
        {open ? (
          <ChevronUp size={16} className="text-[#C5222A] shrink-0" />
        ) : (
          <ChevronDown size={16} className="text-[#0E233E] shrink-0" />
        )}
      </button>
      {open && (
        <div className="px-6 py-5 border-t border-[#E5E0D4] bg-white">
          {content}
        </div>
      )}
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export const ProductPage: React.FC = () => {
  const [selectedVariant, setSelectedVariant] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [qty, setQty] = useState(1);

  const variant = VARIANTS[selectedVariant];
  const galleryImages = [variant.mainImage, ...variant.gallery];
  const savePct = Math.round((1 - variant.price / variant.originalPrice) * 100);

  return (
    <div className="min-h-screen bg-white text-[#161C24] font-sans">

      {/* ── Breadcrumb ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pt-8 pb-8">
        <p className="text-[11px] uppercase tracking-[0.18em] text-[#64748B]">
          <Link to="/" className="hover:text-[#C5222A] transition-colors">Home</Link>
          <span className="mx-2.5 text-[#CBD5E1]">/</span>
          <span>Trophies</span>
          <span className="mx-2.5 text-[#CBD5E1]">/</span>
          <span className="text-[#0E233E] font-semibold">Starlight Gold</span>
        </p>
      </div>

      {/* ── Main Grid ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 pb-24 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">

        {/* ── Left — Gallery (sticky on desktop; stacked on mobile with thumbs below) ── */}
        <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 lg:sticky lg:top-28 self-start">
          {/* Thumbnail strip — horizontal row below main image on mobile, vertical left column on desktop */}
          <div className="flex flex-row lg:flex-col gap-3 order-2 lg:order-1 w-full lg:w-20 shrink-0">
            {galleryImages.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                aria-label={`View image ${i + 1}`}
                className={`flex-1 lg:flex-none aspect-[2/3] border bg-[#FAF9F5] overflow-hidden transition-colors ${
                  i === selectedImage
                    ? 'border-[#0E233E]'
                    : 'border-[#E5E0D4] hover:border-[#0E233E]/50'
                }`}
              >
                <img
                  src={img}
                  alt={`Starlight Gold view ${i + 1}`}
                  className="w-full h-full object-cover"
                />
              </button>
            ))}
          </div>

          {/* Main image — 2:3 matches the source photos exactly (no crop) */}
          <div className="relative flex-1 order-1 lg:order-2 border border-[#E5E0D4] bg-[#FAF9F5] aspect-[2/3] flex items-center justify-center overflow-hidden">
            <span className="absolute top-0 left-0 z-10 bg-[#0E233E] text-white text-[10px] font-bold uppercase tracking-[0.22em] px-4 py-2.5">
              Best Seller
            </span>
            <img
              src={galleryImages[selectedImage]}
              alt={`Starlight Gold – ${variant.size}`}
              className="w-full h-full object-cover transition-opacity duration-500"
              key={`${variant.label}-${selectedImage}`}
            />
          
          </div>
        </div>

        {/* ── Right — Details ── */}
        <div className="flex flex-col">

          <div className="w-10 h-px bg-[#C59B27]" />
          <p className="mt-4 text-[11px] font-bold uppercase tracking-[0.28em] text-[#C5222A]">
            Trophy Mart Exclusive
          </p>
          <h1 className="font-serif text-4xl sm:text-5xl font-bold text-[#0E233E] mt-2 leading-[1.05]">
            Starlight Gold
          </h1>

          <div className="mt-4 flex items-center gap-3 text-xs">
            <span className="tracking-wide text-[#64748B]">SKU TM-SG-1001</span>
            <span className="h-3 w-px bg-[#E5E0D4]" />
            <span className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star
                  key={s}
                  size={13}
                  fill={s <= 4 ? '#C59B27' : 'none'}
                  stroke="#C59B27"
                  strokeWidth={1.5}
                />
              ))}
              <span className="ml-1.5 text-[#64748B]">(48 reviews)</span>
            </span>
          </div>

          {/* Price */}
          <div className="mt-7 flex items-baseline gap-3 flex-wrap">
            <span className="font-serif text-4xl font-bold text-[#0E233E] tabular-nums">
              ₹{variant.price.toLocaleString('en-IN')}
            </span>
            <span className="text-sm text-[#94A3B8] line-through tabular-nums">
              ₹{variant.originalPrice.toLocaleString('en-IN')}
            </span>
            <span className="border border-[#C5222A]/30 bg-[#C5222A]/5 text-[#C5222A] text-[10px] font-bold uppercase tracking-[0.18em] px-2.5 py-1">
              Save {savePct}%
            </span>
          </div>
          <p className="mt-2 text-[11px] tracking-wide text-[#64748B]">
            {variant.dimensions} · Inclusive of GST · Official tax invoice provided
          </p>

          <div className="my-8 border-t border-[#E5E0D4]" />

          {/* Variant selector */}
          <div>
            <p className="text-[11px] font-bold uppercase tracking-[0.22em] text-[#0E233E]">
              Select Size 
            </p>
            <div className="mt-3.5 flex gap-3">
              {VARIANTS.map((v, i) => (
                <button
                  key={v.label}
                  onClick={() => {
                    setSelectedVariant(i);
                    setSelectedImage(0);
                  }}
                  className={`h-12 w-12 border text-sm font-bold transition-colors ${
                    i === selectedVariant
                      ? 'border-[#0E233E] bg-[#0E233E] text-white'
                      : 'border-[#E5E0D4] bg-white text-[#475569] hover:border-[#0E233E]'
                  }`}
                >
                  {v.label}
                </button>
              ))}
            </div>
          </div>

          {/* Quantity + CTA row */}
          <div className="mt-9 flex flex-wrap items-stretch gap-3">
            <div className="flex shrink-0 border border-[#E5E0D4] bg-white">
              <button
                onClick={() => setQty((q) => Math.max(1, q - 1))}
                className="w-11 h-12 flex items-center justify-center text-lg font-bold text-[#0E233E] hover:bg-[#FAF9F5] transition-colors"
                aria-label="Decrease quantity"
              >
                −
              </button>
              <span className="w-12 h-12 flex items-center justify-center text-sm font-semibold text-[#0E233E] tabular-nums border-x border-[#E5E0D4]">
                {qty}
              </span>
              <button
                onClick={() => setQty((q) => q + 1)}
                className="w-11 h-12 flex items-center justify-center text-lg font-bold text-[#0E233E] hover:bg-[#FAF9F5] transition-colors"
                aria-label="Increase quantity"
              >
                +
              </button>
            </div>

            <button className="flex-1 min-w-[170px] h-12 flex items-center justify-center gap-2.5 px-4 bg-[#C5222A] text-white text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#991B1B] transition-colors">
              <ShoppingCart size={15} />
              Add to Cart
            </button>
            <button className="flex-1 min-w-[180px] h-12 flex items-center justify-center gap-2.5 px-4 border border-[#0E233E] bg-white text-[#0E233E] text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-[#0E233E] hover:text-white transition-colors">
              <Palette size={15} />
              Customization
            </button>
          </div>


          {/* Accordions */}
          <div className="mt-10">
         
            <div className="mt-4 space-y-3">
              {ACCORDIONS.map((acc, i) => (
                <AccordionPanel key={i} title={acc.title} content={acc.content} />
              ))}
            </div>
          </div>

          {/* Trust badges — hairline divided */}
          <div className="mt-8 grid grid-cols-3 gap-px bg-[#E5E0D4] border border-[#E5E0D4]">
            {TRUST_BADGES.map((b, i) => (
              <div key={i} className="bg-white flex flex-col items-center gap-2 py-5 px-2 text-center">
                <b.icon size={17} className="text-[#C59B27]" strokeWidth={1.5} />
                <span className="text-[10px] font-semibold uppercase tracking-[0.12em] text-[#475569] leading-tight">{b.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

    </div>
  );
};
