import { Search, Star, Plane } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: Search,
      title: "Search & Compare",
      description: "Find the best deals by comparing prices from hundreds of travel sites"
    },
    {
      icon: Star,
      title: "Select Your Deal",
      description: "Choose from a wide range of options that fit your budget and preferences"
    },
    {
      icon: Plane,
      title: "Book & Fly",
      description: "Complete your booking with confidence and enjoy your trip"
    }
  ];

  return (
    <div className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">How It Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <step.icon className="w-10 h-10 text-white" />
              </div>
              <h3 className="font-bold text-xl mb-3">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;