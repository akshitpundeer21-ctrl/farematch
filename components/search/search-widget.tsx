"use client";

import { useState } from "react";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CalendarIcon, Users, Plane, Building, Car } from "lucide-react";
import { format } from "date-fns";

const SearchWidget = () => {
  const [tab, setTab] = useState("flight");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date());
  const [passengers, setPassengers] = useState(1);

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 -mt-16 relative z-10 max-w-6xl mx-auto">
      <Tabs value={tab} onValueChange={setTab} className="w-full">
        <TabsList className="grid w-full grid-cols-4 mb-6">
          <TabsTrigger value="flight" className="flex items-center">
            <Plane className="w-4 h-4 mr-2" />
            Flight
          </TabsTrigger>
          <TabsTrigger value="hotel" className="flex items-center">
            <Building className="w-4 h-4 mr-2" />
            Hotel
          </TabsTrigger>
          <TabsTrigger value="car" className="flex items-center">
            <Car className="w-4 h-4 mr-2" />
            Car Rental
          </TabsTrigger>
          <TabsTrigger value="package" className="flex items-center">
            <Plane className="w-4 h-4 mr-2" />
            Packages
          </TabsTrigger>
        </TabsList>

        {tab === "flight" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">From</label>
              <Input
                placeholder="City or airport"
                value={from}
                onChange={(e) => setFrom(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">To</label>
              <Input
                placeholder="City or airport"
                value={to}
                onChange={(e) => setTo(e.target.value)}
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Departure</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                onClick={() => setDepartureDate(new Date())}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Return</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
                onClick={() => setReturnDate(new Date())}
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Passengers</label>
              <Button
                variant="outline"
                className="w-full justify-between"
                onClick={() => setPassengers(passengers + 1)}
              >
                <Users className="w-4 h-4" />
                <span>{passengers} Passenger{passengers > 1 ? "s" : ""}</span>
              </Button>
            </div>
          </div>
        )}

        {tab === "hotel" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Destination</label>
              <Input placeholder="City or hotel" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-in</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Check-out</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Guests & Rooms</label>
              <Button variant="outline" className="w-full">
                {passengers} Guest{passengers > 1 ? "s" : ""}, 1 Room
              </Button>
            </div>
          </div>
        )}

        {tab === "car" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Location</label>
              <Input placeholder="City or airport" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Drop-off Location</label>
              <Input placeholder="Same as pick-up" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Pick-up Date</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Drop-off Date</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </div>
          </div>
        )}

        {tab === "package" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="space-y-2">
              <label className="text-sm font-medium">Destination</label>
              <Input placeholder="Where to?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Departure</label>
              <Input placeholder="From where?" />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Travel Dates</label>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick dates</span>}
              </Button>
            </div>
            <div className="space-y-2">
              <label className="text-sm font-medium">Travelers</label>
              <Button variant="outline" className="w-full">
                {passengers} Traveler{passengers > 1 ? "s" : ""}
              </Button>
            </div>
          </div>
        )}

        <div className="mt-6 flex flex-col sm:flex-row gap-3">
          <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
            Search {tab === "flight" && "Flights"}
            {tab === "hotel" && "Hotels"}
            {tab === "car" && "Cars"}
            {tab === "package" && "Packages"}
          </Button>
          <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
            Call for Phone Deals
          </Button>
        </div>
      </Tabs>
    </div>
  );
};

export default SearchWidget;