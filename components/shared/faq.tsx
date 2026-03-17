"use client";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "How do I book a flight on FaresMatch?",
      answer: "Simply enter your departure and destination cities, select your travel dates, and choose from the available options. You can filter by price, duration, and airline to find the best match for your needs."
    },
    {
      question: "Can I modify or cancel my booking?",
      answer: "Yes, most bookings can be modified or canceled. The specific terms depend on the fare type you selected. Please check your booking confirmation for detailed cancellation policies."
    },
    {
      question: "How do I get the best deals on flights?",
      answer: "Sign up for our newsletter to receive exclusive deals and alerts. You can also set up price alerts for your desired routes to be notified when prices drop."
    },
    {
      question: "Are there any hidden fees?",
      answer: "No, we believe in transparent pricing. All taxes and fees are included in the price you see during booking. We do not add any hidden charges."
    },
    {
      question: "Can I earn loyalty points?",
      answer: "Yes, our loyalty program allows you to earn points with every booking which can be redeemed for discounts on future travel."
    },
    {
      question: "Is my personal information secure?",
      answer: "Absolutely. We use industry-standard security measures to protect your personal and payment information. All data is encrypted and securely stored."
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-lg">
              <button
                className="flex justify-between items-center w-full p-6 text-left font-medium hover:bg-gray-50 rounded-lg"
                onClick={() => toggleFAQ(index)}
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                />
              </button>
              {openIndex === index && (
                <div className="p-6 pt-0 border-t border-gray-200">
                  <p className="text-gray-600">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;