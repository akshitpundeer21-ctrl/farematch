import { mockHotels, mockHotelFilters } from "@/lib/hotel-mock-data";
import { Star, MapPin, Wifi, Car, Utensils, Waves, Dumbbell, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HotelResults = () => {
  // Function to map amenity names to icons
  const getAmenityIcon = (amenity: string) => {
    switch (amenity.toLowerCase()) {
      case "wifi": return <Wifi className="w-4 h-4" />;
      case "parking": return <Car className="w-4 h-4" />;
      case "restaurant": return <Utensils className="w-4 h-4" />;
      case "beach access": return <Waves className="w-4 h-4" />;
      case "gym": return <Dumbbell className="w-4 h-4" />;
      case "spa": return <Sparkles className="w-4 h-4" />;
      default: return <Star className="w-4 h-4" />;
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
              <span>${mockHotelFilters.price.min}</span>
              <span>${mockHotelFilters.price.max}</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full" style={{ width: '70%' }}></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>${mockHotelFilters.price.currentMin}</span>
              <span>${mockHotelFilters.price.currentMax}</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Star Rating</h3>
          <div className="space-y-2">
            {mockHotelFilters.starRating.map((rating, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`star-${rating.stars}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <div className="flex">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`w-4 h-4 ${i < rating.stars ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                </div>
                <span className="text-sm text-gray-500">({rating.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Guest Rating</h3>
          <div className="space-y-2">
            {mockHotelFilters.guestRating.map((rating, index) => (
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

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Amenities</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {mockHotelFilters.amenities.map((amenity, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`amenity-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`amenity-${index}`} className="text-sm flex items-center">
                    {getAmenityIcon(amenity.name)}
                    <span className="ml-2">{amenity.name}</span>
                  </label>
                </div>
                <span className="text-sm text-gray-500">({amenity.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Property Type</h3>
          <div className="space-y-2">
            {mockHotelFilters.propertyType.map((type, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`type-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`type-${index}`} className="text-sm">
                    {type.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({type.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4 gap-4">
          <p className="text-gray-600">
            {mockHotels.length} properties found
          </p>
          <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
            <select className="border rounded p-2 w-full sm:w-auto">
              <option>Sort by: Recommended</option>
              <option>Sort by: Price (Low to High)</option>
              <option>Sort by: Price (High to Low)</option>
              <option>Sort by: Rating</option>
              <option>Sort by: Distance</option>
            </select>
            <div className="flex space-x-2">
              <Button variant="outline" size="sm">List</Button>
              <Button variant="outline" size="sm">Map</Button>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          {mockHotels.map((hotel) => (
            <div key={hotel.id} className="bg-white rounded-lg shadow overflow-hidden">
              <div className="flex flex-col md:flex-row">
                <div className="md:w-1/3">
                  <img
                    src={hotel.image}
                    alt={hotel.name}
                    className="w-full h-48 md:h-full object-cover"
                  />
                </div>
                <div className="p-6 flex-1">
                  <div className="flex flex-col md:flex-row justify-between">
                    <div>
                      <div className="flex items-center">
                        <h3 className="text-xl font-bold mr-3">{hotel.name}</h3>
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className={`w-4 h-4 ${i < Math.floor(hotel.rating) ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'}`}
                            />
                          ))}
                        </div>
                        <span className="ml-2 text-sm text-gray-600">({hotel.reviewCount} reviews)</span>
                      </div>
                      <div className="flex items-center mt-2 text-gray-600">
                        <MapPin className="w-4 h-4 mr-1" />
                        <span>{hotel.location}</span>
                        <span className="mx-2">•</span>
                        <span>{hotel.distanceFromCenter} from center</span>
                      </div>
                      <p className="mt-3 text-gray-700">{hotel.description}</p>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {hotel.amenities.map((amenity, index) => (
                          <span
                            key={index}
                            className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800"
                          >
                            {getAmenityIcon(amenity)}
                            <span className="ml-1">{amenity}</span>
                          </span>
                        ))}
                      </div>
                    </div>
                    <div className="mt-4 md:mt-0 text-center md:text-right">
                      <div className="text-2xl font-bold text-blue-600">${hotel.pricePerNight}</div>
                      <p className="text-sm text-gray-600">per night</p>
                      <div className="mt-4">
                        <p className="text-sm text-gray-500 line-through">${hotel.originalPrice}</p>
                        <p className="text-sm text-green-600">Save ${hotel.originalPrice - hotel.pricePerNight}</p>
                      </div>
                      <div className="mt-4">
                        <Button className="w-full md:w-auto bg-blue-600 hover:bg-blue-700">View Deal</Button>
                        <Button className="w-full md:w-auto mt-2">Book Now</Button>
                      </div>
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

export default HotelResults;