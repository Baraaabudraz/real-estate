import React from 'react';
import { MapPin, BedDouble, Bath, Square } from 'lucide-react';

interface PropertyCardProps {
  title: string;
  price: string;
  location: string;
  beds: number;
  baths: number;
  sqft: number;
  image: string;
}

const PropertyCard = ({ title, price, location, beds, baths, sqft, image }: PropertyCardProps) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative h-48">
        <img src={image} alt={title} className="w-full h-full object-cover" />
        <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full">
          {price}
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
        <p className="flex items-center text-gray-600 mb-4">
          <MapPin className="h-4 w-4 mr-2" />
          {location}
        </p>
        <div className="flex justify-between text-gray-600">
          <div className="flex items-center">
            <BedDouble className="h-4 w-4 mr-1" />
            <span>{beds} beds</span>
          </div>
          <div className="flex items-center">
            <Bath className="h-4 w-4 mr-1" />
            <span>{baths} baths</span>
          </div>
          <div className="flex items-center">
            <Square className="h-4 w-4 mr-1" />
            <span>{sqft} sqft</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyCard;