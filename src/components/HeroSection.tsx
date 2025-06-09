import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, MapPin, Clock, Shield, Star, CheckCircle } from 'lucide-react';

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
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-primary-800/30 to-primary-700/40"></div>
      
      {/* Animated Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-white/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-400/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      
      <div className="container-custom relative z-10 pt-32 pb-20">
        <div ref={contentRef} className="max-w-4xl mx-auto text-center text-white">
          {/* Main Heading */}
          <h1 className="hero-title font-heading text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
            Explore Goa's Beauty
            <br />
            <span className="bg-gradient-to-r from-secondary-300 to-accent-400 bg-clip-text text-transparent">
              Your Way
            </span>
          </h1>
          
          {/* Subtitle */}
          <p className="hero-subtitle text-xl md:text-2xl mb-8 max-w-3xl mx-auto leading-relaxed text-white/90 font-medium">
            Premium pickup, drop, and rental services tailored to your needs. 
            Experience the best of Goa with our reliable, comfortable, and affordable transport solutions.
          </p>
          
          {/* CTA Buttons */}
          <div className="hero-cta flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a 
              href="#book-now"
              className="group bg-accent-500 hover:bg-accent-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-2xl hover:scale-105 transform inline-flex items-center justify-center text-lg"
            >
              Book Now 
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </a>
            <a 
              href="#services"
              className="group bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300 hover:shadow-xl border border-white/30 hover:border-white/50 inline-flex items-center justify-center text-lg"
            >
              Explore Services
            </a>
          </div>
          
          {/* Trust Badges */}
          <div className="hero-badges grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-4xl mx-auto">
            <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-center space-x-3 hover:bg-white/20 transition-all duration-300">
              <MapPin className="h-6 w-6 text-secondary-300 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-white">All Goa Coverage</div>
                <div className="text-sm text-white/80">North & South Goa</div>
              </div>
            </div>
            
            <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-center space-x-3 hover:bg-white/20 transition-all duration-300">
              <Clock className="h-6 w-6 text-secondary-300 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-white">24/7 Service</div>
                <div className="text-sm text-white/80">Always Available</div>
              </div>
            </div>
            
            <div className="trust-badge bg-white/15 backdrop-blur-md border border-white/20 rounded-xl p-4 flex items-center justify-center space-x-3 hover:bg-white/20 transition-all duration-300">
              <Shield className="h-6 w-6 text-secondary-300 flex-shrink-0" />
              <div className="text-left">
                <div className="font-semibold text-white">Free Cancellation</div>
                <div className="text-sm text-white/80">Up to 24 hours</div>
              </div>
            </div>
          </div>

          {/* Social Proof */}
          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-8 text-white/80">
            <div className="flex items-center space-x-2">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <span className="font-medium">4.9/5 Rating</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="font-medium">1000+ Happy Customers</span>
            </div>
            
            <div className="flex items-center space-x-2">
              <CheckCircle className="h-5 w-5 text-green-400" />
              <span className="font-medium">Verified & Licensed</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;