import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';


const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post(`${import.meta.env.VITE_BACKEND_URL}/api/contact`, formData);
      toast.success('Message sent successfully!');
      setFormData({ name: '', email: '', message: '' });
    } catch (err) {
      toast.error('Failed to send message');
    }
  };

  return (
    <div className="max-w-2xl mx-auto mt-20 p-8 bg-green-50 rounded-2xl shadow-lg">
  <h2 className="text-3xl font-bold text-primary mb-6 text-center">Contact Us</h2>
  <form onSubmit={handleSubmit} className="space-y-5">
    <div>
      <label className="block mb-1 text-gray-700 font-medium">Your Name</label>
      <input
        type="text"
        name="name"
        value={formData.name} // ✅ bind to state
    onChange={handleChange}
        placeholder="Enter your name"
        required
        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block mb-1 text-gray-700 font-medium">Your Email</label>
      <input
        type="email"
        name="email"
        value={formData.email} // ✅ bind to state
        onChange={handleChange}
        placeholder="Enter your email"
        required
        className="w-full p-3 border border-green-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div>
      <label className="block mb-1 text-gray-700 font-medium">Your Message</label>
      <textarea
        name="message"
        value={formData.message} // ✅ bind to state
  onChange={handleChange}
        placeholder="Type your message here"
        required
        className="w-full p-3 border border-green-200 rounded-lg h-32 resize-none focus:outline-none focus:ring-2 focus:ring-primary"
      />
    </div>

    <div className="text-center">
      <button
        type="submit"
        className="bg-primary hover:bg-primary-dull text-white font-semibold py-2 px-6 rounded-lg transition duration-300"
      >
        Send Message
      </button>
    </div>
  </form>
</div>

  );
};

export default Contact;
