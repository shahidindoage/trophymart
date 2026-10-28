import React, { useRef, useState } from 'react';
import { ChevronDown, ArrowUpRight } from 'lucide-react';

const POSTS = [
  {
    id: 'b-1',
    category: 'Craft & Materials',
    title: 'The Anatomy of a Championship Cup: Inside the 24k Electroplating Bay',
    excerpt:
      'From spun brass to a mirror-gold finish that outlives decades of annual engravings — a walkthrough of our nine-step electroplating line, why we plate at double industry thickness, and how the anti-tarnish sealant is cured for perpetual trophies.',
    date: '18 Oct 2026',
    readTime: '6 min read',
    image: '/frames/ezgif-frame-030.jpg'
  },
  {
    id: 'b-2',
    category: 'Technical Guide',
    title: 'Laser vs. Sandcarving: Choosing the Right Engraving for Crystal Awards',
    excerpt:
      'Sub-surface 3D laser engraving, surface frost etching, and deep sandcarved relief each tell a different story under light. A practical comparison of legibility, depth, cost, and turnaround to match the technique to your award and budget.',
    date: '02 Oct 2026',
    readTime: '8 min read',
    image: '/frames/ezgif-frame-150.jpg'
  },
  {
    id: 'b-3',
    category: 'Events & Ideas',
    title: 'Planning a Corporate Awards Night Your Teams Will Actually Remember',
    excerpt:
      'The trophy is the anchor — but pacing, citation scripts, lighting cues, and the reveal moment decide whether an awards night lands. Field-tested checklists from 500+ galas, convocations, and sports ceremonies we have manufactured for.',
    date: '21 Sep 2026',
    readTime: '5 min read',
    image: '/frames/ezgif-frame-260.jpg'
  }
];

export const BlogSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);
  const [hoverIndex, setHoverIndex] = useState<number | null>(null);
  const floatRef = useRef<HTMLDivElement>(null);

  // Move the floating preview directly via the DOM so hover-tracking never re-renders the list
  const handleMouseMove = (e: React.MouseEvent) => {
    const float = floatRef.current;
    if (!float) return;
    const x = Math.min(e.clientX + 28, window.innerWidth - 340);
    const y = Math.min(e.clientY - 130, window.innerHeight - 240);
    float.style.transform = `translate(${Math.max(x, 12)}px, ${Math.max(y, 12)}px)`;
  };

  return (
    <section id="journal" className="py-20 bg-[#FAF9F5] border-b border-[#E8E4DA] relative overflow-hidden">
      {/* Ambient brand auras */}
      <div className="absolute -top-20 left-0 w-80 h-80 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-[#0E233E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Section Header */}
        <div className="mb-12 sm:mb-14 flex items-end justify-between gap-6">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] leading-[1.02] tracking-tight">
            From the{' '}
            <span className="italic text-[#C5222A]">Atelier Journal</span>
          </h2>
          <span className="hidden sm:block text-[11px] font-bold uppercase tracking-[0.2em] text-[#64748B] pb-3 whitespace-nowrap">
            Notes on craft & ceremonies
          </span>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5" onMouseMove={handleMouseMove}>
          {POSTS.map((post, index) => {
            const isOpen = openIndex === index;
            return (
              <article
                key={post.id}
                className="border border-[#E5E0D4] bg-white overflow-hidden transition-all duration-200"
                onMouseEnter={() => setHoverIndex(index)}
                onMouseLeave={() => setHoverIndex((cur) => (cur === index ? null : cur))}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className={`w-full p-5 sm:p-6 text-left flex flex-col lg:flex-row lg:items-center gap-3 lg:gap-6 transition-colors ${
                    isOpen || hoverIndex === index ? 'bg-[#F4F1EA]' : 'bg-white'
                  }`}
                >
                  <span className="font-serif text-xl sm:text-2xl font-bold text-[#C59B27] tabular-nums shrink-0 w-10">
                    0{index + 1}
                  </span>

                  <span className="flex-1 min-w-0">
                    <span className="block text-[10px] font-bold uppercase tracking-[0.18em] text-[#C5222A]">
                      {post.category}
                    </span>
                    <span
                      className={`block font-serif text-lg sm:text-2xl font-bold leading-snug mt-1 transition-colors ${
                        hoverIndex === index ? 'text-[#C5222A]' : 'text-[#0E233E]'
                      }`}
                    >
                      {post.title}
                    </span>
                  </span>

                  <span className="flex items-center gap-5 shrink-0">
                    <span className="hidden md:flex flex-col items-end text-[11px] text-[#64748B]">
                      <span>{post.date}</span>
                      <span className="mt-0.5">{post.readTime}</span>
                    </span>
                    <ChevronDown
                      className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-[#C5222A]' : 'text-[#0E233E]'
                      }`}
                    />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 sm:px-6 pb-6 pt-0 bg-white">
                    <div className="lg:pl-16 flex flex-col sm:flex-row gap-5 items-start">
                      {/* Inline image — the reveal for touch/mobile users */}
                      <div className="w-full sm:w-52 shrink-0 aspect-[4/3] overflow-hidden border border-[#E8E4DA]">
                        <img
                          src={post.image}
                          alt={post.title}
                          loading="lazy"
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1">
                        <p className="text-xs sm:text-sm text-[#475569] leading-relaxed">
                          {post.excerpt}
                        </p>
                        <div className="mt-4 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-[#0E233E] group cursor-pointer">
                          Read Article
                          <ArrowUpRight className="w-3.5 h-3.5" />
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        {/* Floating hover preview — follows the cursor, desktop pointers only */}
        <div
          ref={floatRef}
          aria-hidden="true"
          className={`fixed top-0 left-0 z-40 pointer-events-none hidden lg:block w-72 aspect-[4/3] overflow-hidden border border-white/20 shadow-2xl transition-opacity duration-200 ${
            hoverIndex !== null ? 'opacity-100' : 'opacity-0'
          }`}
        >
          {POSTS.map((post, index) => (
            <img
              key={post.id}
              src={post.image}
              alt=""
              loading="lazy"
              draggable={false}
              className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-200 ${
                hoverIndex === index ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
