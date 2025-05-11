import React from 'react';
import { ArrowRight, Clock, Shield, Star } from 'lucide-react';
import Button from './ui/Button';

const Hero: React.FC = () => {
  return (
    <section 
      id="home" 
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-gradient-to-br from-blue-900 to-blue-950 text-white"
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-4">
            Yousuf Mobile Mechanic <span className="text-red-500">You Can Trust</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 mb-8 max-w-xl">
              Expert mechanics, quality parts, and exceptional service. 
              We keep your vehicle running smoothly with our comprehensive automotive care.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Button href="#contact" variant="primary" rightIcon={<ArrowRight />}>
                Book Service
              </Button>
              <Button href="#services" variant="outline">
                Explore Services
              </Button>
            </div>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-8">
              <div className="flex items-center">
                <Clock className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium">Fast Service</span>
              </div>
              <div className="flex items-center">
                <Shield className="h-5 w-5 text-red-500 mr-2" />
                <span className="text-sm font-medium">Quality Guarantee</span>
              </div>
              <div className="flex items-center">
                <span className="text-sm font-medium"> </span>
              </div>
            </div>
          </div>
          
          <div className="md:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/6873088/pexels-photo-6873088.jpeg" 
                alt="Mechanic working on car" 
                className="rounded-lg shadow-xl w-full"
              />
              {/* <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="flex items-center">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-5 w-5 text-yellow-500 fill-current" />
                    ))}
                  </div>
                  <span className="ml-2 text-blue-900 font-bold">500+ Happy Customers</span>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;