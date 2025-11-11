
"use client"
import React, { useState } from 'react';
import { MapPin, Bed, Home } from 'lucide-react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { PropertyCard } from '@/components/property-card';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { useRouter } from 'next/navigation';

const Properties = () => {
  const [filters, setFilters] = useState({
    facilityType: ['Houses'],
    location: 'Accra',
    priceRange: 'all',
    roomType: []
  });

  const router = useRouter()

  const properties = Array(9).fill({
    name: 'JP Morgan',
    location: 'Accra',
    description: 'Wake up to the soothing melody of waves. This beachfront villa offers...',
    image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?w=800&q=80',
    price: 'Price'
  });

  const handleFacilityChange = (facility: string) => {
    setFilters(prev => ({
      ...prev,
      facilityType: prev.facilityType.includes(facility)
        ? prev.facilityType.filter(f => f !== facility)
        : [...prev.facilityType, facility]
    }));
  };

  // const handleRoomTypeChange = (roomType: string[]) => {
  //   setFilters(prev => ({
  //     ...prev,
  //     roomType: prev.roomType.includes(roomType)
  //       ? prev.roomType.filter(r => r !== roomType)
  //       : [...prev.roomType, roomType]
  //   }));
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100  mt-16">
      <div className="">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">

          <div className="lg:col-span-1">
            <Card className="sticky shadow-none top-16 border-0 border-r-1 border-r-slate-200 backdrop-blur rounded-none min-h-screen">
              <CardContent className="">
                <Accordion type="multiple"  className="w-full">

                  <AccordionItem value="facility" className="border-y-2 border-red-700">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Type of facility
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {['Houses', 'Apartments', 'Mini-flats', 'Rooms For Rent'].map((facility) => (
                          <div key={facility} className="flex items-center space-x-2">
                            <Checkbox
                              id={facility}
                              checked={filters.facilityType.includes(facility)}
                              onCheckedChange={() => handleFacilityChange(facility)}
                              className="border-gray-300"
                            />
                            <Label
                              htmlFor={facility}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {facility}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>


                  <AccordionItem value="location" className="border-b-2 border-red-700">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Location
                    </AccordionTrigger>
                    <AccordionContent>
                      <Select value={filters.location} onValueChange={(val) => setFilters({ ...filters, location: val })}>
                        <SelectTrigger className="w-full mt-2">
                          <SelectValue placeholder="Select location" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Accra">Accra</SelectItem>
                          <SelectItem value="Kumasi">Kumasi</SelectItem>
                          <SelectItem value="Tema">Tema</SelectItem>
                          <SelectItem value="Takoradi">Takoradi</SelectItem>
                          <SelectItem value="Cape Coast">Cape Coast</SelectItem>
                        </SelectContent>
                      </Select>
                    </AccordionContent>
                  </AccordionItem>


                  <AccordionItem value="price" className="border-b-2 border-red-700">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Price
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        <div className="flex gap-2 items-center px-2">
                          <input
                            type="text"
                            placeholder="Minimum"
                            className="flex-1 px-3 py-2 w-12 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                          />
                          <span className="text-gray-400">—</span>
                          <input
                            type="text"
                            placeholder="Maximum"
                            className="flex-1 px-3 py-2 w-12 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-700"
                          />
                        </div>
                        <RadioGroup value={filters.priceRange} onValueChange={(val) => setFilters({ ...filters, priceRange: val })}>
                          {['Under 4k', '4k - 6.5k', '6.5k - 8.5k', '8.5k - 12k', 'Above 12k'].map((range) => (
                            <div key={range} className="flex items-center space-x-2">
                              <RadioGroupItem value={range} id={range} />
                              <Label htmlFor={range} className="text-sm font-normal cursor-pointer">
                                {range}
                              </Label>
                            </div>
                          ))}
                        </RadioGroup>
                        <div className="w-full flex justify-end">

                        <Button variant='ghost' className='text-red-700 hover:bg-transparent cursor-pointer'>Save</Button>
                        </div>
                      </div>
                    </AccordionContent>
                  </AccordionItem>


                  <AccordionItem value="rooms" className="border-b-2 border-red-700">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Type of Room
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="space-y-3 pt-2">
                        {['1 - bedroom', '2 - bedrooms', '4 - bed rooms', 'More'].map((room) => (
                          <div key={room} className="flex items-center space-x-2">
                            <Checkbox
                              id={room}
                              // checked={filters.roomType.includes(room)}
                              // onCheckedChange={() => handleRoomTypeChange(room)}
                              className="border-gray-300"
                            />
                            <Label
                              htmlFor={room}
                              className="text-sm font-normal cursor-pointer"
                            >
                              {room}
                            </Label>
                          </div>
                        ))}
                      </div>
                    </AccordionContent>
                  </AccordionItem>

                  <AccordionItem value="amenities" className="border-b-0">
                    <AccordionTrigger className="text-sm font-semibold hover:no-underline">
                      Amenities
                    </AccordionTrigger>
                    <AccordionContent>
                      <div className="grid grid-cols-2 gap-3">
                        {['TV room', 'CCTV', 'Study room', 'Balcony', 'Shared Kitchen', 'Wardrobe', 'Self-contained'].map((amenity) => (
                          <div key={amenity} className="flex items-center space-x-2">
                            <Checkbox id={amenity} className="border-gray-300" />
                            <Label
                              htmlFor={amenity}
                              className="text-xs font-normal cursor-pointer"
                            >
                              {amenity}
                            </Label>
                          </div>
                        ))}
                      </div>
                      <Button variant="link" className="text-red-700 text-xs p-0 h-auto mt-3">
                        Add more
                      </Button>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>



              </CardContent>
            </Card>
          </div>


          <div className="lg:col-span-4 px-6 py-4 md:py-8 flex items-start w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard onViewDetails= {() => router.push('/properties/details')} key={index} image={property.image} title={property.name} description={property.description} price={property.price} location={property.location} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Properties;