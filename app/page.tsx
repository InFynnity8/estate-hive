
"use client"
import FAQ from "@/components/sections/FAQ";
import { HeroSection } from "@/components/sections/Hero";
import JoinUs from "@/components/sections/JoinUs";
import Proceedure from "@/components/sections/Proceedure";
import Stats from "@/components/sections/Stats";
import TrendingListings from "@/components/sections/TrendingListing";
import TrustedBy from "@/components/sections/TrustedBy";


export default function Home() {
  return (
    <div className=" min-h-screen mt-16">
      <HeroSection />
      <TrustedBy />
      <TrendingListings />
      <Proceedure/>
      <FAQ/>
      <Stats/>
      <JoinUs/>
    </div>
  );
}
