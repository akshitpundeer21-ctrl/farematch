import { BadgeCheck, MapPin, Headset, Gift } from "lucide-react";

const WhyChoose = () => {
  const features = [
    {
      icon: BadgeCheck,
      title: "Attractive Deals",
      description: "Access exclusive discounts and deals on all travel bookings"
    },
    {
      icon: MapPin,
      title: "Personalized Plans",
      description: "Get travel recommendations tailored to your preferences"
    },
    {
      icon: Headset,
      title: "24/7 Support",
      description: "Round-the-clock customer support for all your travel needs"
    },
    {
      icon: Gift,
      title: "Flexible Policies",
      description: "Flexible booking and cancellation options for your peace of mind"
    }
  ];

  return (
    <div className="py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-12">Why Choose FaresMatch?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon className="w-8 h-8 text-blue-600" />
              </div>
              <h3 className="font-bold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;