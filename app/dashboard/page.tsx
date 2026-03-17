"use client";

import { useState } from "react";
import { mockBookings } from "@/lib/booking-mock-data";
import { Plane, Building, Car, Package, Calendar, Users, CreditCard, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

const DashboardPage = () => {
  const [activeTab, setActiveTab] = useState<"upcoming" | "past" | "cancelled">("upcoming");

  const filteredBookings = mockBookings.filter(booking => {
    if (activeTab === "upcoming") return booking.status === "upcoming";
    if (activeTab === "past") return booking.status === "confirmed"; // Assuming confirmed are past for this mock
    if (activeTab === "cancelled") return booking.status === "cancelled";
    return true;
  });

  const getIcon = (type: string) => {
    switch (type) {
      case "flight": return Plane;
      case "hotel": return Building;
      case "car": return Car;
      case "package": return Package;
      default: return Plane;
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "confirmed": return "bg-green-100 text-green-800";
      case "upcoming": return "bg-blue-100 text-blue-800";
      case "cancelled": return "bg-red-100 text-red-800";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="p-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
        <h1 className="text-2xl font-bold">My Bookings</h1>
        <div className="mt-4 sm:mt-0">
          <Button>Book a New Trip</Button>
        </div>
      </div>

      <div className="flex space-x-4 mb-6 border-b">
        <button
          className={`pb-2 px-1 ${activeTab === "upcoming" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("upcoming")}
        >
          Upcoming (1)
        </button>
        <button
          className={`pb-2 px-1 ${activeTab === "past" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("past")}
        >
          Past (3)
        </button>
        <button
          className={`pb-2 px-1 ${activeTab === "cancelled" ? "border-b-2 border-blue-500 text-blue-600 font-medium" : "text-gray-500"}`}
          onClick={() => setActiveTab("cancelled")}
        >
          Cancelled (1)
        </button>
      </div>

      <div className="space-y-6">
        {filteredBookings.map((booking) => {
          const Icon = getIcon(booking.type);
          return (
            <div key={booking.id} className="border rounded-lg p-6">
              <div className="flex flex-col md:flex-row justify-between">
                <div className="flex items-start">
                  <div className="mr-4">
                    <div className="p-3 bg-blue-100 rounded-full">
                      <Icon className="w-6 h-6 text-blue-600" />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center">
                      <h3 className="text-lg font-semibold">{booking.title}</h3>
                      <span className={`ml-3 text-xs px-2 py-1 rounded-full ${getStatusColor(booking.status)}`}>
                        {booking.status.charAt(0).toUpperCase() + booking.status.slice(1)}
                      </span>
                    </div>
                    <p className="text-gray-600 mt-1">{booking.description}</p>
                    <div className="flex flex-wrap gap-4 mt-3 text-sm text-gray-600">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-1" />
                        <span>{booking.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Users className="w-4 h-4 mr-1" />
                        <span>{booking.travelers} traveler{booking.travelers !== 1 ? 's' : ''}</span>
                      </div>
                      <div className="flex items-center">
                        <CreditCard className="w-4 h-4 mr-1" />
                        <span>Ref: {booking.reference}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mt-4 md:mt-0 text-right">
                  <div className="text-xl font-bold text-blue-600">${booking.price}</div>
                  <div className="mt-4 flex flex-col sm:flex-row gap-2">
                    <Button variant="outline">Manage Booking</Button>
                    <Button>Get Receipt</Button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default DashboardPage;