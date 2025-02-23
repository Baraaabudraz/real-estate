import React, { useState } from 'react';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import PropertyModal from '../components/PropertyModal';

const PropertiesPage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedProperty, setSelectedProperty] = useState<any>(null);

  const properties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$1,250,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80',
      description: 'Stunning modern villa with panoramic views, infinity pool, and smart home features.',
      features: ['Smart Home System', 'Infinity Pool', 'Wine Cellar', 'Home Theater']
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$890,000',
      location: 'Los Angeles, CA',
      beds: 3,
      baths: 2,
      sqft: 2100,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
      description: 'Luxurious penthouse in the heart of downtown with stunning city views.',
      features: ['Private Terrace', 'Concierge Service', 'Fitness Center', 'Valet Parking']
    },
    {
      id: 3,
      title: 'Oceanfront Condo',
      price: '$1,750,000',
      location: 'Malibu, CA',
      beds: 3,
      baths: 2.5,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80',
      description: 'Beautiful oceanfront property with direct beach access and stunning views.',
      features: ['Beach Access', 'Ocean View', 'Private Balcony', 'Resort-style Pool']
    },
    // Add more properties here
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold text-gray-900 mb-8">Available Properties</h1>
      
      <div className="mb-8">
        <SearchBar value={searchQuery} onChange={setSearchQuery} />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map(property => (
          <div key={property.id} onClick={() => setSelectedProperty(property)}>
            <PropertyCard {...property} />
          </div>
        ))}
      </div>

      {selectedProperty && (
        <PropertyModal
          property={selectedProperty}
          onClose={() => setSelectedProperty(null)}
        />
      )}
    </div>
  );
};

export default PropertiesPage;