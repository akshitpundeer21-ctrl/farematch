import { mockPackages, mockPackageFilters } from "@/lib/package-mock-data";
import { Plane, Building, Car, Utensils, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const PackageResults = () => {
  // Function to map inclusions to icons
  const getInclusionIcon = (inclusion: string) => {
    switch (inclusion.toLowerCase()) {
      case "flight":
        return <Plane className="w-4 h-4" />;
      case "hotel":
      case "hotels":
        return <Building className="w-4 h-4" />;
      case "car rental":
        return <Car className="w-4 h-4" />;
      case "breakfast":
      case "all meals":
        return <Utensils className="w-4 h-4" />;
      default:
        return <Star className="w-4 h-4" />;
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>${mockPackageFilters.price.min}</span>
              <span>${mockPackageFilters.price.max}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>${mockPackageFilters.price.currentMin}</span>
              <span>${mockPackageFilters.price.currentMax}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Duration</h3>
          <div className="space-y-2">
            {mockPackageFilters.duration.map((duration, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`duration-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`duration-${index}`} className="text-sm">
                    {duration.label}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({duration.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Destination Type</h3>
          <div className="space-y-2">
            {mockPackageFilters.destinationType.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`dest-type-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`dest-type-${index}`} className="text-sm">
                    {type.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({type.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Rating</h3>
          <div className="space-y-2">
            {mockPackageFilters.rating.map((rating, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`rating-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`rating-${index}`} className="text-sm">
                    {rating.label}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({rating.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <p className="text-gray-600">
            {mockPackages.length} packages found
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select className="border rounded p-2 w-full sm:w-auto">
              <option>Sort by: Recommended</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Duration</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockPackages.map((pkg) => (
            <div key={pkg.id} className="bg-white rounded-lg shadow overflow-hidden">
              <img
                src={pkg.image}
                alt={pkg.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex justify-between">
                  <div>
                    <h3 className="text-xl font-bold">{pkg.name}</h3>
                    <p className="text-gray-600">{pkg.destination} • {pkg.duration} days</p>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-blue-600">${pkg.pricePerPerson}</div>
                    <p className="text-sm text-gray-600">per person</p>
                  </div>
                </div>

                <p className="mt-2 text-gray-700">{pkg.description}</p>

                <div className="mt-4 flex items-center">
                  <div className="flex items-center mr-4">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                    <span className="text-sm">{pkg.rating}</span>
                    <span className="text-sm text-gray-500 ml-1">({pkg.reviewCount})</span>
                  </div>
                  <span className="text-sm text-gray-500">by {pkg.provider}</span>
                </div>

                <div className="mt-4">
                  <h4 className="font-medium mb-2">Inclusions:</h4>
                  <div className="flex flex-wrap gap-2">
                    {pkg.inclusions.map((inclusion, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800"
                      >
                        {getInclusionIcon(inclusion)}
                        <span className="ml-1">{inclusion}</span>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="mt-4 flex items-center justify-between">
                  <p className="text-sm text-gray-500 line-through">${pkg.originalPrice}</p>
                  <p className="text-sm text-green-600">Save ${(pkg.originalPrice - pkg.pricePerPerson).toLocaleString()}</p>
                </div>

                <div className="mt-6">
                  <Button className="w-full bg-blue-600 hover:bg-blue-700">
                    View Package
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PackageResults;