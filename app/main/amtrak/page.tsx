import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { TrainFront, Calendar, Users, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function AmtrakPage() {
  // Mock data for Amtrak results
  const mockTrains = [
    {
      id: "1",
      route: "Northeast Regional",
      departure: "New York, NY",
      arrival: "Boston, MA",
      departureTime: "08:30 AM",
      arrivalTime: "12:45 PM",
      duration: "4h 15m",
      price: 99,
      class: "Economy",
      image: "/placeholder-train.jpg",
    },
    {
      id: "2",
      route: "Coast Starlight",
      departure: "Seattle, WA",
      arrival: "Los Angeles, CA",
      departureTime: "11:30 AM",
      arrivalTime: "06:47 AM (next day)",
      duration: "33h 17m",
      price: 149,
      class: "Economy",
      image: "/placeholder-train.jpg",
    },
    {
      id: "3",
      route: "California Zephyr",
      departure: "Chicago, IL",
      arrival: "San Francisco, CA",
      departureTime: "09:20 AM",
      arrivalTime: "07:22 AM (next day)",
      duration: "52h 2m",
      price: 199,
      class: "Economy",
      image: "/placeholder-train.jpg",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Find Amtrak Train Tickets</h1>

          {/* Search Form */}
          <div className="bg-white rounded-lg shadow-md p-6 mb-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">From</label>
                <input
                  type="text"
                  placeholder="City or station"
                  className="w-full p-2 border rounded"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">To</label>
                <input
                  type="text"
                  placeholder="City or station"
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
                <label className="text-sm font-medium">Passengers</label>
                <div className="flex items-center p-2 border rounded">
                  <Users className="w-4 h-4 mr-2" />
                  <span>1 Passenger</span>
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Class</label>
                <select className="w-full p-2 border rounded">
                  <option>Economy</option>
                  <option>Business</option>
                  <option>Sleeping Car</option>
                </select>
              </div>
            </div>

            <div className="mt-6 flex flex-col sm:flex-row gap-3">
              <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
                Search Trains
              </Button>
              <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
                Call for Phone Deals
              </Button>
            </div>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {mockTrains.map((train) => (
              <div key={train.id} className="bg-white rounded-lg shadow p-6">
                <div className="flex flex-col md:flex-row justify-between">
                  <div className="flex-1">
                    <div className="flex items-center mb-2">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                        <TrainFront className="w-5 h-5 text-blue-600" />
                      </div>
                      <div>
                        <h3 className="font-bold">{train.route}</h3>
                        <p className="text-sm text-gray-600">Amtrak</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      <div className="text-center">
                        <p className="text-xl font-bold">{train.departureTime}</p>
                        <p className="text-sm text-gray-600">{train.departure}</p>
                      </div>

                      <div className="flex flex-col items-center mx-2">
                        <div className="w-16 h-px bg-gray-300"></div>
                        <div className="flex items-center mt-1 text-sm text-gray-600">
                          <Clock className="w-4 h-4 mr-1" />
                          {train.duration}
                        </div>
                      </div>

                      <div className="text-center">
                        <p className="text-xl font-bold">{train.arrivalTime}</p>
                        <p className="text-sm text-gray-600">{train.arrival}</p>
                      </div>
                    </div>

                    <div className="mt-4 flex items-center text-sm">
                      <span>Class: {train.class}</span>
                    </div>
                  </div>

                  <div className="mt-4 md:mt-0 md:ml-4 text-center">
                    <div className="text-2xl font-bold text-blue-600">${train.price}</div>
                    <p className="text-sm text-gray-600">per person</p>
                    <div className="flex flex-col space-y-2 mt-4">
                      <Button className="w-full bg-blue-600 hover:bg-blue-700">View Deal</Button>
                      <Button className="w-full">Book Now</Button>
                    </div>
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