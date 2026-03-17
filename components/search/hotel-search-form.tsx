"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CalendarIcon, Users, Building } from "lucide-react";
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

const HotelSearchForm = () => {
  const [destination, setDestination] = useState("");
  const [checkInDate, setCheckInDate] = useState<Date | undefined>(new Date());
  const [checkOutDate, setCheckOutDate] = useState<Date | undefined>(new Date());
  const [rooms, setRooms] = useState(1);
  const [adults, setAdults] = useState(2);
  const [children, setChildren] = useState(0);

  const incrementGuest = (type: "adults" | "children") => {
    if (type === "adults") {
      setAdults(prev => Math.min(4, prev + 1)); // Max 4 adults per room
    } else {
      setChildren(prev => Math.min(3, prev + 1)); // Max 3 children per room
    }
  };

  const decrementGuest = (type: "adults" | "children") => {
    if (type === "adults" && adults > 1) {
      setAdults(prev => prev - 1);
    } else if (type === "children" && children > 0) {
      setChildren(prev => prev - 1);
    }
  };

  const incrementRooms = () => {
    setRooms(prev => prev + 1);
  };

  const decrementRooms = () => {
    if (rooms > 1) {
      setRooms(prev => prev - 1);
    }
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="space-y-2">
          <Label>Destination</Label>
          <Input
            placeholder="City, property, or landmark"
            value={destination}
            onChange={(e) => setDestination(e.target.value)}
          />
        </div>
        <div className="space-y-2">
          <Label>Check-in</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {checkInDate ? format(checkInDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4">Calendar component placeholder</div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Check-out</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className="w-full justify-start text-left font-normal"
              >
                <CalendarIcon className="w-4 h-4 mr-2" />
                {checkOutDate ? format(checkOutDate, "PPP") : <span>Pick a date</span>}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-auto p-0" align="start">
              <div className="p-4">Calendar component placeholder</div>
            </PopoverContent>
          </Popover>
        </div>
        <div className="space-y-2">
          <Label>Guests & Rooms</Label>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="w-full justify-between">
                <Users className="w-4 h-4" />
                <span>
                  {adults + children} Guest{adults + children !== 1 ? "s" : ""}, {rooms} Room{rooms !== 1 ? "s" : ""}
                </span>
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle>Select Rooms & Guests</DialogTitle>
              </DialogHeader>
              <div className="py-4">
                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-medium">Rooms</h3>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={decrementRooms}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{rooms}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={incrementRooms}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between mb-6">
                  <div>
                    <h3 className="font-medium">Adults</h3>
                    <p className="text-sm text-gray-500">Ages 18+</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementGuest("adults")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{adults}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementGuest("adults")}
                    >
                      +
                    </Button>
                  </div>
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium">Children</h3>
                    <p className="text-sm text-gray-500">Ages 0-17</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => decrementGuest("children")}
                    >
                      -
                    </Button>
                    <span className="w-8 text-center">{children}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => incrementGuest("children")}
                    >
                      +
                    </Button>
                  </div>
                </div>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>

      <div className="mt-6 flex flex-col sm:flex-row gap-3">
        <Button className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700">
          Search Hotels
        </Button>
        <Button variant="outline" className="w-full sm:w-auto border-orange-500 text-orange-500 hover:bg-orange-50">
          Call for Phone Deals
        </Button>
      </div>
    </div>
  );
};

export default HotelSearchForm;