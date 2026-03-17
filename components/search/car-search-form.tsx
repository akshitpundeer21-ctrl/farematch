"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Car, CalendarDays } from "lucide-react";
import { format } from "date-fns";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const CarSearchForm = () => {
  const [pickupLocation, setPickupLocation] = useState("");
  const [dropoffLocation, setDropoffLocation] = useState("");
  const [sameLocation, setSameLocation] = useState(true);
  const [pickupDate, setPickupDate] = useState<Date | undefined>(new Date());
  const [dropoffDate, setDropoffDate] = useState<Date | undefined>(new Date());
  const [pickupTime, setPickupTime] = useState("10:00");
  const [dropoffTime, setDropoffTime] = useState("10:00");
  const [driverAge, setDriverAge] = useState(25);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        <div className="space-y-2">
          <Label>Pick-up Location</Label>
          <Input
            placeholder="City or airport"
            value={pickupLocation}
            onChange={(e) => setPickupLocation(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Drop-off Location</Label>
          <div className="flex">
            <Input
              placeholder="Same as pick-up"
              value={dropoffLocation}
              onChange={(e) => setDropoffLocation(e.target.value)}
              disabled={sameLocation}
              className={sameLocation ? "bg-gray-100" : ""}
            />
            <div className="flex items-center ml-2">
              <input
                type="checkbox"
                id="same-location"
                checked={sameLocation}
                onChange={(e) => {
                  setSameLocation(e.target.checked);
                  if (e.target.checked) {
                    setDropoffLocation(pickupLocation);
                  }
                }}
                className="h-4 w-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <label htmlFor="same-location" className="ml-1 text-sm">Same</label>
            </div>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Pick-up Date/Time</Label>
          <div className="flex space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {pickupDate ? format(pickupDate, "MMM dd") : <span>Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-4">Calendar component placeholder</div>
              </PopoverContent>
            </Popover>
            <select
              value={pickupTime}
              onChange={(e) => setPickupTime(e.target.value)}
              className="border rounded p-2 w-24"
            >
              {Array.from({ length: 24 }, (_, i) => {
                const hour = i.toString().padStart(2, '0');
                return <option key={hour} value={`${hour}:00`}>{hour}:00</option>;
              })}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Drop-off Date/Time</Label>
          <div className="flex space-x-2">
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className="w-full justify-start text-left font-normal"
                >
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  {dropoffDate ? format(dropoffDate, "MMM dd") : <span>Date</span>}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <div className="p-4">Calendar component placeholder</div>
              </PopoverContent>
            </Popover>
            <select
              value={dropoffTime}
              onChange={(e) => setDropoffTime(e.target.value)}
              className="border rounded p-2 w-24"
            >
              {Array.from({ length: 24 }, (_, i) => {
                const hour = i.toString().padStart(2, '0');
                return <option key={hour} value={`${hour}:00`}>{hour}:00</option>;
              })}
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <Label>Driver Age</Label>
          <div className="flex items-center">
            <input
              type="range"
              min="18"
              max="100"
              value={driverAge}
              onChange={(e) => setDriverAge(parseInt(e.target.value))}
              className="w-full"
            />
            <span className="ml-3 w-12 text-center">{driverAge} years</span>
          </div>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
          Search Cars
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
          Call for Phone Deals
        </Button>
      </div>
    </div>
  );
};

export default CarSearchForm;