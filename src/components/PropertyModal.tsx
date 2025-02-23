import React from 'react';
import { X, MapPin, BedDouble, Bath, Square } from 'lucide-react';

interface PropertyModalProps {
  property: {
    title: string;
    price: string;
    location: string;
    beds: number;
    baths: number;
    sqft: number;
    image: string;
    description: string;
    features: string[];
  };
  onClose: () => void;
}

const PropertyModal = ({ property, onClose }: PropertyModalProps) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 bg-white rounded-full p-2 shadow-lg hover:bg-gray-100"
          >
            <X className="h-6 w-6" />
          </button>
          
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-64 object-cover rounded-t-xl"
          />
        </div>

        <div className="p-6">
          <div className="mb-6">
            <div className="flex justify-between items-start mb-4">
              <h2 className="text-2xl font-bold text-gray-900">{property.title}</h2>
              <span className="text-xl font-bold text-blue-600">{property.price}</span>
            </div>
            
            <p className="flex items-center text-gray-600 mb-4">
              <MapPin className="h-5 w-5 mr-2" />
              {property.location}
            </p>

            <div className="flex space-x-6 text-gray-600 mb-6">
              <div className="flex items-center">
                <BedDouble className="h-5 w-5 mr-2" />
                <span>{property.beds} beds</span>
              </div>
              <div className="flex items-center">
                <Bath className="h-5 w-5 mr-2" />
                <span>{property.baths} baths</span>
              </div>
              <div className="flex items-center">
                <Square className="h-5 w-5 mr-2" />
                <span>{property.sqft} sqft</span>
              </div>
            </div>

            <div className="border-t border-gray-200 pt-6">
              <h3 className="text-xl font-semibold mb-3">Description</h3>
              <p className="text-gray-600 mb-6">{property.description}</p>

              <h3 className="text-xl font-semibold mb-3">Features</h3>
              <ul className="grid grid-cols-2 gap-2">
                {property.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-600">
                    <span className="w-2 h-2 bg-blue-600 rounded-full mr-2"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex space-x-4">
            <button className="flex-1 bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700">
              Schedule Viewing
            </button>
            <button className="flex-1 border border-blue-600 text-blue-600 py-3 rounded-lg hover:bg-blue-50">
              Contact Agent
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyModal;