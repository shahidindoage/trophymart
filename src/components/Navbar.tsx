import React, { useState, useEffect, useRef } from 'react';
import { Search, ChevronDown, Menu, X, ArrowRight } from 'lucide-react';

interface NavbarProps {
  onOpenSearch: () => void;
  onSelectCategory: (category: string) => void;
  onOpenContact: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenSearch,
  onSelectCategory,
  onOpenContact,
}) => {
  const [isTypeOpen, setIsTypeOpen] = useState(false);
  const [isOccasionOpen, setIsOccasionOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const typeRef = useRef<HTMLDivElement>(null);
  const occasionRef = useRef<HTMLDivElement>(null);

  // Close dropdowns on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (typeRef.current && !typeRef.current.contains(e.target as Node)) {
        setIsTypeOpen(false);
      }
      if (occasionRef.current && !occasionRef.current.contains(e.target as Node)) {
        setIsOccasionOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Lock body scroll & close on Escape while the mobile menu is open
  useEffect(() => {
    if (!mobileMenuOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setMobileMenuOpen(false);
    };
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [mobileMenuOpen]);

  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setMobileMenuOpen(false);
  };

  const scrollToAbout = (e: React.MouseEvent) => {
    e.preventDefault();
    const elem = document.getElementById('about') || document.getElementById('craftsmanship');
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  const handleCategoryClick = (category: string) => {
    onSelectCategory(category);
    setIsTypeOpen(false);
    setIsOccasionOpen(false);
    setMobileMenuOpen(false);
    const catalog = document.getElementById('catalog');
    if (catalog) {
      catalog.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const occasionMegaMenu = [
    {
      heading: 'Sports & Games',
      items: [
        { label: 'Cricket trophies', category: 'medals' },
        { label: 'Football trophies', category: 'medals' },
        { label: 'Golf trophies', category: 'medals' },
        { label: 'Kabaddi & wrestling', category: 'medals' },
        { label: 'All sports trophies', category: 'medals', viewAll: true }
      ]
    },
    {
      heading: 'Education',
      items: [
        { label: 'School prize day', category: 'crystal' },
        { label: 'College & university', category: 'crystal' },
        { label: 'Academic excellence', category: 'crystal' },
        { label: 'Sports day', category: 'crystal' },
        { label: 'All education awards', category: 'crystal', viewAll: true }
      ]
    },
    {
      heading: 'Corporate Awards',
      items: [
        { label: 'Employee of the month', category: 'plaques' },
        { label: 'Annual day awards', category: 'plaques' },
        { label: 'Client & partner gifts', category: 'plaques' },
        { label: 'Sales & performance', category: 'plaques' },
        { label: 'All corporate awards', category: 'plaques', viewAll: true }
      ]
    },
    {
      heading: 'Cultural & Community',
      items: [
        { label: 'Dance & music', category: 'bespoke' },
        { label: 'Art competitions', category: 'bespoke' },
        { label: 'Associations & clubs', category: 'bespoke' },
        { label: 'Religious & social events', category: 'bespoke' },
        { label: 'All cultural awards', category: 'bespoke', viewAll: true }
      ]
    }
  ];

  const typeMegaMenu = [
    {
      heading: 'Trophies',
      items: [
        { label: 'Acrylic trophies', category: 'crystal' },
        { label: 'Crystal trophies', category: 'crystal' },
        { label: 'Crystal glass trophies', category: 'crystal' },
        { label: 'Fiber trophies', category: 'crystal' },
        { label: 'Resin trophies', category: 'crystal' },
        { label: 'View all trophies', category: 'all', viewAll: true }
      ]
    },
    {
      heading: 'Medals & Badges',
      items: [
        { label: 'Sports medals', category: 'medals' },
        { label: 'Academic medals', category: 'medals' },
        { label: 'Corporate medals', category: 'medals' },
        { label: 'Custom medals', category: 'medals' },
        { label: 'Lapel badges & pins', category: 'medals' },
        { label: 'View all medals', category: 'medals', viewAll: true }
      ]
    },
    {
      heading: 'Plaques & Mementos',
      items: [
        { label: 'Wooden plaques', category: 'plaques' },
        { label: 'Acrylic plaques', category: 'plaques' },
        { label: 'Glass plaques', category: 'plaques' },
        { label: 'Mementos', category: 'plaques' },
        { label: 'Certificate Frames', category: 'plaques' },
        { label: 'View all plaques', category: 'plaques', viewAll: true }
      ]
    },
    {
      heading: 'Cups & Shields',
      items: [
        { label: 'Trophy cups', category: 'sculpted-gold' },
        { label: 'Shields', category: 'sculpted-gold' },
        { label: 'Badges & pins', category: 'medals' },
        { label: 'View all cups', category: 'sculpted-gold', viewAll: true }
      ]
    }
  ];

  return (
    <header
      className="absolute top-0 left-0 right-0 z-40 w-full py-5 sm:py-6 bg-transparent border-b border-transparent"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        {/* Left Side: Logo */}
        <a
          href="#"
          onClick={scrollToTop}
          className="flex items-center gap-3 shrink-0 group focus:outline-none"
        >
          <img
            src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
            alt="Trophy Mart Logo"
            className="h-12 sm:h-14 w-auto object-contain brightness-0 invert transition-transform duration-300 group-hover:scale-105"
            referrerPolicy="no-referrer"
            onError={(e) => {
              (e.currentTarget as HTMLElement).style.display = 'none';
            }}
          />
     
        </a>

        {/* Center: Menus (Home, Shop By Type, Shop By Occasion, About, Contact Us) */}
        <nav className="hidden md:flex items-center gap-7 lg:gap-9 text-[13.5px] font-medium tracking-wide text-white/90">
          
          {/* Home */}
          <a
            href="#"
            onClick={scrollToTop}
            className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-white/60 whitespace-nowrap"
          >
            Home
          </a>

          {/* Shop By Type Dropdown */}
          <div
            className="relative"
            ref={typeRef}
            onMouseEnter={() => {
              setIsTypeOpen(true);
              setIsOccasionOpen(false);
            }}
            onMouseLeave={() => setIsTypeOpen(false)}
          >
            <button
              onClick={() => {
                setIsTypeOpen(!isTypeOpen);
                setIsOccasionOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none whitespace-nowrap"
            >
              <span>Shop By Type</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                  isTypeOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isTypeOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[68rem] pt-3">
                <div className=" border border-white/10 bg-[#070D18]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                  <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-7 lg:gap-x-8 lg:gap-y-8 p-6 sm:p-8 lg:p-9">
                    {typeMegaMenu.map((group) => (
                      <div key={group.heading} className="lg:col-span-2">
                        <h3 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                          {group.heading}
                        </h3>
                        <ul className="mt-2.5 lg:mt-3 space-y-1.5 lg:space-y-2">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <button
                                onClick={() => handleCategoryClick(item.category)}
                                className={`w-full text-left text-xs lg:text-[13px] transition-colors ${
                                  item.viewAll
                                    ? 'font-semibold text-white hover:text-[#DFB967]'
                                    : 'text-white/65 hover:text-white'
                                }`}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Side Image CTA */}
                    <div className="col-span-2 lg:col-span-4 relative overflow-hidden border border-white/10 min-h-[200px] lg:min-h-[280px]">
                      <img
                        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/Silver%20and%20Gold%20Trophy%20Under%20Stadium%20Lights.png"
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover object-right opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-[#070D18]/10" />

                      <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFB967]">
                          Bespoke Atelier
                        </span>
                        <h4 className="font-serif text-xl lg:text-2xl font-bold text-white mt-1 leading-snug">
                          Can’t find your design?
                        </h4>
                        <p className="text-[11px] lg:text-xs text-white/60 mt-1 leading-relaxed">
                          Commission a one-of-a-kind trophy with our master
                          craftspeople.
                        </p>
                        <button
                          onClick={() => {
                            setIsTypeOpen(false);
                            onOpenContact();
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 self-start  bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#070D18] transition-colors hover:bg-[#DFB967]"
                        >
                          <span>Request a Quote</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Shop By Occasion Dropdown */}
          <div
            className="relative"
            ref={occasionRef}
            onMouseEnter={() => {
              setIsOccasionOpen(true);
              setIsTypeOpen(false);
            }}
            onMouseLeave={() => setIsOccasionOpen(false)}
          >
            <button
              onClick={() => {
                setIsOccasionOpen(!isOccasionOpen);
                setIsTypeOpen(false);
              }}
              className="flex items-center gap-1.5 hover:text-white transition-colors focus:outline-none whitespace-nowrap"
            >
              <span>Shop By Occasion</span>
              <ChevronDown
                className={`w-3.5 h-3.5 transition-transform duration-200 opacity-80 ${
                  isOccasionOpen ? 'rotate-180' : ''
                }`}
              />
            </button>

            {isOccasionOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 w-[calc(100vw-2rem)] max-w-[68rem] pt-3">
                <div className=" border border-white/10 bg-[#070D18]/95 backdrop-blur-xl shadow-2xl overflow-hidden animate-in fade-in slide-in-from-top-2 duration-150 text-left">
                  <div className="grid grid-cols-2 lg:grid-cols-12 gap-x-6 gap-y-7 lg:gap-x-8 lg:gap-y-8 p-6 sm:p-8 lg:p-9">
                    {occasionMegaMenu.map((group) => (
                      <div key={group.heading} className="lg:col-span-2">
                        <h3 className="text-[10px] lg:text-[11px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                          {group.heading}
                        </h3>
                        <ul className="mt-2.5 lg:mt-3 space-y-1.5 lg:space-y-2">
                          {group.items.map((item) => (
                            <li key={item.label}>
                              <button
                                onClick={() => handleCategoryClick(item.category)}
                                className={`w-full text-left text-xs lg:text-[13px] transition-colors ${
                                  item.viewAll
                                    ? 'font-semibold text-white hover:text-[#DFB967]'
                                    : 'text-white/65 hover:text-white'
                                }`}
                              >
                                {item.label}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}

                    {/* Side Image CTA */}
                    <div className="col-span-2 lg:col-span-4 relative overflow-hidden  border border-white/10 min-h-[200px] lg:min-h-[280px]">
                      <img
                        src="https://vrfacwizigigcpowkrye.supabase.co/storage/v1/object/public/trophy/trohpy-2.jpg"
                        alt=""
                        aria-hidden="true"
                        referrerPolicy="no-referrer"
                        className="absolute inset-0 w-full h-full object-cover opacity-70"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#070D18] via-[#070D18]/50 to-[#070D18]/10" />

                      <div className="relative h-full flex flex-col justify-end p-5 lg:p-6">
                        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#DFB967]">
                          Occasion Curation
                        </span>
                        <h4 className="font-serif text-xl lg:text-2xl font-bold text-white mt-1 leading-snug">
                          Planning an awards night?
                        </h4>
                        <p className="text-[11px] lg:text-xs text-white/60 mt-1 leading-relaxed">
                          Tell us the occasion and we’ll curate the perfect
                          awards.
                        </p>
                        <button
                          onClick={() => {
                            setIsOccasionOpen(false);
                            onOpenContact();
                          }}
                          className="mt-3 inline-flex items-center gap-1.5 self-start  bg-white px-4 py-2 text-[10px] font-bold uppercase tracking-wider text-[#070D18] transition-colors hover:bg-[#DFB967]"
                        >
                          <span>Plan My Awards</span>
                          <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* About */}
          <a
            href="#craftsmanship"
            onClick={scrollToAbout}
            className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-white/60 whitespace-nowrap"
          >
            About
          </a>

          {/* Contact Us */}
          <button
            onClick={onOpenContact}
            className="hover:text-white transition-colors hover:underline underline-offset-8 decoration-white/60 whitespace-nowrap focus:outline-none"
          >
            Contact Us
          </button>
        </nav>

        {/* Right Side: Search Icon Button ONLY */}
        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={onOpenSearch}
            aria-label="Search Trophies"
            className="p-2.5 text-white/90 hover:text-white hover:bg-white/10 transition-all focus:outline-none focus:ring-2 focus:ring-white/40"
          >
            <Search className="w-5 h-5" />
          </button>

          {/* Mobile Menu Toggle Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Navigation Menu"
            className="p-2 md:hidden text-white hover:bg-white/10  transition-colors focus:outline-none"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu — Full Screen */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 md:hidden bg-[#0E233E] text-white overflow-y-auto animate-in fade-in duration-200">
          {/* Overlay Header */}
          <div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
            <a
              href="#"
              onClick={scrollToTop}
              className="flex items-center shrink-0"
            >
              <img
                src="https://trophymart.co.in/wp-content/uploads/2024/07/TROPHY-MART-1-removebg-preview.png"
                alt="Trophy Mart Logo"
                className="h-12 w-auto object-contain brightness-0 invert"
                referrerPolicy="no-referrer"
              />
            </a>
            <button
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close Navigation Menu"
              className="p-2 rounded-lg bg-white/10 hover:bg-white/20 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Menu Content */}
          <nav className="px-6 py-6 pb-16">
            <button
              onClick={scrollToTop}
              className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
            >
              Home
            </button>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Shop By Type
              </span>
              <div className="mt-4 space-y-5">
                {typeMegaMenu.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                      {group.heading}
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleCategoryClick(item.category)}
                          className={`block w-full text-left py-1.5 text-sm transition-colors ${
                            item.viewAll
                              ? 'font-semibold text-white hover:text-[#DFB967]'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10">
              <span className="text-[11px] uppercase tracking-[0.2em] text-white/50 font-semibold">
                Shop By Occasion
              </span>
              <div className="mt-4 space-y-5">
                {occasionMegaMenu.map((group) => (
                  <div key={group.heading}>
                    <h3 className="text-[10px] font-bold uppercase tracking-[0.18em] text-[#DFB967]">
                      {group.heading}
                    </h3>
                    <div className="mt-1.5 space-y-0.5">
                      {group.items.map((item) => (
                        <button
                          key={item.label}
                          onClick={() => handleCategoryClick(item.category)}
                          className={`block w-full text-left py-1.5 text-sm transition-colors ${
                            item.viewAll
                              ? 'font-semibold text-white hover:text-[#DFB967]'
                              : 'text-white/70 hover:text-white'
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 pt-6 border-t border-white/10 space-y-3">
              <button
                onClick={scrollToAbout}
                className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
              >
                About
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="block w-full text-left font-serif text-2xl font-semibold hover:text-amber-300 transition-colors"
              >
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
