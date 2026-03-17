import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Plane, Building, Car, Ship, Sailboat, TrainFront, Clock, Percent } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DealsPage() {
  // Mock data for deals
  const deals = [
    {
      id: "1",
      type: "flight",
      title: "Save up to 30% on International Flights",
      description: "Book now and save on select routes to Europe and Asia",
      discount: "30% off",
      expiration: "Jan 31, 2024",
      image: "/placeholder-deal.jpg",
    },
    {
      id: "2",
      type: "hotel",
      title: "Weekend Getaway Special",
      description: "Save up to $200 on weekend hotel bookings",
      discount: "$200 off",
      expiration: "Dec 31, 2023",
      image: "/placeholder-deal.jpg",
    },
    {
      id: "3",
      type: "car",
      title: "Car Rental Savings",
      description: "Get an extra day free on weekly rentals",
      discount: "1 day free",
      expiration: "Feb 28, 2024",
      image: "/placeholder-deal.jpg",
    },
    {
      id: "4",
      type: "cruise",
      title: "Early Bird Cruise Special",
      description: "Save up to $500 per person on select cruises",
      discount: "$500 off",
      expiration: "Mar 15, 2024",
      image: "/placeholder-deal.jpg",
    },
    {
      id: "5",
      type: "package",
      title: "All-Inclusive Vacation Package",
      description: "Book a package and save on flights, hotels, and more",
      discount: "Save up to $800",
      expiration: "Apr 30, 2024",
      image: "/placeholder-deal.jpg",
    },
    {
      id: "6",
      type: "train",
      title: "Amtrak Winter Special",
      description: "Save on select routes throughout the winter season",
      discount: "20% off",
      expiration: "Feb 28, 2024",
      image: "/placeholder-deal.jpg",
    },
  ];

  // Get icon function
  const getIcon = (type: string) => {
    switch (type) {
      case "flight": return Plane;
      case "hotel": return Building;
      case "car": return Car;
      case "cruise": return Ship;
      case "Sailboat": return Sailboat;
      case "train": return TrainFront;
      default: return Plane;
    }
  };

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Current Deals & Promotions</h1>

          <div className="bg-gradient-to-r from-blue-500 to-orange-500 text-white rounded-lg p-6 mb-8 text-center">
            <h2 className="text-2xl font-bold mb-2">Flash Sale: Save up to 50% on select destinations!</h2>
            <p className="mb-4">Limited time offer. Ends in 3 days 14 hours 22 minutes</p>
            <div className="flex justify-center space-x-4 text-center">
              <div className="bg-blue-600 bg-opacity-50 rounded-lg p-3">
                <div className="text-2xl font-bold">3</div>
                <div>Days</div>
              </div>
              <div className="bg-blue-600 bg-opacity-50 rounded-lg p-3">
                <div className="text-2xl font-bold">14</div>
                <div>Hours</div>
              </div>
              <div className="bg-blue-600 bg-opacity-50 rounded-lg p-3">
                <div className="text-2xl font-bold">22</div>
                <div>Minutes</div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {deals.map((deal) => {
              const Icon = getIcon(deal.type);
              return (
                <div key={deal.id} className="bg-white rounded-lg shadow overflow-hidden">
                  <img
                    src={deal.image}
                    alt={deal.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center mb-2">
                      <div className="p-2 bg-blue-100 rounded-full mr-3">
                        <Icon className="w-5 h-5 text-blue-600" />
                      </div>
                      <div className="flex items-center bg-red-100 text-red-800 px-2 py-1 rounded-full text-sm">
                        <Percent className="w-4 h-4 mr-1" />
                        {deal.discount}
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-2">{deal.title}</h3>
                    <p className="text-gray-600 mb-4">{deal.description}</p>

                    <div className="flex items-center text-sm text-gray-500 mb-4">
                      <Clock className="w-4 h-4 mr-1" />
                      <span>Expires: {deal.expiration}</span>
                    </div>

                    <Button className="w-full bg-blue-600 hover:bg-blue-700">
                      View Deal
                    </Button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}