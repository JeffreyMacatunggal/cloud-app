import React, { useState } from 'react';
import axios from 'axios';

const CompanyForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:3001/add-company', formData);
      alert('Company added successfully!');
      setFormData({
        name: '',
        address: '',
        email: '',
        phone: ''
      });
    } catch (error) {
      alert('Failed to add company.');
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10 bg-white p-8 rounded shadow-md">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-center">Company Management System</h1>
      </header>
      
      <h2 className="text-2xl font-semibold mb-6">Add a Company</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="name">Company Name</label>
          <input type="text" name="name" placeholder="Company Name" value={formData.name} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="address">Address</label>
          <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        
        <div className="mb-4">
          <label className="block text-sm font-medium mb-2" htmlFor="email">Email</label>
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        
        <div className="mb-6">
          <label className="block text-sm font-medium mb-2" htmlFor="phone">Phone</label>
          <input type="text" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} required className="w-full p-2 border rounded" />
        </div>
        
        <button type="submit" className="w-full bg-blue-500 text-white p-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600">
          Add Company
        </button>
      </form>

      <footer className="mt-10">
        <p className="text-center text-sm text-gray-500">© 2023 Your Company Name. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default CompanyForm;