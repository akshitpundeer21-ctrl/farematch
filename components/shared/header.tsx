"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X, Phone, User, UserCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useSession, signOut } from "next-auth/react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { data: session } = useSession();

  const navItems = [
    { name: "Flights", href: "/main/flights" },
    { name: "Hotels", href: "/main/hotels" },
    { name: "Car Rental", href: "/main/car-rental" },
    { name: "Cruises", href: "/main/cruises" },
    { name: "Sailboat", href: "/main/Sailboat" },
    { name: "Amtrak", href: "/main/amtrak" },
    { name: "Deals", href: "/main/deals" },
    { name: "Blog", href: "/main/blog" },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="text-2xl font-bold text-blue-600">
              FaresMatch
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-gray-700 hover:text-blue-600 font-medium transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Phone and Auth */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="tel:+1-800-918-3039"
              className="flex items-center text-orange-500 font-semibold hover:text-orange-600"
            >
              <Phone className="w-4 h-4 mr-1" />
              +1-800-918-3039
            </Link>

            {session ? (
              <div className="flex items-center space-x-3">
                <Link href="/dashboard">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <UserCircle className="w-4 h-4 mr-2" />
                    {session.user?.name || session.user?.email}
                  </Button>
                </Link>
                <Button size="sm" onClick={() => signOut()}>Sign Out</Button>
              </div>
            ) : (
              <>
                <Button variant="outline" size="sm">
                  <User className="w-4 h-4 mr-2" />
                  <Link href="/auth/login">Sign In</Link>
                </Button>
                <Button size="sm">
                  <Link href="/auth/register">Register</Link>
                </Button>
              </>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="text-gray-700 hover:text-blue-600 font-medium py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-gray-200">
                <div className="flex items-center justify-between">
                  <Link
                    href="tel:+1-800-918-3039"
                    className="flex items-center text-orange-500 font-semibold"
                  >
                    <Phone className="w-4 h-4 mr-2" />
                    +1-800-918-3039
                  </Link>
                </div>
                <div className="flex space-x-3 mt-3">
                  {session ? (
                    <>
                      <Link href="/dashboard" className="flex-1">
                        <Button variant="outline" className="w-full flex items-center">
                          <UserCircle className="w-4 h-4 mr-2" />
                          {session.user?.name || session.user?.email}
                        </Button>
                      </Link>
                      <Button className="flex-1" onClick={() => signOut()}>Sign Out</Button>
                    </>
                  ) : (
                    <>
                      <Link href="/auth/login" className="flex-1">
                        <Button variant="outline" className="w-full">
                          <User className="w-4 h-4 mr-2" />
                          Sign In
                        </Button>
                      </Link>
                      <Link href="/auth/register" className="flex-1">
                        <Button className="w-full">Register</Button>
                      </Link>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;