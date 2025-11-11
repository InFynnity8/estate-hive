
'use client';

import { 
  Monitor, 
  BookOpen, 
  Camera, 
  Bath, 
  Utensils, 
  Shirt 
} from 'lucide-react';

interface RoomStatusCompactProps {
  className?: string;
}

const Amenities = ({ className = '' }: RoomStatusCompactProps) => {
  const rooms = [
    { name: 'TV room', icon: Monitor },
    { name: 'Study room', icon: BookOpen },
    { name: 'CCTV', icon: Camera },
    { name: 'Washroom', icon: Bath },
    { name: 'Kitchen', icon: Utensils },
    { name: 'Wardrobe', icon: Shirt }
  ];

  return (
    <div className={`bg-white rounded-lg ${className}`}>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {rooms.map((room, index) => {
          const IconComponent = room.icon;
          return (
            <div
              key={index}
              className="flex flex-col items-center justify-center p-4 border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors duration-200"
            >
              <IconComponent className="w-8 h-8 text-gray-700 mb-2" />
              <span className="text-sm font-medium text-gray-900 text-center">
                {room.name}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Amenities;