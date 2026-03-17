"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Users, Plane } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";

const FlightSearchForm = () => {
  const [tripType, setTripType] = useState<"roundtrip" | "oneway" | "multicity">("roundtrip");
  const [from, setFrom] = useState("");
  const [to, setTo] = useState("");
  const [departureDate, setDepartureDate] = useState<Date | undefined>(new Date());
  const [returnDate, setReturnDate] = useState<Date | undefined>(new Date());
  const [passengers, setPassengers] = useState({ adults: 1, seniors: 0, children: 0, infantsSeat: 0, infantsLap: 0 });
  const [cabinClass, setCabinClass] = useState<"economy" | "premium" | "business" | "first">("economy");
  const [directFlightsOnly, setDirectFlightsOnly] = useState(false);

  const incrementPassenger = (type: keyof typeof passengers) => {
    setPassengers(prev => ({
      ...prev,
      [type]: prev[type] + 1
    }));
  };

  const decrementPassenger = (type: keyof typeof passengers) => {
    if (passengers[type] > 0) {
      setPassengers(prev => ({
        ...prev,
        [type]: prev[type] - 1
      }));
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex space-x-2 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${tripType === "roundtrip" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTripType("roundtrip")}
        >
          Round Trip
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${tripType === "oneway" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTripType("oneway")}
        >
          One Way
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${tripType === "multicity" ? "bg-blue-600 text-white" : "bg-gray-200"}`}
          onClick={() => setTripType("multicity")}
        >
          Multi-City
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label>From</Label>
          <Input
            placeholder="City or airport"
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>To</Label>
          <Input
            placeholder="City or airport"
            value={to}
            onChange={(e) => setTo(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Departure</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {departureDate ? format(departureDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              {/* Calendar component would go here */}
              <div className="p-4">Calendar component placeholder</div>
            </PopoverContent>
          </Popover>
        </div>
        {tripType !== "oneway" && (
          <div className="space-y-2">
            <Label>Return</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {returnDate ? format(returnDate, "PPP") : <span>Pick a date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                {/* Calendar component would go here */}
                <div className="p-4">Calendar component placeholder</div>
              </PopoverContent>
            </Popover>
          </div>
        )}
        <div className="space-y-2">
          <Label>Passengers & Cabin</Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <Users className="w-4 h-4" />
                <span>
                  {passengers.adults + passengers.seniors + passengers.children + passengers.infantsSeat + passengers.infantsLap}
                  {" "}Passenger{passengers.adults + passengers.seniors + passengers.children + passengers.infantsSeat + passengers.infantsLap !== 1 ? "s" : ""}
                </span>
                <Plane className="w-4 h-4" />
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Travelers & Class</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Adults</h3>
                    <p className="text-sm text-gray-500">Ages 16-64</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementPassenger("adults")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.adults}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementPassenger("adults")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Seniors</h3>
                    <p className="text-sm text-gray-500">Ages 65+</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementPassenger("seniors")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.seniors}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementPassenger("seniors")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Children</h3>
                    <p className="text-sm text-gray-500">Ages 2-15</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementPassenger("children")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.children}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementPassenger("children")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <h3 className="font-medium">Infant (Seat)</h3>
                    <p className="text-sm text-gray-500">Under 2</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementPassenger("infantsSeat")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.infantsSeat}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementPassenger("infantsSeat")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-medium">Infant (Lap)</h3>
                    <p className="text-sm text-gray-500">Under 2</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementPassenger("infantsLap")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{passengers.infantsLap}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementPassenger("infantsLap")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="border-t pt-4">
                  <h3 className="font-medium mb-3">Cabin Class</h3>
                  <div className="space-y-2">
                    {[
                      { value: "economy", label: "Economy" },
                      { value: "premium", label: "Premium Economy" },
                      { value: "business", label: "Business" },
                      { value: "first", label: "First Class" },
                    ].map((option) => (
                      <div key={option.value} className="flex items-center space-x-2">
                        <input
                          type="radio"
                          id={option.value}
                          name="cabinClass"
                          checked={cabinClass === option.value}
                          onChange={() => setCabinClass(option.value as any)}
                          className="h-4 w-4"
                        />
                        <label htmlFor={option.value}>{option.label}</label>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="flex items-center mt-4 space-x-4">
        <div className="flex items-center space-x-2">
          <Checkbox
            id="directFlights"
            checked={directFlightsOnly}
            onCheckedChange={(checked) => setDirectFlightsOnly(!!checked)}
          />
          <Label htmlFor="directFlights">Direct flights only</Label>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
          Search Flights
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
          Call for Phone Deals
        </Button>
      </div>
    </div>
  );
};

export default FlightSearchForm;