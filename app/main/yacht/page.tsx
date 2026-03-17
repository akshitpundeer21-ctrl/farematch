import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Sailboat, Calendar, Users, MapPin, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SailboatPage() {
  // Mock data for Sailboat results
  const mockSailboats = [
    {
      id: "1",
      name: "Ocean Dream",
      type: "Crewed Sailboat",
      capacity: 8,
      location: "Caribbean",
      duration: 7,
      pricePerDay: 2500,
      image: "/placeholder-Sailboat.jpg",
      rating: 4.9,
      reviewCount: 42,
    },
    {
      id: "2",
      name: "Sunrise Paradise",
      type: "Bareboat Charter",
      capacity: 6,
      location: "Mediterranean",
      duration: 7,
      pricePerDay: 1800,
      image: "/placeholder-Sailboat.jpg",
      rating: 4.7,
      reviewCount: 28,
    },
    {
      id: "3",
      name: "Luxury Escape",
      type: "Motor Sailboat",
      capacity: 10,
      location: "South Pacific",
      duration: 10,
      pricePerDay: 4200,
      image: "/placeholder-Sailboat.jpg",
      rating: 4.8,
      reviewCount: 19,
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Sailboat Charters</h1>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">Location</label>
                <input
                  type="text"
                  placeholder="Caribbean"
                  className="w-full p-2 border rounded"
                />
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
              <div className="space-y-2">
                <label className="text-sm font-medium">Capacity</label>
                <select className="w-full p-2 border rounded">
                  <option>Any Size</option>
                  <option>2-4 people</option>
                  <option>5-8 people</option>
                  <option>9-12 people</option>
                  <option>13+ people</option>
                </select>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Sailboat Type</label>
                <select className="w-full p-2 border rounded">
                  <option>Any Type</option>
                  <option>Bareboat Charter</option>
                  <option>Crewed Sailboat</option>
                  <option>Motor Sailboat</option>
                  <option>Sailing Sailboat</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Search Sailboats
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
                Call for Phone Deals
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {mockSailboats.map((Sailboat) => (
              <div key={Sailboat.id} className="bg-white rounded-lg shadow overflow-hidden">
                <img
                  src={Sailboat.image}
                  alt={Sailboat.name}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex justify-between">
                    <div>
                      <h3 className="text-xl font-bold">{Sailboat.name}</h3>
                      <p className="text-gray-600">{Sailboat.type}</p>
                    </div>
                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-600">${Sailboat.pricePerDay}</div>
                      <p className="text-sm text-gray-600">per day</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-gray-600">
                    <Users className="w-4 h-4 mr-1" />
                    <span>Up to {Sailboat.capacity} guests</span>
                  </div>
                  <div className="mt-1 flex items-center text-gray-600">
                    <MapPin className="w-4 h-4 mr-1" />
                    <span>{Sailboat.location}</span>
                  </div>
                  <div className="mt-1 flex items-center text-gray-600">
                    <Calendar className="w-4 h-4 mr-1" />
                    <span>{Sailboat.duration} days</span>
                  </div>

                  <div className="mt-4 flex items-center">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm">{Sailboat.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({Sailboat.reviewCount})</span>
                  </div>

                  <div className="mt-6">
                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Charter
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