import React from 'react';
import loginbc from '../../assets/images/loginbc.jpg';
import { NavLink } from 'react-router-dom';

const SignIn = () => {
  return (
    <div 
      className="flex justify-center items-center min-h-screen" 
      style={{ backgroundImage: `url(${loginbc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form>
          {/* Username */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Choose a username"
            />
          </div>

          {/* Email */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Enter your email"
            />
          </div>

          {/* Password */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Create a password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            Sign Up
          </button>

          {/* Login Redirect */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <NavLink to="/login" className='text-sm font-light text-blue-600 hover:underline mt-1'>
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
