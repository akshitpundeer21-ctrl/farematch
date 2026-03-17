import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Ship, Calendar, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function CruisesPage() {
  // Mock data for cruise results
  const mockCruises = [
    {
      id: "1",
      name: "Caribbean Paradise",
      ship: "Ocean Voyager",
      duration: 7,
      departurePort: "Miami, FL",
      destinations: ["Nassau", "Perfect Day at CocoCay", "George Town"],
      pricePerPerson: 899,
      image: "/placeholder-cruise.jpg",
      rating: 4.6,
      reviewCount: 240,
    },
    {
      id: "2",
      name: "Alaska Discovery",
      ship: "Northern Explorer",
      duration: 7,
      departurePort: "Seattle, WA",
      destinations: ["Juneau", "Skagway", "Glacier Bay", "Ketchikan"],
      pricePerPerson: 1299,
      image: "/placeholder-cruise.jpg",
      rating: 4.8,
      reviewCount: 187,
    },
    {
      id: "3",
      name: "Mediterranean Journey",
      ship: "Sunset Serenade",
      duration: 10,
      departurePort: "Barcelona, Spain",
      destinations: ["Nice", "Florence", "Athens", "Santorini", "Rome"],
      pricePerPerson: 2199,
      image: "/placeholder-cruise.jpg",
      rating: 4.7,
      reviewCount: 156,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Cruise Deals</h1>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Departure Port</label>
                <input
                  type="text"
                  placeholder="Miami, FL"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Destination</label>
                <input
                  type="text"
                  placeholder="Caribbean"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Departure Date</label>
                <div className="flex items-center p-2 border rounded">
                  <Calendar className="w-4 h-4 mr-2" />
                  <span>Jan 15, 2024</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Duration</label>
                <select className="w-full p-2 border rounded">
                  <option>Any Duration</option>
                  <option>3-5 days</option>
                  <option>6-8 days</option>
                  <option>9-14 days</option>
                  <option>15+ days</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Search Cruises
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
                Call for Phone Deals
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockCruises.map((cruise) => (
              <div key={cruise.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={cruise.image}
                  alt={cruise.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{cruise.name}</h3>
                      <p className="text-gray-600">{cruise.ship}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">${cruise.pricePerPerson}</div>
                      <p className="text-sm text-gray-600">per person</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{cruise.duration} days</span>
                  </div>
                  <div className="mt-1 flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>Departs: {cruise.departurePort}</span>
                  </div>

                  <div className="mt-4">
                    <h4 className="font-medium mb-1">Destinations:</h4>
                    <p className="text-sm text-gray-600">{cruise.destinations.join(", ")}</p>
                  </div>

                  <div className="mt-4 flex items-center">
                    <div className="flex items-center mr-4">
                      <span className="w-4 h-4 rounded-full bg-yellow-400 mr-1"></span>
                      <span className="text-sm">{cruise.rating}</span>
                      <span className="text-sm text-gray-500 ml-1">({cruise.reviewCount})</span>
                    </div>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Deal
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}