import React from 'react';
import { Search } from 'lucide-react';

const Hero = () => {
  return (
    <div className="relative h-[600px] bg-cover bg-center" style={{
      backgroundImage: 'url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80)'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-50" />
      <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
          Find Your Dream Home
        </h1>
        <p className="text-xl text-white mb-8 max-w-2xl">
          Discover the perfect property from our extensive collection of premium listings across prime locations
        </p>
        <div className="w-full max-w-2xl bg-white rounded-lg shadow-lg p-2">
          <div className="flex">
            <input
              type="text"
              placeholder="Enter location, property type, or keywords..."
              className="flex-1 px-4 py-2 outline-none"
            />
            <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 flex items-center">
              <Search className="h-5 w-5 mr-2" />
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;