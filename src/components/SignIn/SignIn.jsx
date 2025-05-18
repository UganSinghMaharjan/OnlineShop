import { useState, useEffect } from 'react';
import loginbc from '../../assets/images/loginbc.jpg';
import { NavLink, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { setClearError } from '../../redux/features/authSlice/authSlice';
import axios from 'axios';

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [signUpValue, setSignUpValue] = useState({
    firstName: '',
    lastName: '',
    email: '',
    mobile: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpValue((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:8000/api/v1/register', signUpValue);
      toast.success(res.data.message);
      navigate('/');
    } catch (err) {
      const message = err?.response?.data?.message || 'Something went wrong!';
      toast.error(message);
    }
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
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          {/* Hidden input to silence autofill script warnings */}
          <input
            type="text"
            name="username"
            autoComplete="username"
            style={{ display: 'none' }}
          />

          {[
            { label: 'First Name', name: 'firstName' },
            { label: 'Last Name', name: 'lastName' },
            { label: 'Email', name: 'email' },
            { label: 'Mobile', name: 'mobile' },
            { label: 'Password', name: 'password', type: 'password' },
          ].map(({ label, name, type = 'text' }) => (
            <div key={name} className="mb-4">
              <label htmlFor={name} className="block text-gray-700">
                {label}
              </label>
              <input
                type={type}
                id={name}
                name={name}
                value={signUpValue[name]}
                onChange={handleChange}
                className="w-full p-2 border border-gray-400 rounded mt-1"
                placeholder={`Enter your ${label.toLowerCase()}`}
              />
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            {isLoading ? 'Signing up...' : 'Sign Up'}
          </button>

          <div className="mt-4 text-center">
            <p className="text-sm text-gray-600">Already have an account?</p>
            <NavLink
              to="/login"
              className="text-sm font-light text-blue-600 hover:underline mt-1"
            >
              Log In
            </NavLink>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
