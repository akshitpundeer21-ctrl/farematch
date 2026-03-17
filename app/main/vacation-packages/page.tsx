import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import PackageSearchForm from "@/components/search/package-search-form";
import PackageResults from "@/components/results/package-results";

export default function VacationPackagesPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Vacation Packages</h1>
          <PackageSearchForm />
          <div className="mt-8">
            <PackageResults />
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}