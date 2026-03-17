import Header from "@/components/shared/header";
import Footer from "@/components/shared/footer";
import { Plane, Calendar, MapPin, Clock, TrendingUp, Activity, Database } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function AviationDataPage() {
  // Mock data for flight status
  const flightStatus = [
    {
      id: "1",
      flightNumber: "AA1234",
      airline: "American Airlines",
      departure: "JFK",
      arrival: "LAX",
      scheduledDeparture: "08:30 AM",
      actualDeparture: "08:35 AM",
      scheduledArrival: "11:45 AM",
      actualArrival: "11:50 AM",
      status: "On Time",
      gate: "B12"
    },
    {
      id: "2",
      flightNumber: "DL5678",
      airline: "Delta Airlines",
      departure: "ORD",
      arrival: "SFO",
      scheduledDeparture: "09:15 AM",
      actualDeparture: "09:15 AM",
      scheduledArrival: "11:30 AM",
      actualArrival: "11:30 AM",
      status: "On Time",
      gate: "A5"
    },
    {
      id: "3",
      flightNumber: "UA9012",
      airline: "United Airlines",
      departure: "LGA",
      arrival: "MIA",
      scheduledDeparture: "10:00 AM",
      actualDeparture: "Delayed",
      scheduledArrival: "01:15 PM",
      actualArrival: "TBD",
      status: "Delayed",
      gate: "C8"
    }
  ];

  // Mock data for airport information
  const airports = [
    {
      code: "JFK",
      name: "John F. Kennedy International Airport",
      city: "New York",
      country: "USA",
      timezone: "EST",
      flights: 1242
    },
    {
      code: "LAX",
      name: "Los Angeles International Airport",
      city: "Los Angeles",
      country: "USA",
      timezone: "PST",
      flights: 1187
    },
    {
      code: "LHR",
      name: "London Heathrow Airport",
      city: "London",
      country: "UK",
      timezone: "GMT",
      flights: 1302
    }
  ];

  // Mock data for airline statistics
  const airlines = [
    {
      code: "AA",
      name: "American Airlines",
      flights: 6542,
      onTimeRate: "82.4%",
      satisfaction: "4.2/5"
    },
    {
      code: "DL",
      name: "Delta Airlines",
      flights: 5871,
      onTimeRate: "85.1%",
      satisfaction: "4.5/5"
    },
    {
      code: "UA",
      name: "United Airlines",
      flights: 4923,
      onTimeRate: "78.9%",
      satisfaction: "3.9/5"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />

      <main className="flex-grow py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-6">Aviation Data & Flight Status</h1>

          {/* Stats overview */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Flights Today</CardTitle>
                <Plane className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">18,421</div>
                <p className="text-xs text-muted-foreground">+3.2% from yesterday</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">On-Time Performance</CardTitle>
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">81.7%</div>
                <p className="text-xs text-muted-foreground">+1.2% from last week</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Flights</CardTitle>
                <Activity className="h-4 w-4 text-muted-foreground" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">5,128</div>
                <p className="text-xs text-muted-foreground">In the air now</p>
              </CardContent>
            </Card>
          </div>

          {/* Flight status tracker */}
          <div className="bg-white rounded-lg shadow p-6 mb-8">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-xl font-bold">Flight Status Tracker</h2>
              <div className="flex space-x-2">
                <input
                  type="text"
                  placeholder="Flight number (e.g., AA1234)"
                  className="p-2 border rounded"
                />
                <Button>Track Flight</Button>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flight</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airline</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Route</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Departure</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Arrival</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Gate</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {flightStatus.map((flight) => (
                    <tr key={flight.id}>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm font-medium text-gray-900">{flight.flightNumber}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{flight.airline}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{flight.departure} → {flight.arrival}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{flight.scheduledDeparture}</div>
                        <div className="text-sm text-gray-500">{flight.actualDeparture}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <div className="text-sm text-gray-900">{flight.scheduledArrival}</div>
                        <div className="text-sm text-gray-500">{flight.actualArrival}</div>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap">
                        <span className={`px-2 inline-flex text-xs leading-5 font-semibold rounded-full ${
                          flight.status === "On Time"
                            ? "bg-green-100 text-green-800"
                            : "bg-red-100 text-red-800"
                        }`}>
                          {flight.status}
                        </span>
                      </td>
                      <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                        {flight.gate}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Airports and Airlines */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Airports Table */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-6">Top Airports</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airport</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flights</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {airports.map((airport, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{airport.code}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airport.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airport.city}, {airport.country}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airport.flights}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Airlines Table */}
            <div className="bg-white rounded-lg shadow p-6">
              <h2 className="text-xl font-bold mb-6">Top Airlines</h2>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Code</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Airline</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Flights</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">On-Time</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Satisfaction</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {airlines.map((airline, index) => (
                      <tr key={index}>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm font-medium text-gray-900">{airline.code}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airline.name}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airline.flights}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airline.onTimeRate}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="text-sm text-gray-900">{airline.satisfaction}</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
}