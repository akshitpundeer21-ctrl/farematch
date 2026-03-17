import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import HotelSearchForm from "@/components/search/hotel-search-form";
import HotelResults from "@/components/results/hotel-results";

export default function HotelsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Hotels & Accommodations</h1>
          <HotelSearchForm />
          <div className="mt-8">
            <HotelResults />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}