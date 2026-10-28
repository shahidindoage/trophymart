import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { CategoryShowcase } from './components/CategoryShowcase';
import { ProductCatalog } from './components/ProductCatalog';
import { TrustStrip } from './components/TrustStrip';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductQuickView } from './components/ProductQuickView';
import { CorporateQuotationModal } from './components/CorporateQuotationModal';
import { OrderSuccessModal } from './components/OrderSuccessModal';
import { SearchModal } from './components/SearchModal';
import { TrophyProduct, CartItem } from './types/trophy';
import { TROPHY_PRODUCTS } from './data/trophyData';
import { TestimonialsCustomisationSection } from './components/TestimonialsCustomisationSection';
import { ProductPage } from './components/ProductPage';

export default function App() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [cartItems, setCartItems] = useState<CartItem[]>([
    {
      id: 'initial-sample-01',
      product: TROPHY_PRODUCTS[0],
      quantity: 1,
      customization: {
        recipientName: 'Prajakta Samant',
        awardTitle: 'Excellence in Leadership 2026',
        organization: 'Trophy Mart Honors',
        plateFinish: 'gold',
        eventDate: 'November 2026'
      }
    }
  ]);

  const [isCartOpen, setIsCartOpen] = useState<boolean>(false);
  const [isSearchOpen, setIsSearchOpen] = useState<boolean>(false);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState<boolean>(false);
  const [quickViewProduct, setQuickViewProduct] = useState<TrophyProduct | null>(null);
  const [isCheckoutModalOpen, setIsCheckoutModalOpen] = useState<boolean>(false);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 2500);
  };

  const handleSelectCategory = (cat: string) => {
    setSelectedCategory(cat);
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToStudio = () => {
    const studioElem = document.getElementById('studio');
    if (studioElem) {
      studioElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleScrollToCatalog = () => {
    const catalogElem = document.getElementById('catalog');
    if (catalogElem) {
      catalogElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleAddToCart = (product: TrophyProduct, customization?: any) => {
    setCartItems((prev) => {
      // If customized, create a new distinct line item
      if (customization) {
        const newItem: CartItem = {
          id: `custom-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
          product,
          quantity: 1,
          customization
        };
        return [newItem, ...prev];
      }

      // If standard un-customized, increment existing if found
      const existingIdx = prev.findIndex((i) => i.product.id === product.id && !i.customization);
      if (existingIdx > -1) {
        const next = [...prev];
        next[existingIdx] = {
          ...next[existingIdx],
          quantity: next[existingIdx].quantity + 1
        };
        return next;
      }

      return [
        {
          id: `item-${Date.now()}`,
          product,
          quantity: 1
        },
        ...prev
      ];
    });

    showToast(`Added "${product.name}" to your commemorative bag`);
  };

  const handleUpdateQuantity = (id: string, delta: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id === id) {
            const nextQty = item.quantity + delta;
            return nextQty > 0 ? { ...item, quantity: nextQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartItem[]
    );
  };

  const handleRemoveItem = (id: string) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const handleProceedToCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutModalOpen(true);
  };

  const handleOrderCompleted = () => {
    setCartItems([]);
  };

  const cartCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div className="min-h-screen w-full max-w-full overflow-x-hidden flex flex-col bg-[#FAF9F5] text-[#161C24] font-sans antialiased selection:bg-[#0E233E] selection:text-white relative">

      {/* Shared Navbar — shown on all pages */}
      <Navbar
        onOpenSearch={() => setIsSearchOpen(true)}
        onSelectCategory={handleSelectCategory}
        onOpenContact={() => setIsQuoteModalOpen(true)}
        onOpenCart={() => setIsCartOpen(true)}
        cartCount={cartCount}
        onOpenAccount={() => showToast('Account portal coming soon')}
      />

      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-20 right-6 z-50 bg-[#0E233E] text-white text-xs px-4 py-2.5 rounded shadow-xl border border-white/10 animate-in fade-in duration-200">
          {toastMessage}
        </div>
      )}

      {/* ── Routes ── */}
      <Routes>

        {/* Home page */}
        <Route
          path="/"
          element={
            <>
              <main className="flex-1 w-full max-w-full overflow-x-hidden">
                <Hero
                  onExploreCatalog={handleScrollToCatalog}
                  onOpenCustomizer={handleScrollToStudio}
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
                <CategoryShowcase onSelectCategory={handleSelectCategory} />
                <ProductCatalog
                  selectedCategory={selectedCategory}
                  onSelectCategory={setSelectedCategory}
                  onQuickView={(product) => setQuickViewProduct(product)}
                  onAddToCart={(product) => handleAddToCart(product)}
                  onOpenCustomizerWithProduct={handleScrollToStudio}
                />
                <TestimonialsCustomisationSection
                  onOpenCustomizer={handleScrollToStudio}
                  onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
                />
                <TrustStrip />
                <FaqSection onOpenQuoteModal={() => setIsQuoteModalOpen(true)} />
              </main>
              <Footer
                onSelectCategory={handleSelectCategory}
                onOpenCustomizer={handleScrollToStudio}
                onOpenQuoteModal={() => setIsQuoteModalOpen(true)}
              />
            </>
          }
        />

        {/* Product detail page */}
        <Route path="/product/:slug" element={<ProductPage />} />

      </Routes>

      {/* ── Shared Modals (rendered outside Routes so they persist across navigation) ── */}
      <SearchModal
        isOpen={isSearchOpen}
        onClose={() => setIsSearchOpen(false)}
        onSelectProduct={(product) => setQuickViewProduct(product)}
        onSelectCategory={handleSelectCategory}
      />
      <ProductQuickView
        product={quickViewProduct}
        onClose={() => setQuickViewProduct(null)}
        onAddToCart={handleAddToCart}
        onOpenCustomizer={() => {
          setQuickViewProduct(null);
          handleScrollToStudio();
        }}
      />
      <CorporateQuotationModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
      />
      <OrderSuccessModal
        isOpen={isCheckoutModalOpen}
        onClose={() => setIsCheckoutModalOpen(false)}
        items={cartItems}
        onOrderCompleted={handleOrderCompleted}
      />

    </div>
  );
}
