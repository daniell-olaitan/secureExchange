'use client'
import React, { useState } from 'react';
// components/SignupForm.js
// import { useState } from 'react';

const SignupForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // Handle form submission logic
    console.log('Form submitted:', formData);
  };
  const handleGoogleSignUp = () => {
    // Handle Google sign up logic here
    console.log('Google Sign Up');
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center text-gray-800">Sign Up</h2>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border 
              border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200
               focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-indigo-200 
              focus:border-indigo-500 text-gray-900"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              required
              className="w-full px-3 py-2 mt-1 border border-gray-300 rounded-lg shadow-sm f
              ocus:outline-none focus:ring 
              focus:ring-indigo-200 focus:border-indigo-500 text-gray-700"
            />
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
            >
              Sign Up
            </button>
          </div>
        </form>
        <div className="flex items-center justify-between">
          <span className="border-t border-gray-300 w-full"></span>
          <span className="px-2 text-gray-500">or</span>
          <span className="border-t border-gray-300 w-full"></span>
        </div>
        <div>
          <button
            onClick={handleGoogleSignUp}
            className="w-full px-4 py-2 font-bold text-white bg-gray-600 rounded-lg hover:bg-gray-700 focus:outline-none focus:ring focus:ring-red-200 focus:ring-opacity-50 flex items-center justify-center"
          >
            <svg className="w-5 h-5 mr-2" viewBox="0 0 48 48">
              <path fill="#EA4335" d="M24 9.5c3.67 0 6.19 1.42 8.06 2.71l5.92-5.92C33.96 2.79 29.42 1 24 1 14.75 1 7.15 6.7 3.85 14.44l6.99 5.42C12.08 13.34 17.52 9.5 24 9.5z"></path>
              <path fill="#4285F4" d="M46.62 20.51H24v8.98h13.09c-1.18 3.24-4.1 7.52-9.09 8.48v6.64h14.64c8.57-7.9 9.36-18.45 9.36-23.62 0-1.61-.14-3.17-.38-4.7z"></path>
              <path fill="#FBBC05" d="M33.91 29.49H24v8.98c6.43 0 11.82-4.42 13.91-8.98z"></path>
              <path fill="#34A853" d="M10.84 26.86C10.07 25.11 9.5 23.18 9.5 21c0-2.18.57-4.11 1.34-5.86l-6.99-5.42C.6 14.53 0 17.69 0 21c0 3.31.6 6.47 3.85 9.56l6.99-5.42z"></path>
              <path fill="none" d="M0 37h48v11H0z"></path>
            </svg>
            Sign Up with Google
          </button>
        </div>
      </div>
    </div>
  );
};

export default SignupForm;
