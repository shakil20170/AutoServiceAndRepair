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

        

        
      </div>
    </section>
  );
};

export default About;