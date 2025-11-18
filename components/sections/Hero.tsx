"use client";

import Image from "next/image";
import { MapPin, Search } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center">

      <div className="absolute inset-0">
        <Image
          src="/hero.jpg"
          alt="Luxury house"
          fill
          priority
          quality={100}
          className="object-cover brightness-[0.5]"
        />
      </div>

   
      <div className="relative z-10 max-w-3xl mx-auto px-4 text-white">
        <h1 className="text-3xl sm:text-4xl md:text-4xl font-bold leading-tight">
          Start your journey to finding the{" "}
         perfect place to call home
        </h1>
        <p className="mt-3 text-sm sm:text-base font-medium text-gray-200">
          Explore our wide range of real estate properties tailored to fit your
          lifestyle and needs!
        </p>

     
        <div className="mt-8 flex items-center justify-center gap-2 ">
          <div className="flex items-center w-full max-w-xl bg-white rounded-full shadow-lg overflow-hidden">
            <button className=" text-slate-700 px-5 py-3 flex items-center justify-center transition-all cursor-pointer">
              <Search className="w-5 h-5" />
            </button>
            <input
              type="text"
              placeholder="Search for property here"
              className="flex-grow pr-5 py-3 text-gray-700 placeholder-gray-500 focus:outline-none rounded-l-full"
            />
          </div>
            <div className=" p-3 flex items-center justify-center text-white bg-red-700 rounded-md">
                 <MapPin className="w-5 h-5" />
            </div>
        </div>
      </div>
    </section>
  );
}
