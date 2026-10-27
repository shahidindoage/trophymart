import React, { useState, useEffect, useRef } from 'react';
import { ArrowRight, Sparkles, X, ShieldCheck, Gem, Zap, Crown, CheckCircle2 } from 'lucide-react';

interface AboutUsSectionProps {
  onDiscoverStory?: () => void;
}

export const AboutUsSection: React.FC<AboutUsSectionProps> = ({ onDiscoverStory }) => {
  const [inView, setInView] = useState(false);
  const [activePillar, setActivePillar] = useState<number>(0);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  // Scroll detection for smooth in-view animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true);
        }
      },
      { threshold: 0.25 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const craftPillars = [
    {
      icon: Gem,
      name: 'K9 Optical Lapidary',
      spec: '0-Bubble Purity',
      description: 'Hand-cut by master lapidarists using diamond cutting discs for unmatched prismatic brilliance.'
    },
    {
      icon: Zap,
      name: 'Micron Laser Sub-Surface',
      spec: '0.02mm Precision',
      description: 'Fiber-optic laser pulses generate 3D frosted holographic reliefs suspended inside solid crystal.'
    },
    {
      icon: Crown,
      name: '24k Mirror Electroplate',
      spec: 'Molecular Bond',
      description: 'Genuine gold finish sealed against oxidation, guaranteeing showroom luster for perpetual awards.'
    }
  ];

  const handleOpenStory = () => {
    if (onDiscoverStory) {
      onDiscoverStory();
    } else {
      setIsStoryModalOpen(true);
    }
  };

  return (
    <section
      ref={sectionRef}
      id="about"
      className="py-24 lg:py-32 bg-gradient-to-b from-white via-[#FAF9F5] to-white border-b border-[#E8E4DA] overflow-hidden relative"
    >
      {/* Background Subtle Accent Grids & Ambient Aura */}
      <div className="absolute top-1/3 left-0 w-80 h-80 bg-[#C59B27]/5 rounded-full blur-3xl pointer-events-none -translate-x-1/2" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#0E233E]/5 rounded-full blur-3xl pointer-events-none translate-x-1/3" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-stretch">
          
          {/* Left Column: Interactive Image Frame with Scroll-Triggered Parallax & Seal */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            
            <div
              className={`relative w-full h-full min-h-[380px] sm:min-h-[460px] lg:min-h-[530px] overflow-hidden border border-[#E5E0D4] shadow-xl bg-[#FAF9F5] group transition-all duration-1000 ease-out ${
                inView
                  ? 'opacity-100 translate-y-0 scale-100'
                  : 'opacity-0 translate-y-8 scale-[0.98]'
              }`}
            >
              {/* High-Resolution Trophy Craftsmanship Image */}
              <img
                src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/trohpy-2.jpg"
                alt="Trophy Mart Atelier & Manufacturing Craftsmanship"
                className="w-full h-full object-cover object-center transition-transform duration-1000 ease-out group-hover:scale-105"
                referrerPolicy="no-referrer"
                onError={(e) => {
                  (e.currentTarget as HTMLImageElement).src =
                    'https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/Silver%20and%20Gold%20Trophy%20Under%20Stadium%20Lights.png';
                }}
              />

              {/* Dynamic Glass Shimmer Overlay on Scroll/Hover */}
              <div className="absolute inset-0 bg-gradient-to-tr from-black/40 via-transparent to-white/20 pointer-events-none" />
              
              {/* Light sweep reflection effect across image */}
              <div
                className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/25 to-transparent -translate-x-full transition-transform duration-1000 pointer-events-none ${
                  inView ? 'translate-x-full' : ''
                }`}
              />

           
            </div>

          </div>

          {/* Right Column: Editorial Quote, Interactive Craft Pillars & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-between  py-2 sm:py-4">
            
            <div>
            

              {/* Large Manifesto Quote with Dynamic Emphasized Highlights */}
              <blockquote
                className={`font-sans text-xl sm:text-2xl lg:text-[1.85rem] text-[#1E293B] leading-[1.38] tracking-tight transition-all duration-700 delay-200 ${
                  inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
                }`}
              >
                “We believe honoring true excellence inspires future generations to rise.{' '}
                <span className="font-bold text-[#0E233E] bg-gradient-to-r from-amber-100/60 to-transparent px-1 rounded transition-colors duration-300">
                  At Trophy Mart, we combine master lapidary crystal crafting with precision laser engraving
                </span>{' '}
                to sculpt, cast, and preserve achievements that endure for generations.{' '}
                <span className="font-bold text-[#0E233E]">
                  From boardroom galas and sports championships to prestigious convocations
                </span>
                , we create bespoke awards designed to celebrate human distinction.”
              </blockquote>

            
            </div>

            {/* Bottom Row: Company Info & Action Button */}
            <div className="mt-10 pt-2 border-t border-[#E5E0D4] flex flex-col sm:flex-row sm:items-center justify-between gap-5">
              <div>
                <h3 className="font-serif text-2xl font-bold text-[#0E233E] tracking-tight">
                  Trophy Mart
                </h3>
                <p className="text-xs sm:text-[13px] text-[#64748B] mt-0.5">
                  Pioneering Luxury Awards & Bespoke Manufacturing
                </p>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={handleOpenStory}
                  className="inline-flex items-center justify-center gap-2 px-6 py-3 text-xs font-semibold tracking-wider text-[#0E233E] bg-white border border-[#0E233E]  hover:bg-[#0E233E] hover:text-white transition-all duration-200 cursor-pointer shadow-xs group"
                >
                  <span>Discover Our Story</span>
                  <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-1" />
                </button>
              </div>
            </div>

          </div>

        </div>

      </div>

      {/* Discover Our Story Interactive Heritage Modal */}
      {isStoryModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-black/75 backdrop-blur-md flex items-center justify-center p-4">
          <div
            className="bg-white border border-[#E5E0D4] rounded-xl max-w-3xl w-full max-h-[92vh] overflow-y-auto shadow-2xl relative p-6 sm:p-10 animate-in fade-in duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Close Button */}
            <button
              onClick={() => setIsStoryModalOpen(false)}
              aria-label="Close story modal"
              className="absolute top-5 right-5 p-2 text-[#64748B] hover:text-[#0E233E] rounded-full hover:bg-[#F3F0E8] transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-[0.2em] text-[#C5222A]">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>The Heritage Chronicle</span>
                </div>
                <h2 className="font-serif text-3xl sm:text-4xl font-bold text-[#0E233E] mt-1.5 tracking-tight">
                  A Decade of Honoring Greatness
                </h2>
                <p className="text-xs sm:text-sm text-[#475569] mt-2 leading-relaxed">
                  Founded in Mumbai in 2014, Trophy Mart was born from a singular conviction: victory deserves more than generic catalog medals.
                </p>
              </div>

              {/* 3 Milestones Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 py-4 border-y border-[#E8E4DA]">
                <div className="p-4 bg-[#FAF9F5] rounded-lg border border-[#E8E4DA]">
                  <div className="font-serif text-3xl font-bold text-[#0E233E]">15,000 sq.ft</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5222A] mt-1">Manufacturing Plant</div>
                  <p className="text-[11px] text-[#64748B] mt-1">Direct lapidary cutting, diamond polishing & CNC milling under one roof.</p>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-lg border border-[#E8E4DA]">
                  <div className="font-serif text-3xl font-bold text-[#0E233E]">50,000+</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5222A] mt-1">Clients Served</div>
                  <p className="text-[11px] text-[#64748B] mt-1">Entrusted by multinational conglomerates, premier sports boards & universities.</p>
                </div>

                <div className="p-4 bg-[#FAF9F5] rounded-lg border border-[#E8E4DA]">
                  <div className="font-serif text-3xl font-bold text-[#0E233E]">66+ Cities</div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#C5222A] mt-1">Express Dispatch</div>
                  <p className="text-[11px] text-[#64748B] mt-1">Real-time tracked priority transit with custom satin-casket protection.</p>
                </div>
              </div>

              {/* Guiding Principles */}
              <div className="space-y-3">
                <h4 className="font-serif text-xl font-bold text-[#0E233E]">Our Artisan Standards</h4>
                <div className="space-y-2 text-xs sm:text-sm text-[#334155]">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5222A] shrink-0 mt-0.5" />
                    <span><strong>100% In-House Direct:</strong> Eliminating broker fees to deliver true museum-quality materials at wholesale economy.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5222A] shrink-0 mt-0.5" />
                    <span><strong>Complimentary 3D CAD Proofing:</strong> Digital visual simulation for every corporate logo and inscription before diamond cutting begins.</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-[#C5222A] shrink-0 mt-0.5" />
                    <span><strong>24-48 Hour Emergency Express:</strong> Dedicated rapid-turnaround cell for urgent corporate conclaves and sports tournaments.</span>
                  </div>
                </div>
              </div>

              {/* Modal Action */}
              <div className="pt-4 flex items-center justify-end">
                <button
                  onClick={() => setIsStoryModalOpen(false)}
                  className="px-6 py-2.5 text-xs font-semibold uppercase tracking-wider text-white bg-[#0E233E] hover:bg-[#1A365D] rounded transition-colors"
                >
                  Close Story
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </section>
  );
};
