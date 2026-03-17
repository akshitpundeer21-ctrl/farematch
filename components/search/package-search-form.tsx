"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Users, Plane, Building } from "lucide-react";
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

const PackageSearchForm = () => {
  const [destination, setDestination] = useState("");
  const [departureCity, setDepartureCity] = useState("");
  const [travelDates, setTravelDates] = useState<Date | undefined>(new Date());
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState(2000);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label>Destination</Label>
          <Input
            placeholder="Where to?"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Departure City</Label>
          <Input
            placeholder="From where?"
            value={departureCity}
            onChange={(e) => setDepartureCity(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Travel Dates</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {travelDates ? format(travelDates, "PPP") : <span>Pick dates</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4">Calendar component placeholder</div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Travelers</Label>
          <div className="flex items-center">
            <input
              type="range"
              min="1"
              max="10"
              value={travelers}
              onChange={(e) => setTravelers(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="ml-3 w-12 text-center">{travelers} {travelers === 1 ? 'person' : 'people'}</span>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Budget Range</Label>
          <div className="flex items-center">
            <span className="mr-2">$</span>
            <input
              type="range"
              min="100"
              max="10000"
              step="100"
              value={budget}
              onChange={(e) => setBudget(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="ml-3 w-20 text-center">${budget.toLocaleString()}</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
          Search Packages
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
          Call for Phone Deals
        </Button>
      </div>
    </div>
  );
};

export default PackageSearchForm;