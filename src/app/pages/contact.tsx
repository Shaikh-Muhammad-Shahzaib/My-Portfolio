"use client"
import { useState } from 'react';
import { FaUser, FaEnvelope, FaPaperPlane } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const validateForm = () => {
    const newErrors = { name: '', email: '', message: '' };

    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Email address is invalid';
    }
    if (!formData.message) newErrors.message = 'Message is required';

    setErrors(newErrors);

    // Return true if no errors
    return Object.values(newErrors).every((error) => error === '');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) return;

    setIsSubmitting(true);

    // Example: Send form data using fetch or use a service like emailjs
    // This is just a mockup for how you'd handle submission
    setTimeout(() => {
      console.log('Form Submitted:', formData);
      setIsSubmitting(false);
      setFormData({ name: '', email: '', message: '' }); // Reset form after submission
    }, 2000);
  };

  return (
    <section id="contact">
      <main className="bg-gradient-to-r from-blue-500 to-purple-600 py-24">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-white text-5xl font-extrabold mb-8">Contact Me</h1>
          <form onSubmit={handleSubmit} className="space-y-6 max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md">
            <div className="relative">
              <FaUser className="absolute left-3 top-3 text-gray-400" />
              <input
                type="text"
                name="name"
                value={formData.name}
                placeholder="Your Name"
                onChange={handleChange}
                className="p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
            </div>

            <div className="relative">
              <FaEnvelope className="absolute left-3 top-3 text-gray-400" />
              <input
                type="email"
                name="email"
                value={formData.email}
                placeholder="Your Email"
                onChange={handleChange}
                className="p-3 pl-10 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
            </div>

            <div className="relative">
              <textarea
                name="message"
                value={formData.message}
                placeholder="Your Message"
                onChange={handleChange}
                className="text-black p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
              />
              {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
            </div>

            <button
              type="submit"
              className="flex items-center justify-center bg-blue-500 text-white py-3 px-6 rounded-md hover:bg-blue-600 transition-colors duration-300"
              disabled={isSubmitting}
            >
              <FaPaperPlane className="mr-2" />
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </main>
    </section>
  );
};

export default Contact;
