"use client"
import { PropertyCard } from "../property-card";
import Link from "next/link";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function TrendingListings() {
      const router = useRouter();
    const listings = [
        {
            id: 1,
            title: "JP Morgan",
            location: "Accra",
            image:
                "https://images.unsplash.com/photo-1723110994499-df46435aa4b3?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=879",
            description:
                "Wake up to the soothing melody of waves. This beachfront villa offers unparalleled views and luxury.",
            price: "₵1,200,000",
        },
        {
            id: 2,
            title: "Righteous’ Apartments",
            location: "Accra",
            image:
                "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?auto=format&fit=crop&w=800&q=80",
            description:
                "Modern apartments with private pools and elegant interiors just minutes from the beach.",
            price: "₵850,000",
        },
        {
            id: 3,
            title: "Adom",
            location: "Accra",
            image:
                "https://images.unsplash.com/photo-1676500684456-99f21e42a6fe?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=870",
            description:
                "Stylish wooden architecture with oceanfront views and a serene neighborhood atmosphere.",
            price: "₵920,000",
        },
        {
            id: 4,
            title: "Last Catch Flats",
            location: "Accra",
            image:
                "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
            description:
                "Contemporary living space featuring open-plan design and large panoramic windows.",
            price: "₵1,050,000",
        },
    ];

    return (

        <section className="px-6 md:px-16 py-16 bg-white">

            <div className="flex justify-between items-start flex-wrap gap-4 mb-10">
                <div>
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
                        Trending listings
                    </h2>
                </div>


            </div>
            <div className="">

                <p className="text-gray-600 font-semibold my-3">
                    AIRPORT RESIDENTIAL – Accra
                </p>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {listings.map((listing) => (
                        <PropertyCard
                            key={listing.id}
                            image={listing.image}
                            title={listing.title}
                            location={listing.location}
                            description={listing.description}
                            price={listing.price}
                            onViewDetails={() => alert(`Viewing ${listing.title}`)}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-4 w-full py-2 justify-end">
                    <Link href="/properties" className="text-sm text-gray-500 hover:text-red-600">
                        see more...
                    </Link>
                </div>
            </div>
            <div className="">

                <p className="text-gray-600 font-semibold my-3">
                    TRASSACO VALLEY - East Legon
                </p>
                <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
                    {listings.map((listing) => (
                        <PropertyCard
                            key={listing.id}
                            image={listing.image}
                            title={listing.title}
                            location={listing.location}
                            description={listing.description}
                            price={listing.price}
                            onViewDetails={() => alert(`Viewing ${listing.title}`)}
                        />
                    ))}
                </div>
                <div className="flex items-center gap-4 w-full py-2 justify-end">
                    <Link href="/properties" className="text-sm text-gray-500 hover:text-red-600">
                        see more...
                    </Link>
                </div>
            </div>

            <div className="w-full flex items-center justify-center">
                <Button
                    onClick={() => router.push('/properties')}
                    className="px-10 cursor-pointer w-fit bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
                >
                 See all properties
                </Button>
            </div>

        </section>
    );
}
