"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import Logo from "./logo";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: "/properties" },
    { name: "Services", href: "/services" },
    { name: "About Us", href: "/about" },
  ];

  return (
    <nav className="bg-neutral-800 text-white shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 flex items-center justify-between h-16">
        <Link href="/" className="text-2xl font-bold flex items-center space-x-1">
         <Logo dark={true}/>
        </Link>

     
        <div className="hidden md:flex space-x-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={cn(
                "px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "bg-neutral-900"
                  : "text-white hover:text-red-600"
              )}
            >
              {link.name}
            </Link>
          ))}
        </div>

      
        <div className="hidden md:flex space-x-4">
          <Link
            href="/login"
            className="px-4 py-2 border border-white rounded-md hover:bg-white hover:text-black transition-colors text-sm font-medium"
          >
            Sign In
          </Link>
          <Link
            href="/signup"
            className="px-4 py-2 bg-red-700 hover:bg-red-800 rounded-md text-sm font-medium transition-colors"
          >
            Sign Up
          </Link>
        </div>

        
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white focus:outline-none"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

     
      <div
        className={cn(
          "md:hidden bg-neutral-800 text-white overflow-hidden transition-all duration-300 ease-in-out",
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        )}
      >
        <div className="flex flex-col space-y-3 px-6 py-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={cn(
                "block px-3 py-2 rounded-md text-sm font-medium transition-colors",
                pathname === link.href
                  ? "text-red-600"
                  : "text-white hover:text-red-600"
              )}
            >
              {link.name}
            </Link>
          ))}

          <div className="border-t border-gray-700 pt-4 flex flex-col space-y-3">
            <Link
              href="/login"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 border border-white rounded-md text-center hover:bg-white hover:text-black transition-colors text-sm font-medium"
            >
              Sign In
            </Link>
            <Link
              href="/signup"
              onClick={() => setIsOpen(false)}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 rounded-md text-center text-sm font-medium transition-colors"
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
