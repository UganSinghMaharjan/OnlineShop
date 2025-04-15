import React from 'react';
import loginbc from '../../assets/images/loginbc.jpg';
import { NavLink } from 'react-router-dom';

const Login = () => {
  return (
    <div 
      className="flex justify-center items-center min-h-screen" 
      style={{ backgroundImage: `url(${loginbc})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form>
          {/* Username Input */}
          <div className="mb-4">
            <label htmlFor="username" className="block text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Enter your username"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Enter your password"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
          >
            Log In
          </button>

          {/* Sign In Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <NavLink to="/signin" className='text-sm font-light text-blue-600 hover:underline mt-1'>
              Sign Up
            </NavLink >
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
