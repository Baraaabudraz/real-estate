import React from 'react';
import { Award, Users, Home, Target } from 'lucide-react';

const AboutPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 mb-8 text-center">About MGS Realtor</h1>
        
        <div className="prose prose-lg mx-auto mb-12">
          <p className="text-gray-600 text-lg leading-relaxed mb-6">
            Since 2004, MGS Realtor has been at the forefront of the luxury real estate market in California. 
            We pride ourselves on providing exceptional service and expertise to our clients, whether they're 
            first-time homebuyers or seasoned investors.
          </p>
          
          <p className="text-gray-600 text-lg leading-relaxed">
            Our team of experienced agents combines deep market knowledge with personalized service to ensure 
            every client finds their perfect property. We believe in building lasting relationships and 
            delivering results that exceed expectations.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Mission</h2>
            <p className="text-gray-600">
              To provide exceptional real estate services that help our clients achieve their property goals 
              while maintaining the highest standards of integrity and professionalism.
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-gray-600">
              To be the most trusted and respected real estate agency in California, known for our expertise, 
              innovation, and commitment to client success.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-4 gap-8 mb-16">
          <div className="text-center">
            <Award className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">20+</h3>
            <p className="text-gray-600">Years of Experience</p>
          </div>
          
          <div className="text-center">
            <Users className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">1000+</h3>
            <p className="text-gray-600">Happy Clients</p>
          </div>
          
          <div className="text-center">
            <Home className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">2500+</h3>
            <p className="text-gray-600">Properties Sold</p>
          </div>
          
          <div className="text-center">
            <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-bold text-xl mb-2">98%</h3>
            <p className="text-gray-600">Client Satisfaction</p>
          </div>
        </div>

        <div className="bg-blue-50 rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-bold mb-4">Ready to Find Your Dream Home?</h2>
          <p className="text-gray-600 mb-6">
            Let our experienced team help you navigate the real estate market.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700">
            Contact Us Today
          </button>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;