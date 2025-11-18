'use client'
import React from 'react'
import Image from 'next/image'

const Proceedure = () => {
  return (
    <section className="min-h-[80vh] px-6 md:px-16 py-16 pb-25 bg-slate-50 grid items-center justify-between grid-cols-1 lg:grid-cols-2 gap-10">
   
      <div className="flex flex-col gap-5 flex-1">
        <h1 className="text-2xl md:text-3xl font-semibold text-gray-800 leading-snug">
          Find Your Comfort On Estate Hive <br /> In Just 3 Easy Steps!
        </h1>
        <p className="text-md text-gray-600 leading-relaxed">
          At Estate Hive, we make property hunting simple and stress-free.
          Our smart marketplace connects owners, agents, and buyers with verified
          listings, secure payments, and AI-powered recommendations for better deals.
        </p>

        <div className="text-md text-gray-700 mt-2">
          <p className="font-medium mb-2">In 3 steps your dream property becomes reality:</p>
          <ul className="list-decimal list-inside space-y-1">
            <li>Search and Select</li>
            <li>Book</li>
            <li>Pay to Reserve</li>
          </ul>
        </div>
      </div>


      <div className="flex justify-center items-center flex-1">
        {/* --- Mobile / Tablet Layout --- */}
        <div className="flex lg:hidden justify-center items-end -gap-2">
          <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
            <Image
              src="/step1.jpg"
              alt="Luxury house step 1"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="relative w-52 h-52 rounded-full overflow-hidden shadow-lg">
            <Image
              src="/step2.jpg"
              alt="Luxury house step 2"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="relative w-24 h-24 rounded-full overflow-hidden shadow-md">
            <Image
              src="/step3.jpg"
              alt="Luxury house step 3"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
        </div>

        {/* --- Large Screen Layout --- */}
        <div className="hidden lg:flex relative justify-center items-center h-[450px] lg:h-[500px] ml-20">
    
          <div className="relative w-80 h-80 rounded-full overflow-hidden shadow-xl z-10">
            <Image
              src="/step2.jpg"
              alt="Luxury house step 2"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>

          <div className="absolute top-10 -left-30 w-52 h-52 rounded-full overflow-hidden shadow-lg z-20 border-2 border-slate-50">
            <Image
              src="/step1.jpg"
              alt="Luxury house step 1"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>

     
          <div className="absolute -bottom-5 -left-8 w-32 h-32 rounded-full overflow-hidden shadow-md z-20">
            <Image
              src="/step3.jpg"
              alt="Luxury house step 3"
              fill
              priority
              quality={100}
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default Proceedure
