import React from 'react';
import { Clock, Map, Award, Users, Shield, Wrench } from 'lucide-react';
import { motion } from '../utils/motion';

const About: React.FC = () => {
  const stats = [
    { icon: Clock, value: '15+', label: 'Years Experience' },
    { icon: Users, value: '10K+', label: 'Happy Customers' },
    { icon: Wrench, value: '25+', label: 'Expert Mechanics' },
    { icon: Shield, value: '100%', label: 'Quality Guarantee' },
  ];

  return (
    <section id="about" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          <div className="lg:w-1/2">
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3807398/pexels-photo-3807398.jpeg" 
                alt="Professional mechanics team" 
                className="rounded-lg shadow-xl w-full"
              />
              <div className="absolute -bottom-6 -right-6 bg-red-500 text-white p-6 rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                  <span className="text-4xl font-bold">15+</span>
                  <span className="text-sm uppercase tracking-wider">Years of Excellence</span>
                </div>
              </div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
              The Auto Repair Shop You Can Trust
            </h2>
            
            <p className="text-gray-700 mb-6">
              At AutoCare, we've been providing top-quality automotive repair services since 2008. 
              Our team of ASE-certified mechanics has the expertise and experience to handle all 
              makes and models, from routine maintenance to complex repairs.
            </p>
            
            <p className="text-gray-700 mb-8">
              What sets us apart is our commitment to honesty, transparency, and exceptional 
              customer service. We use only the highest quality parts and advanced diagnostic 
              equipment to ensure your vehicle receives the best care possible.
            </p>
            
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mb-8">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex flex-col items-center"
                >
                  <stat.icon className="h-8 w-8 text-red-500 mb-2" />
                  <span className="text-2xl font-bold text-blue-900">{stat.value}</span>
                  <span className="text-sm text-gray-600 text-center">{stat.label}</span>
                </motion.div>
              ))}
            </div>
            
            <div className="bg-gray-100 p-6 rounded-lg">
              <div className="flex items-start">
                <Award className="h-10 w-10 text-red-500 mt-1 mr-4 flex-shrink-0" />
                <div>
                  <h3 className="text-xl font-bold text-blue-900 mb-2">Certified Professionals</h3>
                  <p className="text-gray-700">
                    Our technicians are ASE-certified with ongoing training to stay current with the 
                    latest automotive technologies and repair techniques.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-16 pt-12 border-t border-gray-200">
          <div className="text-center mb-12">
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Why Choose AutoCare?</h3>
            <p className="text-gray-600 max-w-2xl mx-auto">
              We combine technical expertise with exceptional customer service to provide 
              an automotive repair experience you can trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Shield className="h-10 w-10 text-red-500 mr-3" />
                <h4 className="text-xl font-bold text-blue-900">Quality Guarantee</h4>
              </div>
              <p className="text-gray-700">
                We stand behind our work with comprehensive warranties on parts and labor.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Map className="h-10 w-10 text-red-500 mr-3" />
                <h4 className="text-xl font-bold text-blue-900">Convenient Location</h4>
              </div>
              <p className="text-gray-700">
                Centrally located with comfortable waiting areas and free Wi-Fi for your convenience.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <div className="flex items-center mb-4">
                <Clock className="h-10 w-10 text-red-500 mr-3" />
                <h4 className="text-xl font-bold text-blue-900">Timely Service</h4>
              </div>
              <p className="text-gray-700">
                We respect your time with efficient service and clear communication about timelines.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;