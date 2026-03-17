import { Plane } from "lucide-react";

const TrustBar = () => {
  const airlines = [
    { name: "American", logo: "A" },
    { name: "United", logo: "U" },
    { name: "Frontier", logo: "F" },
    { name: "JetBlue", logo: "J" },
    { name: "Spirit", logo: "S" },
    { name: "Alaska", logo: "A" },
    { name: "Turkish", logo: "T" },
    { name: "Delta", logo: "D" },
    { name: "Emirates", logo: "E" },
  ];

  return (
    <div className="bg-gray-100 py-4">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center mb-4 md:mb-0">
            <Plane className="w-5 h-5 text-blue-600 mr-2" />
            <span className="font-semibold">Search 500+ airlines at once</span>
          </div>
          <div className="flex space-x-6 overflow-x-auto pb-2">
            {airlines.map((airline) => (
              <div key={airline.name} className="flex items-center whitespace-nowrap">
                <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center mr-2">
                  <span className="text-blue-800 font-bold text-sm">{airline.logo}</span>
                </div>
                <span className="text-gray-700">{airline.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrustBar;