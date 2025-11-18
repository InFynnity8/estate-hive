"use client";

import Image from "next/image";
import { Card } from "@/components/ui/card";
import BookingForm from "@/components/booking-form";
import {
    Tabs,
    TabsList,
    TabsTrigger,
    TabsContent,
} from "@/components/ui/tabs";
import ReviewCard from "@/components/review-card";
import { ScrollArea } from "@/components/ui/scroll-area";
import Amenities from "@/components/amenities";
import { Heart, Waypoints } from "lucide-react";


export default function PropertyDetail() {
    const reviews = [
        {
            id: 1,
            initials: 'SJ',
            name: 'Sarah Jackson',
            rating: 5,
            text: "Staying at Precious Hostel was an absolute delight! The atmosphere was so warm and inviting, and I met some incredible people during my stay. The staff were incredibly friendly and helpful, always ready with tips on where to explore next. The dorms were clean and comfortable, and I loved the communal spaces where I could hang out and chat with other travelers. Can't wait to come back!"
        },
        {
            id: 2,
            initials: 'AJ',
            name: 'Anderson Jacobs',
            rating: 4,
            text: "My experience at Precious Hostel was fantastic overall. The location was perfect and closer to my faculty, and the hostel itself had a really cool vibe. The common areas were lively, and I appreciated the effort the staff put into organizing activities for tenants. My only complaint would be that the Wi-Fi was a bit spotty at times, but other than that, I had a great time and would definitely recommend it to fellow students."
        },
        {
            id: 3,
            initials: 'EA',
            name: 'Elena Aboagye',
            rating: 4,
            text: "While I enjoyed the social atmosphere at Precious Hostel, I found the noise levels in the dorms to be quite disruptive at times, making it difficult to get a good night's sleep. The bathrooms could also use a bit more maintenance, as they tended to get dirty quickly. However, the staff were friendly and the location was convenient, so overall it was a decent experience."
        },
        {
            id: 4,
            initials: 'MN',
            name: 'Mike Norman',
            rating: 4,
            text: "I absolutely loved my stay at Precious Hostel. The staff were incredibly welcoming and went out of their way to make sure I had everything I needed. The dorms were clean and comfortable, and I felt safe and secure during my entire stay"
        }
    ];
    return (
        <section className=" min-h-screen mt-16 px-6 md:px-16 py-16 text-white ">
            <div className="container grid grid-cols-1 lg:grid-cols-3 gap-10">
                {/* Left Content */}
                <div className="lg:col-span-2 space-y-6">

                    <div className="flex flex-col">
                        <h1 className="text-2xl font-semibold text-gray-900">JP Morgan</h1>
                        <p className="text-sm text-gray-600">
                            AIRPORT RESIDENTIAL • Accra <span className="ml-2 text-yellow-500">★ 4.4</span>
                        </p>
                    </div>


                    <div className="relative w-full h-72 md:h-96 rounded-lg overflow-hidden">
                        <Image
                            src="https://images.unsplash.com/photo-1560185127-6ed189bf02f4?q=80&w=1200"
                            alt="Property main"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>

                    {/* Sub Images */}
                    <div className="grid grid-cols-4 gap-3">
                        {[
                            "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=879",
                            "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
                            "https://images.unsplash.com/photo-1676500684456-99f21e42a6fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
                            "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
                        ].map((src, i) => (
                            <div key={i} className="relative h-24 rounded-md overflow-hidden">
                                <Image src={src} alt={`Property view ${i + 1}`} fill className="object-cover" />
                            </div>
                        ))}
                    </div>

                    {/* Tabs Section */}
                    <Tabs defaultValue="about" className="w-full min-h-[70vh]">
                        <TabsList className="border-b rounded-none bg-transparent p-0 mb-4 flex gap-6">
                            <TabsTrigger
                                value="about"
                                className="relative data-[state=active]:text-red-600 data-[state=active]:after:absolute data-[state=active]:after:-bottom-[2px] data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-red-600 rounded-none text-gray-700"
                            >
                                About
                            </TabsTrigger>
                            <TabsTrigger
                                value="amenities"
                                className="relative data-[state=active]:text-red-600 data-[state=active]:after:absolute data-[state=active]:after:-bottom-[2px] data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-red-600 rounded-none text-gray-700"
                            >
                                Amenities
                            </TabsTrigger>
                            <TabsTrigger
                                value="reviews"
                                className="relative data-[state=active]:text-red-600 data-[state=active]:after:absolute data-[state=active]:after:-bottom-[2px] data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-red-600 rounded-none text-gray-700"
                            >
                                Reviews
                            </TabsTrigger>
                            <TabsTrigger
                                value="map"
                                className="relative data-[state=active]:text-red-600 data-[state=active]:after:absolute data-[state=active]:after:-bottom-[2px] data-[state=active]:after:left-0 data-[state=active]:after:h-[2px] data-[state=active]:after:w-full data-[state=active]:after:bg-red-600 rounded-none text-gray-700"
                            >
                                Map
                            </TabsTrigger>
                        </TabsList>


                        <TabsContent value="about" className="text-gray-700 text-sm leading-relaxed">
                            <p>
                                Welcome to our elegant and tranquil estate, where residents from all walks of life come together to enjoy modern living and a true sense of community. Nestled in the heart of Accra, this estate combines contemporary architecture with a warm, homely charm. Step inside and feel instantly at ease in thoughtfully designed spaces that balance comfort and style. Whether you’re relaxing in your bright living room, enjoying a quiet evening on your balcony, or taking a stroll through the lush landscaped gardens, every moment here feels like home. There’s always a sense of peace, connection, and belonging in the air.
                                Welcome to our elegant and tranquil estate, where residents from all walks of life come together to enjoy modern living and a true sense of community. Nestled in the heart of Accra, this estate combines contemporary architecture with a warm, homely charm. Step inside and feel instantly at ease in thoughtfully designed spaces that balance comfort and style. Whether you’re relaxing in your bright living room, enjoying a quiet evening on your balcony, or taking a stroll through the lush landscaped gardens, every moment here feels like home. There’s always a sense of peace, connection, and belonging in the air.
                                Welcome to our elegant and tranquil estate, where residents from all walks of life come together to enjoy modern living and a true sense of community. Nestled in the heart of Accra, this estate combines contemporary architecture with a warm, homely charm. Step inside and feel instantly at ease in thoughtfully designed spaces that balance comfort and style. Whether you’re relaxing in your bright living room, enjoying a quiet evening on your balcony, or taking a stroll through the lush landscaped gardens, every moment here feels like home. There’s always a sense of peace, connection, and belonging in the air.
                            </p>
                        </TabsContent>


                        <TabsContent value="amenities" className="text-gray-700 text-sm leading-relaxed space-y-2">
                            <Amenities />
                        </TabsContent>


                        <TabsContent value="reviews" className="text-gray-700 text-sm leading-relaxed">
                            <ScrollArea className="w-full h-96 flex pr-3">
                                {reviews.map((review) => (
                                    <ReviewCard key={review.id} review={review} />
                                ))}
                            </ScrollArea>
                        </TabsContent>

                        <TabsContent value="map" className="text-gray-700 text-sm leading-relaxed">
                            <div className="w-full h-96 rounded-lg overflow-hidden border">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.0010555795954!2d-0.17585902400625558!3d5.562884633657305!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x10208b98f8a5f53b%3A0x4377ff4c45e67c4a!2sAirport%20Residential%20Area!5e0!3m2!1sen!2sgh!4v1701010101010"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                ></iframe>
                            </div>
                        </TabsContent>
                    </Tabs>

                </div>


                <div className="lg:col-span-1 space-y-4 ">
                    <div className="w-full flex justify-end items-center gap-2">
                        <div className="border-1 border-neutral-300 p-3 rounded-full text-neutral-300 w-fit">
                            <Waypoints  width={25} height={25} />
                        </div>
                        <div className="border-1 border-neutral-300 p-3 rounded-full text-neutral-300 w-fit">
                            <Heart width={25} height={25} />
                        </div>
                    </div>
                    <h3 className="text-2xl font-semibold text-red-700">$400,000.00</h3>
                    <BookingForm />
                </div>
            </div>
        </section>
    );
}
