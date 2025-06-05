import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';

const HeroSection: React.FC = () => {
  return (
    <section 
      className="relative min-h-screen flex items-center parallax-bg"
      style={{ 
        backgroundImage: `url('https://images.pexels.com/photos/3601425/pexels-photo-3601425.jpeg')`
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      
      <div className="container-custom relative z-10">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Explore Goa's Beauty <br/>
            <span className="text-secondary-400">Your Way</span>
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-100">
            Premium transport services tailored to your needs. Experience the best of Goa with our reliable solutions.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 mb-8">
            <a href="#book-now" className="btn btn-primary">
              Book Now <ArrowRight className="ml-2 h-5 w-5" />
            </a>
            <a href="#services" className="btn btn-secondary">
              Explore Services
            </a>
          </div>
          
          <div className="flex flex-wrap gap-4">
            <div className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <MapPin className="h-5 w-5 mr-2 text-secondary-400" />
              <span>All Goa Coverage</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <span>24/7 Service</span>
            </div>
            <div className="flex items-center bg-white/10 backdrop-blur px-4 py-2 rounded-lg">
              <span>Free Cancellation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;