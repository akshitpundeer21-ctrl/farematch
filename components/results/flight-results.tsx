import { mockFlights } from "@/lib/mock-data";
import { mockFilters } from "@/lib/mock-data";
import { Plane, Clock, MapPin, User, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const FlightResults = () => {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
      {/* Filters Sidebar */}
      <div className="lg:col-span-1 space-y-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Price Range</h3>
          <div className="space-y-4">
            <div className="flex justify-between text-sm">
              <span>$100</span>
              <span>$1000</span>
            </div>
            <div className="h-2 bg-gray-200 rounded-full">
              <div className="h-2 bg-blue-600 rounded-full w-3/4"></div>
            </div>
            <div className="flex justify-between text-sm">
              <span>$250</span>
              <span>$750</span>
            </div>
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Stops</h3>
          <div className="space-y-2">
            {mockFilters.stops.map((stop, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`stop-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`stop-${index}`} className="text-sm">
                    {stop.label}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({stop.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Airlines</h3>
          <div className="space-y-2 max-h-60 overflow-y-auto">
            {mockFilters.airlines.map((airline, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`airline-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`airline-${index}`} className="text-sm">
                    {airline.name}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({airline.count})</span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-bold text-lg mb-4">Departure Time</h3>
          <div className="space-y-2">
            {mockFilters.times.map((time, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id={`time-${index}`}
                    className="mr-2 h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    defaultChecked
                  />
                  <label htmlFor={`time-${index}`} className="text-sm">
                    {time.label}
                  </label>
                </div>
                <span className="text-sm text-gray-500">({time.count})</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="lg:col-span-3">
        <div className="flex justify-between items-center mb-4">
          <p className="text-gray-600">
            {mockFlights.length} flights found
          </p>
          <div className="flex space-x-2">
            <select className="border rounded p-2">
              <option>Sort by: Cheapest</option>
              <option>Sort by: Fastest</option>
              <option>Sort by: Best</option>
              <option>Sort by: Earliest</option>
              <option>Sort by: Latest</option>
            </select>
          </div>
        </div>

        <div className="space-y-4">
          {mockFlights.map((flight) => (
            <div key={flight.id} className="bg-white rounded-lg shadow p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex-1">
                  <div className="flex items-center mb-2">
                    <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                      <Plane className="w-5 h-5 text-blue-600" />
                    </div>
                    <div>
                      <h3 className="font-bold">{flight.airline}</h3>
                      <p className="text-sm text-gray-600">{flight.flightNumber}</p>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mt-4">
                    <div className="text-center">
                      <p className="text-xl font-bold">{flight.departureTime}</p>
                      <p className="text-sm text-gray-600">{flight.departureAirport}</p>
                    </div>

                    <div className="flex flex-col items-center mx-2">
                      <div className="w-16 h-px bg-gray-300"></div>
                      <div className="flex items-center mt-1 text-sm text-gray-600">
                        <Clock className="w-4 h-4 mr-1" />
                        {flight.duration}
                      </div>
                      <p className="text-xs text-gray-500">{flight.stops === 0 ? 'Nonstop' : `${flight.stops} stop${flight.stops > 1 ? 's' : ''}`}</p>
                    </div>

                    <div className="text-center">
                      <p className="text-xl font-bold">{flight.arrivalTime}</p>
                      <p className="text-sm text-gray-600">{flight.arrivalAirport}</p>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center text-sm">
                    <User className="w-4 h-4 mr-1" />
                    <span className="mr-4">{flight.aircraft}</span>
                    <Star className="w-4 h-4 mr-1 text-yellow-500" />
                    <span>Amenities: {flight.amenities.join(', ') || 'None'}</span>
                  </div>
                </div>

                <div className="mt-4 md:mt-0 md:ml-4 text-center">
                  <div className="text-2xl font-bold text-blue-600">${flight.price}</div>
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
    </div>
  );
};

export default FlightResults;