import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { NavLink } from 'react-router-dom';
import loginbc from '../../assets/images/loginbc.jpg';
import { userLogin } from '../../redux/authAction/authAction';
import { setClearError } from '../../redux/features/authSlice/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [loginValue, setLoginValue] = useState({
    email: '',
    password: '',
  });

  const { email, password } = loginValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(userLogin({ loginValue, toast, navigate }));
  };

  useEffect(() => {
    if (error) {
      toast.error(error);
      dispatch(setClearError());
    }
  }, [error, dispatch]);

  return (
    <div
      className="flex justify-center items-center min-h-screen"
      style={{
        backgroundImage: `url(${loginbc})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Login</h2>
        <form onSubmit={handleSubmit}>
          {/* Email Input */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Enter your email"
              required
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700">
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-400 rounded mt-1"
              placeholder="Enter your password"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition disabled:opacity-60"
          >
            {isLoading ? 'Logging In...' : 'Log In'}
          </button>

          {/* Sign Up Link */}
          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Don't have an account?</p>
            <NavLink
              to="/signin"
              className="text-sm font-light text-blue-600 hover:underline mt-1"
            >
              Sign Up
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
