import { mockCars, mockCarFilters } from "@/lib/car-mock-data";
import { Car, Users, Briefcase, Gauge, Star, Fuel } from "lucide-react";
import { Button } from "@/components/ui/button";

const CarResults = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>${mockCarFilters.price.min}</span>
              <span>${mockCarFilters.price.max}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '60%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>${mockCarFilters.price.currentMin}</span>
              <span>${mockCarFilters.price.currentMax}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Car Type</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {mockCarFilters.carType.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`car-type-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`car-type-${index}`} className="text-sm">
                    {type.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({type.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Supplier</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {mockCarFilters.supplier.map((supplier, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`supplier-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`supplier-${index}`} className="text-sm">
                    {supplier.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({supplier.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Fuel Policy</h3>
          <div className="space-y-2">
            {mockCarFilters.fuelPolicy.map((policy, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`fuel-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`fuel-${index}`} className="text-sm flex items-center">
                    <Fuel className="w-4 h-4 mr-2" />
                    {policy.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({policy.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Transmission</h3>
          <div className="space-y-2">
            {mockCarFilters.transmission.map((trans, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`trans-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`trans-${index}`} className="text-sm">
                    {trans.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({trans.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <p className="text-gray-600">
            {mockCars.length} cars found
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select className="border rounded p-2 w-full sm:w-auto">
              <option>Sort by: Recommended</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Size</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {mockCars.map((car) => (
            <div key={car.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="p-6">
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3 mb-4 md:mb-0 md:mr-4">
                    <img
                      src={car.image}
                      alt={car.name}
                      className="w-full h-40 object-cover rounded-lg"
                    />
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between">
                      <div>
                        <div className="flex items-center">
                          <h3 className="text-xl font-bold">{car.name}</h3>
                          <span className="ml-2 text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                            {car.provider}
                          </span>
                        </div>
                        <p className="text-gray-600">{car.category}</p>
                      </div>
                      <div className="text-right">
                        <div className="text-2xl font-bold text-blue-600">${car.pricePerDay}</div>
                        <p className="text-sm text-gray-600">per day</p>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-4">
                      <div className="flex items-center">
                        <Users className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm">{car.seats} seats</span>
                      </div>
                      <div className="flex items-center">
                        <Briefcase className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm">{car.bags} bags</span>
                      </div>
                      <div className="flex items-center">
                        <Gauge className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm">{car.transmission}</span>
                      </div>
                      <div className="flex items-center">
                        <Fuel className="w-4 h-4 text-gray-500 mr-1" />
                        <span className="text-sm">{car.fuelPolicy}</span>
                      </div>
                    </div>

                    <div className="mt-4 flex flex-wrap gap-2">
                      {car.features.map((feature, index) => (
                        <span
                          key={index}
                          className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>

                    <div className="mt-4 flex items-center">
                      <div className="flex items-center mr-4">
                        <Star className="w-4 h-4 text-yellow-400 fill-yellow-400 mr-1" />
                        <span className="text-sm">{car.rating}</span>
                        <span className="text-sm text-gray-500 ml-1">({car.reviewCount})</span>
                      </div>
                    </div>

                    <div className="mt-6 flex space-x-3">
                      <Button className="flex-1 bg-blue-600 hover:bg-blue-700">
                        View Deal
                      </Button>
                      <Button className="flex-1">
                        Book Now
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CarResults;