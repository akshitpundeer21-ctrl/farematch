"use client";
import { ReactNode } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Calendar,
  Heart,
  Bell,
  User,
  CreditCard,
  Award,
  Settings,
  Plane,
  Building,
  Car,
  Gift
} from "lucide-react";

const DashboardLayout = ({ children }: { children: ReactNode }) => {
  const pathname = usePathname();

  const navItems = [
    {
      title: "My Bookings",
      href: "/dashboard",
      icon: Calendar,
    },
    {
      title: "Saved Trips",
      href: "/dashboard/saved-trips",
      icon: Heart,
    },
    {
      title: "Price Alerts",
      href: "/dashboard/price-alerts",
      icon: Bell,
    },
    {
      title: "Traveler Profiles",
      href: "/dashboard/traveler-profiles",
      icon: User,
    },
    {
      title: "Payment Methods",
      href: "/dashboard/payment-methods",
      icon: CreditCard,
    },
    {
      title: "Loyalty Program",
      href: "/dashboard/loyalty",
      icon: Award,
    },
    {
      title: "Account Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row">
          {/* Sidebar */}
          <div className="w-full md:w-64 flex-shrink-0 mb-6 md:mb-0 md:mr-6">
            <div className="bg-white rounded-lg shadow p-4">
              <h2 className="text-lg font-semibold mb-4">My Account</h2>
              <nav className="space-y-1">
                {navItems.map((item) => {
                  const Icon = item.icon;
                  const isActive = pathname === item.href;

                  return (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={`flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                        isActive
                          ? "bg-blue-100 text-blue-700"
                          : "text-gray-600 hover:bg-gray-100"
                      }`}
                    >
                      <Icon className="mr-3 h-5 w-5" />
                      {item.title}
                    </Link>
                  );
                })}
              </nav>
            </div>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            <div className="bg-white rounded-lg shadow">
              {children}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardLayout;