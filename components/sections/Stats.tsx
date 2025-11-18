"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from 'react'

const Stats = () => {
    return (
        <section className="px-6 md:px-16 py-16 bg-white">
            <div className="container flex flex-col md:flex-row items-start justify-between gap-10">
                <div className="max-w-lg">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">
                        Reach More Clients On Estate Hive!
                    </h2>
                    <p className="text-gray-600 mb-2">
                        Are you looking forward to having your accommodation facility hosted and made known to our customer populace?
                    </p>
                    <p className="text-gray-600 mb-2">
                        We are happy to announce that hosting your facility on our app costs 0 cedis and no technical requirements.
                    </p>
                    <p className="text-gray-600 mb-6">
                        Just sign up as a seller and after verification you are good to GO!!
                    </p>

                    <Button className="bg-red-700 hover:bg-red-800 text-white rounded-md px-10 cursor-pointer">
                      <Link href='/signup' className="w-full h-full">
                       Sign up
                      </Link> 
                    </Button>
                </div>

                {/* Right Stats Section */}
                <div className="grid grid-cols-2 gap-x-12 gap-y-12 text-gray-900 h-full">
                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl ">5+</h3>
                        <p className="text-sm text-gray-600">Real Estate firms</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl ">500+</h3>
                        <p className="text-sm text-gray-600">Accommodation facilities</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl ">16.5k+</h3>
                        <p className="text-sm text-gray-600">Active consumers</p>
                    </div>

                    <div className="flex flex-col items-center">
                        <h3 className="text-6xl ">2.5M+</h3>
                        <p className="text-sm text-gray-600">cedis worth of transactions</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Stats



