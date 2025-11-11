
"use client"
import { HeroSection } from "@/components/sections/Hero";
import TrendingListings from "@/components/sections/TrendingListing";

import { FaApple, FaGoogle, FaMicrosoft, FaAmazon, FaFacebook } from 'react-icons/fa';


export default function Home() {
  return (
    <div className=" min-h-screen mt-10">
      <HeroSection />
      <section className="text-center py-10 bg-slate-50">
        <h3 className="text-lg font-semibold text-neutral-700">
          TRUSTED BY
        </h3>

        <div className="flex flex-wrap justify-center items-center gap-10 text-neutral-800 text-6xl my-5">
          <FaApple />
          <FaGoogle />
          <FaMicrosoft />
          <FaAmazon />
          <FaFacebook />
        </div>
      </section>

      <TrendingListings />
    </div>
  );
}
