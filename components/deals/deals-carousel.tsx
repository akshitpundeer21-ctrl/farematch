import { Car, Building, Ship, Sailboat } from "lucide-react";

const DealsCarousel = () => {
  const deals = [
    {
      title: "Car Rental",
      description: "Up to $40 off",
      icon: Car,
      color: "bg-blue-100 text-blue-600",
    },
    {
      title: "Hotels",
      description: "Up to $50 off",
      icon: Building,
      color: "bg-green-100 text-green-600",
    },
    {
      title: "Cruise",
      description: "Up to $12 off",
      icon: Ship,
      color: "bg-purple-100 text-purple-600",
    },
    {
      title: "Sailboat",
      description: "Up to $20 off",
      icon: Sailboat,
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Featured Deals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {deals.map((deal, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-md p-6 text-center hover:shadow-lg transition-shadow"
            >
              <div className={`w-12 h-12 rounded-full ${deal.color} flex items-center justify-center mx-auto mb-4`}>
                <deal.icon className="w-6 h-6" />
              </div>
              <h3 className="font-bold text-lg mb-2">{deal.title}</h3>
              <p className="text-orange-500 font-semibold text-xl">{deal.description}</p>
              <button className="mt-4 text-blue-600 hover:text-blue-800 font-medium">
                View Deal →
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DealsCarousel;