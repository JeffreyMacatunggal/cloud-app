import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import PhoneInput from 'react-phone-number-input';  // <-- Import PhoneInput component
import 'react-phone-number-input/style.css';
import { css } from '@emotion/react';




const CompanyForm = () => {
  const [loading, setLoading] = useState(false);
  const [backendReady, setBackendReady] = useState(false);
  const [agreeToTerms, setAgreeToTerms] = useState(false);
  const [showWarning, setShowWarning] = useState(false);
  const override = css`
  display: block;
  margin: 0 auto;
`

  const handlePhoneChange = phone => {
    setFormData(prevState => ({
      ...prevState,
      phone: phone
    }));
  };
  const [formData, setFormData] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });

  const navigate = useNavigate();

  const handleChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!agreeToTerms) {
      setShowWarning(true);
      return;
    }
    setShowWarning(false);
    setLoading(true);
    try {
      await axios.post('http://localhost:3001/add-company', formData);
      navigate('/success');
    } catch (error) {
      alert('Failed to add company.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    const checkBackendStatus = async () => {
      try {
        const response = await axios.get('http://localhost:3001/status');
        if (response.status === 200) {
          setBackendReady(true);
        }
      } catch (error) {
        console.error("Backend is not ready:", error);
        setTimeout(checkBackendStatus, 3000);
      }
    };
    checkBackendStatus();
  }, []);

  if (!backendReady) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-gray-200">
        <p className="text-xl text-gray-800 font-medium">App is loading...</p>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-200">
      <div className="sm:mx-auto sm:w-full sm:max-w-lg p-8 bg-white rounded-lg shadow-md transition-transform transform hover:scale-105">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900 animate__animated animate__fadeIn">Company Management System</h2>

        <form onSubmit={handleSubmit} className="space-y-6 mt-6 animate__animated animate__fadeIn animate__delay-1s">
        <div className="animate__animated animate__fadeIn animate__delay-2s">
            <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Company Name</label>
            <div className="mt-2">
              <input id="name" name="name" type="text" value={formData.name} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          {/* Input field for Address */}
          <div className="animate__animated animate__fadeIn animate__delay-3s">
            <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">Address</label>
            <div className="mt-2">
              <input id="address" name="address" type="text" value={formData.address} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>
          
          {/* Input field for Email */}
          <div className="animate__animated animate__fadeIn animate__delay-4s">
            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email</label>
            <div className="mt-2">
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
            </div>
          </div>

          {/* Input field for Phone */}
          <div className="animate__animated animate__fadeIn animate__delay-5s">
            <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone</label>
            <div className="mt-2 flex rounded-md overflow-hidden" style={{ width: 'fit-content' }}>
              <PhoneInput
                country={'us'} // default country
                value={formData.phone}
                onChange={handlePhoneChange}
                required
                containerstyle={{ display: 'flex' }}
                inputstyle={{ flex: 1 }} // Ensuring the PhoneInput's input field takes the remaining space
              />
            </div>
          </div>


          {/* Agree to Terms checkbox */}
          <div className="animate__animated animate__fadeIn animate__delay-6s">
            <div className="flex items-center space-x-4">
              <input 
                id="terms" 
                name="terms" 
                type="checkbox" 
                checked={agreeToTerms} 
                onChange={e => setAgreeToTerms(e.target.checked)} 
                className="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                style={{ marginRight: '10px' }}

              />
              <label htmlFor="terms" className="block text-sm text-gray-900 pl-2"> 
                I agree to the <a href="#" onClick={e => { e.preventDefault(); alert("Random Terms and Conditions: Lorem ipsum..."); }} className="text-indigo-600 hover:underline">terms and conditions</a>
              </label>
            </div>
            {showWarning && <p className="text-sm text-red-500 mt-2">You must agree to the terms and conditions to proceed.</p>}
          </div>

          {/* Submit Button */}
          <div className="animate__animated animate__fadeIn animate__delay-7s">
            <button 
              type="submit" 
              disabled={!agreeToTerms} 
              className={`flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 ${!agreeToTerms ? 'opacity-50 cursor-not-allowed' : ''}`}>
              Add Company
            </button>
          </div>
        </form>

        {/* Footer */}
        <footer className="mt-10 animate__animated animate__fadeIn animate__delay-7s">
          <p className="text-center text-sm text-gray-500">© 2023 Your Company Name. All rights reserved.</p>
        </footer>
      </div>
    </div>
  );
};

export default CompanyForm;
