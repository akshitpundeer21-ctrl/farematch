import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import FlightSearchForm from "@/components/search/flight-search-form";
import FlightResults from "@/components/results/flight-results";

export default function FlightsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Cheap Flights</h1>
          <FlightSearchForm />
          <div className="mt-8">
            <FlightResults />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}