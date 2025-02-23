import React from 'react';
import Hero from '../components/Hero';
import PropertyCard from '../components/PropertyCard';
import SearchBar from '../components/SearchBar';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = React.useState('');

  const featuredProperties = [
    {
      id: 1,
      title: 'Modern Luxury Villa',
      price: '$1,250,000',
      location: 'Beverly Hills, CA',
      beds: 4,
      baths: 3.5,
      sqft: 3200,
      image: 'https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 2,
      title: 'Downtown Penthouse',
      price: '$890,000',
      location: 'Los Angeles, CA',
      beds: 3,
      baths: 2,
      sqft: 2100,
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80'
    },
    {
      id: 3,
      title: 'Oceanfront Condo',
      price: '$1,750,000',
      location: 'Malibu, CA',
      beds: 3,
      baths: 2.5,
      sqft: 2800,
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80'
    }
  ];

  return (
    <div>
      <Hero />
      
      <main className="container mx-auto px-4 py-8">
        <section className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Welcome to MGS Realtor</h2>
          <p className="text-lg text-gray-600">
            With over 20 years of experience in the real estate market, we specialize in helping our clients 
            find their dream properties. Whether you're looking to buy, sell, or rent, our team of expert 
            agents is here to guide you through every step of the process.
          </p>
        </section>

        <SearchBar value={searchQuery} onChange={setSearchQuery} />
        
        <section className="mt-16">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-gray-900">Featured Properties</h2>
            <Link 
              to="/properties" 
              className="flex items-center text-blue-600 hover:text-blue-700"
            >
              View All <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredProperties.map(property => (
              <PropertyCard key={property.id} {...property} />
            ))}
          </div>
        </section>

        <section className="mt-16 bg-blue-50 rounded-2xl p-8 md:p-12">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MGS Realtor?</h2>
            <div className="grid md:grid-cols-3 gap-8 mt-8">
              <div>
                <h3 className="text-xl font-semibold mb-2">Experience</h3>
                <p className="text-gray-600">Over 20 years of market expertise</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Trust</h3>
                <p className="text-gray-600">Thousands of satisfied clients</p>
              </div>
              <div>
                <h3 className="text-xl font-semibold mb-2">Results</h3>
                <p className="text-gray-600">Top-rated agency in California</p>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default HomePage;