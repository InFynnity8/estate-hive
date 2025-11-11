"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { MapPin } from "lucide-react";
import { Button } from "./ui/button";

interface PropertyCardProps {
    image: string;
    title: string;
    description: string;
    price: string;
    location: string;
    onViewDetails?: () => void;
}

export function PropertyCard({
    image,
    title,
    description,
    price,
    location,
    onViewDetails,
}: PropertyCardProps) {
    return (
        <Card className="rounded-2xl overflow-hidden border border-gray-200 shadow-sm hover:shadow-md transition-all pt-0">
            <div className="h-48 w-full overflow-hidden">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover hover:scale-105 transition-transform duration-500"
                />
            </div>

            <CardHeader className="flex flex-col justify-between items-start">
                <CardTitle className="text-lg font-semibold text-gray-800">
                    {title}
                </CardTitle>
                <div className="flex flex-row gap-1">
                    <MapPin className="w-5 h-5 text-gray-500" />
                <p className="text-sm text-gray-600 line-clamp-2">{location}</p>
                </div>
            </CardHeader>

            <CardContent className="flex flex-col gap-2">
                <p className="text-sm text-gray-600 line-clamp-2">{description}</p>
                <p className="text-sm text-gray-700 mt-1">{price}</p>
                <Button
                    onClick={onViewDetails}
                    className="mt-3 w-full bg-red-700 text-white py-2 rounded-md hover:bg-red-800 transition"
                >
                    View Property Details
                </Button>
            </CardContent>
        </Card>
    );
}
