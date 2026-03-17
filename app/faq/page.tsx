"use client";
import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

export default function FAQPage() {
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
    },
    {
      question: "How do I contact customer support?",
      answer: "You can reach our 24/7 customer support team by calling 1-800-918-3039 or by emailing support@faresmatch.com. We're here to help with any questions or concerns."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit cards including Visa, Mastercard, American Express, and Discover. We also support Apple Pay, Google Pay, and PayPal for your convenience."
    },
    {
      question: "Can I book hotels for someone else?",
      answer: "Yes, you can book hotels for someone else. During the booking process, you'll have the option to enter the guest's information separately from your own."
    },
    {
      question: "How do I find my booking confirmation?",
      answer: "After completing your booking, you'll receive a confirmation email with your booking reference number. You can also access your booking details by logging into your account and visiting the 'My Bookings' section."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Frequently Asked Questions</h1>

          <div className="bg-white rounded-lg shadow p-8">
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

          <div className="mt-12 bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Still have questions?</h2>
            <p className="mb-6">Our customer support team is ready to help you with any additional questions you may have.</p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <a
                href="tel:+1-800-918-3039"
                className="flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-6 rounded-lg hover:bg-gray-100 transition-colors"
              >
                <span>Call Us: 1-800-918-3039</span>
              </a>
              <a
                href="mailto:support@faresmatch.com"
                className="flex items-center justify-center border-2 border-white text-white font-semibold py-3 px-6 rounded-lg hover:bg-white hover:text-blue-600 transition-colors"
              >
                <span>Email Us</span>
              </a>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}