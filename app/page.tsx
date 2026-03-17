import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import TrustBar from "@/components/shared/trust-bar";
import SearchWidget from "@/components/search/search-widget";
import DealsCarousel from "@/components/deals/deals-carousel";
import TrendingDestinations from "@/components/destinations/trending-destinations";
import RecommendedTrips from "@/components/destinations/recommended-trips";
import WhyChoose from "@/components/shared/why-choose";
import HowItWorks from "@/components/shared/how-it-works";
import FAQ from "@/components/shared/faq";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <TrustBar />

      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-orange-500 text-white py-24">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Your Trip. Your Fare. Your Match.
          </h1>
          <p className="text-xl md:text-2xl mb-10 max-w-3xl mx-auto">
            Find the best deals on flights, hotels, car rentals, and vacation packages all in one place.
          </p>
        </div>
      </section>

      <SearchWidget />

      <main>
        <DealsCarousel />
        <TrendingDestinations />
        <RecommendedTrips />
        <WhyChoose />
        <HowItWorks />
        <FAQ />
      </main>

      <Footer />
    </div>
  );
}