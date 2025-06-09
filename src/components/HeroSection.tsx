import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, MapPin, Clock, Shield, Star, CheckCircle, Car, Users, CreditCard } from 'lucide-react';
import BookingSection from './BookingSection';

const HeroSection: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Hero content animation
      gsap.fromTo('.hero-title', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out', delay: 0.3 }
      );
      
      gsap.fromTo('.hero-subtitle', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.6 }
      );
      
      gsap.fromTo('.hero-cta', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 0.9 }
      );
      
      gsap.fromTo('.hero-badges', 
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out', delay: 1.2 }
      );

      gsap.fromTo('.hero-booking-card', 
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.5 }
      );

      // Floating animation for trust badges
      gsap.to('.trust-badge', {
        y: -5,
        duration: 2,
        ease: 'power2.inOut',
        yoyo: true,
        repeat: -1,
        stagger: 0.2
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <div 
      ref={heroRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ 
        backgroundImage: `linear-gradient(135deg, rgba(0, 188, 212, 0.15) 0%, rgba(0, 150, 167, 0.25) 50%, rgba(0, 96, 100, 0.35) 100%), url('https://images.pexels.com/photos/1174732/pexels-photo-1174732.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&dpr=2')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/30 via-primary-800/40 to-primary-700/50"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column - Hero Content */}
          <div ref={contentRef} className="lg:col-span-7 text-white">
            {/* Main Heading */}
            <h1 className="hero-title font-heading text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              Explore Goa with
              <br />
              <span className="bg-gradient-to-r from-secondary-300 to-accent-400 bg-clip-text text-transparent">
                Complete Ease
              </span>
            </h1>
            
            {/* Subtitle */}
            <p className="hero-subtitle text-lg md:text-xl mb-8 max-w-2xl leading-relaxed text-white/90 font-medium">
              Premium pickup, drop, and rental services tailored to your needs. 
              Experience the best of Goa with our reliable, comfortable, and affordable transport solutions.
            </p>
            
            {/* CTA Buttons */}
            <div className="hero-cta flex flex-col sm:flex-row gap-4 mb-12">
              <a 
                href="#vehicles"
                className="group bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform inline-flex items-center justify-center text-lg"
              >
                Explore Fleet 
                <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
              </a>
              <a 
                href="/contact"
                className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl border border-white/30 hover:border-white/50 inline-flex items-center justify-center text-lg"
              >
                Contact Us
              </a>
            </div>
            
            {/* Trust Badges */}
            <div className="hero-badges grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl">
              <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300">
                <CheckCircle className="h-6 w-6 text-green-400 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-white text-sm">Verified Vehicles</div>
                  <div className="text-xs text-white/80">Licensed & Insured</div>
                </div>
              </div>
              
              <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300">
                <Clock className="h-6 w-6 text-secondary-300 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-white text-sm">On-Time Pickup</div>
                  <div className="text-xs text-white/80">Always Punctual</div>
                </div>
              </div>
              
              <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center space-x-3 hover:bg-white/20 transition-all duration-300">
                <CreditCard className="h-6 w-6 text-accent-300 flex-shrink-0" />
                <div className="text-left">
                  <div className="font-semibold text-white text-sm">Easy Payments</div>
                  <div className="text-xs text-white/80">Multiple Options</div>
                </div>
              </div>
            </div>

            {/* Social Proof */}
            <div className="mt-12 flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
                <span className="font-medium">4.9/5 Rating</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Users className="h-5 w-5 text-green-400" />
                <span className="font-medium">1000+ Happy Customers</span>
              </div>
              
              <div className="flex items-center space-x-2">
                <Shield className="h-5 w-5 text-blue-400" />
                <span className="font-medium">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Right Column - Booking Form */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="hero-booking-card bg-white/95 backdrop-blur-md rounded-2xl shadow-2xl border border-white/20 overflow-hidden">
              <div className="bg-gradient-to-r from-primary-600 to-primary-700 text-white p-6 text-center">
                <h3 className="font-heading text-xl font-bold mb-2">Book Your Ride</h3>
                <p className="text-primary-100 text-sm">Quick & Easy Booking</p>
              </div>
              
              {/* Booking Form Content */}
              <div className="p-6">
                <BookingFormContent />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce lg:hidden">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

// Simplified booking form content for the hero
const BookingFormContent: React.FC = () => {
  return (
    <form className="space-y-4">
      {/* Service Type Toggle */}
      <div className="flex space-x-2 mb-6">
        <button
          type="button"
          className="flex-1 py-2 px-4 bg-primary-600 text-white rounded-lg text-sm font-medium"
        >
          Pickup & Drop
        </button>
        <button
          type="button"
          className="flex-1 py-2 px-4 bg-gray-100 text-gray-700 rounded-lg text-sm font-medium hover:bg-gray-200"
        >
          Vehicle Rental
        </button>
      </div>

      {/* Location Fields */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Pickup Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm">
              <option value="">Select pickup location</option>
              <option value="calangute">Calangute Beach</option>
              <option value="baga">Baga Beach</option>
              <option value="panjim">Panjim City</option>
              <option value="airport">Goa Airport</option>
              <option value="margao">Margao Station</option>
            </select>
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Drop Location
          </label>
          <div className="relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
            <select className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm">
              <option value="">Select drop location</option>
              <option value="calangute">Calangute Beach</option>
              <option value="baga">Baga Beach</option>
              <option value="panjim">Panjim City</option>
              <option value="airport">Goa Airport</option>
              <option value="margao">Margao Station</option>
            </select>
          </div>
        </div>
      </div>

      {/* Date and Time */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Date
          </label>
          <input
            type="date"
            className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Time
          </label>
          <input
            type="time"
            className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
      </div>

      {/* Contact Info */}
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Phone Number
          </label>
          <input
            type="tel"
            placeholder="Your contact number"
            className="w-full px-3 py-3 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 text-sm"
          />
        </div>
      </div>

      {/* Book Button */}
      <button
        type="submit"
        className="w-full bg-accent-500 hover:bg-accent-600 text-white font-semibold py-3 rounded-lg transition-all hover:shadow-lg text-sm"
      >
        Book Now - Get Instant Quote
      </button>

      {/* Quick Info */}
      <div className="text-center pt-4 border-t border-gray-100">
        <p className="text-xs text-gray-500 mb-2">
          ✅ Free cancellation up to 24 hours
        </p>
        <p className="text-xs text-gray-500">
          📞 24/7 Support: <a href="tel:+918001234567" className="text-primary-600 hover:underline">+91 800 123 4567</a>
        </p>
      </div>
    </form>
  );
};

export default HeroSection;