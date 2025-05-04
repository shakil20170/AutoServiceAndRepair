import React, { useState } from 'react';
import { Mail, Phone, Clock, MapPin, Calendar, Send } from 'lucide-react';
import Button from './ui/Button';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  preferredDate: string;
}

const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
    preferredDate: '',
  });
  
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  
  const serviceOptions = [
    'Engine Repair',
    'Brake Service',
    'Electrical Repair',
    'AC & Heating',
    'Transmission Service',
    'Scheduled Maintenance',
    'Suspension & Steering',
    'Emergency Service',
    'Vehicle Inspection',
    'Other',
  ];
  
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    
    // Clear error for this field when user types
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }));
    }
  };
  
  const validateForm = (): boolean => {
    const newErrors: Partial<FormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^\S+@\S+\.\S+$/.test(formData.email)) {
      newErrors.email = 'Email is invalid';
    }
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    }
    
    if (!formData.service) {
      newErrors.service = 'Please select a service';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      setIsSubmitting(true);
      
      // Simulate API call
      setTimeout(() => {
        setIsSubmitting(false);
        setSubmitSuccess(true);
        
        // Reset form after successful submission
        setFormData({
          name: '',
          email: '',
          phone: '',
          service: '',
          message: '',
          preferredDate: '',
        });
        
        // Reset success message after 5 seconds
        setTimeout(() => {
          setSubmitSuccess(false);
        }, 5000);
      }, 1500);
    }
  };

  return (
    <section id="contact" className="py-16 md:py-24">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have questions or need to schedule a service? Reach out to our team for prompt assistance.
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12">
          <div className="lg:w-1/2">
            <form onSubmit={handleSubmit} className="bg-white rounded-lg shadow-lg p-8">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">
                Send Us a Message
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label 
                    htmlFor="name" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Your Name*
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.name ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="John Doe"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">{errors.name}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="email" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Email Address*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.email ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="john@example.com"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="phone" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Phone Number*
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.phone ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500`}
                    placeholder="(123) 456-7890"
                  />
                  {errors.phone && (
                    <p className="text-red-500 text-sm mt-1">{errors.phone}</p>
                  )}
                </div>
                
                <div>
                  <label 
                    htmlFor="service" 
                    className="block text-gray-700 font-medium mb-2"
                  >
                    Service Needed*
                  </label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className={`w-full px-4 py-3 rounded-md border ${
                      errors.service ? 'border-red-500' : 'border-gray-300'
                    } focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white`}
                  >
                    <option value="">Select a service</option>
                    {serviceOptions.map((service) => (
                      <option key={service} value={service}>
                        {service}
                      </option>
                    ))}
                  </select>
                  {errors.service && (
                    <p className="text-red-500 text-sm mt-1">{errors.service}</p>
                  )}
                </div>
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="preferredDate" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  Preferred Date (Optional)
                </label>
                <input
                  type="date"
                  id="preferredDate"
                  name="preferredDate"
                  value={formData.preferredDate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              
              <div className="mb-6">
                <label 
                  htmlFor="message" 
                  className="block text-gray-700 font-medium mb-2"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
                  placeholder="Tell us about your vehicle and the issue you're experiencing..."
                ></textarea>
              </div>
              
              <div className="flex justify-end">
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={isSubmitting}
                  rightIcon={<Send className="h-5 w-5" />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </div>
              
              {submitSuccess && (
                <div className="mt-6 p-4 bg-green-100 text-green-800 rounded-lg">
                  Thank you! Your message has been sent successfully. We'll get back to you shortly.
                </div>
              )}
            </form>
          </div>
          
          <div className="lg:w-1/2">
            <div className="bg-blue-900 text-white rounded-lg shadow-lg p-8 h-full">
              <h3 className="text-2xl font-bold mb-8">Get In Touch</h3>
              
              <div className="space-y-6 mb-8">
                <div className="flex items-start">
                  <Phone className="h-6 w-6 text-red-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Phone</h4>
                    <p>(123) 456-7890</p>
                    <p className="text-sm text-gray-300 mt-1">Mon-Fri 8am-6pm, Sat 8am-2pm</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-red-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Email</h4>
                    <p>service@autocare.example.com</p>
                    <p className="text-sm text-gray-300 mt-1">We respond within 24 hours</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-red-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Location</h4>
                    <p>123 Repair Street</p>
                    <p>Automotive City, AC 12345</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-red-400 mt-1 mr-4" />
                  <div>
                    <h4 className="font-bold mb-1">Business Hours</h4>
                    <div className="grid grid-cols-2 gap-x-4 gap-y-1">
                      <p>Monday - Friday:</p>
                      <p>8:00 AM - 6:00 PM</p>
                      <p>Saturday:</p>
                      <p>8:00 AM - 2:00 PM</p>
                      <p>Sunday:</p>
                      <p>Closed</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-blue-800 p-6 rounded-lg">
                <div className="flex items-center mb-4">
                  <Calendar className="h-6 w-6 text-red-400 mr-3" />
                  <h4 className="text-xl font-bold">Need Emergency Service?</h4>
                </div>
                <p className="mb-4">
                  We offer 24/7 emergency roadside assistance for our customers.
                </p>
                <a 
                  href="tel:+1234567890" 
                  className="inline-block bg-red-500 hover:bg-red-600 transition-colors text-white font-bold py-3 px-6 rounded-md"
                >
                  Call Emergency Line
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;