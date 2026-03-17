import { Plane } from "lucide-react";

const RecommendedTrips = () => {
  const trips = [
    { name: "Houston", price: "$329", from: "New York", duration: "3h 45m" },
    { name: "Phoenix", price: "$289", from: "Chicago", duration: "4h 15m" },
    { name: "Boston", price: "$249", from: "Miami", duration: "3h 20m" },
    { name: "Dallas", price: "$349", from: "Los Angeles", duration: "3h 10m" },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Recommended For You</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trips.map((trip, index) => (
            <div key={index} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex items-center justify-between mb-4">
                <h3 className="font-bold text-lg">{trip.name}</h3>
                <Plane className="w-5 h-5 text-blue-600" />
              </div>
              <p className="text-gray-600 mb-2">From: {trip.from}</p>
              <p className="text-gray-600 text-sm mb-4">Flight: {trip.duration}</p>
              <div className="flex items-center justify-between">
                <span className="text-2xl font-bold text-orange-500">{trip.price}</span>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecommendedTrips;