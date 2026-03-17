import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import CarSearchForm from "@/components/search/car-search-form";
import CarResults from "@/components/results/car-results";

export default function CarRentalPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Rental Cars</h1>
          <CarSearchForm />
          <div className="mt-8">
            <CarResults />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}