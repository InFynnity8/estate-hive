import React from 'react';
import { Star } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';

const ReviewCard = ({ review }: {
    review: {
        id: number;
        initials: string;
        name: string;
        rating: number;
        text: string;
    }
}) => {
    const renderStars = (rating: number) => {
        return Array.from({ length: 5 }, (_, index) => (
            <Star
                key={index}
                className={`w-4 h-4 ${index < rating
                        ? 'fill-yellow-400 text-yellow-400'
                        : 'fill-gray-200 text-gray-200'
                    }`}
            />
        ));
    };

    return (
        <Card className="border-none shadow-none px-0">
            <CardContent className='px-0'>
                <div className="flex items-start gap-4">
                    <Avatar className="w-12 h-12 bg-blue-100 text-blue-700 font-semibold flex-shrink-0">
                        <AvatarFallback>{review.initials}</AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2 mb-2">
                            <h3 className="font-semibold text-gray-900 text-base">
                                {review.name}
                            </h3>
                            <div className="flex gap-0.5">{renderStars(review.rating)}</div>
                        </div>

                        <p className="text-sm text-gray-600 leading-relaxed">
                            {review.text}
                        </p>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
};


export default ReviewCard