import React, { useState } from 'react';
import { ChevronDown, PhoneCall } from 'lucide-react';
import { FAQS } from '../data/trophyData';

interface FaqSectionProps {
  onOpenQuoteModal: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuoteModal }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-white border-b border-[#E8E4DA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16">
          <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-[#0E233E] mt-4 leading-[1.02] tracking-tight lg:whitespace-nowrap">
            Frequently Asked{' '}
            <span className="italic text-[#C5222A]">Questions</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <div
                key={faq.question}
                className="border border-[#E5E0D4] overflow-hidden transition-all duration-200"
              >
                <button
                  onClick={() => toggleFaq(index)}
                  className="w-full p-4 sm:p-5 text-left bg-[#FAF9F5] hover:bg-[#F3F0E8] transition-colors flex items-center justify-between gap-4"
                >
                  <span className="font-serif text-base sm:text-lg font-bold text-[#0E233E]">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-[#0E233E] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'rotate-180 text-[#C5222A]' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-4 sm:p-5 bg-white text-xs sm:text-sm text-[#475569] leading-relaxed border-t border-[#E8E4DA]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

     
      </div>
    </section>
  );
};
