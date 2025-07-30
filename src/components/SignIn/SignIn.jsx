import { useState, useEffect } from "react";
import loginbc from "../../assets/images/loginbc.jpg";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { setClearError } from "../../redux/features/authSlice/authSlice";
import axios from "axios";

const SignIn = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { isLoading, error } = useSelector((state) => state.auth);

  const [signUpValue, setSignUpValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    mobile: "",
    password: "",
  });

  const [validationErrors, setValidationErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    setValidationErrors((prev) => ({
      ...prev,
      [name]: "", // Clear field-specific error as user types
    }));
  };

  const validate = () => {
    const errors = {};
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;

    if (!signUpValue.firstName.trim())
      errors.firstName = "First name is required";
    if (!signUpValue.lastName.trim()) errors.lastName = "Last name is required";

    if (!signUpValue.email.trim()) {
      errors.email = "Email is required";
    } else if (!emailRegex.test(signUpValue.email)) {
      errors.email = "Invalid email format";
    }

    if (!signUpValue.mobile.trim()) {
      errors.mobile = "Mobile number is required";
    } else if (!mobileRegex.test(signUpValue.mobile)) {
      errors.mobile = "Mobile number must be 10 digits";
    }

    if (!signUpValue.password.trim()) {
      errors.password = "Password is required";
    } else if (signUpValue.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
    } else if (!/[A-Z]/.test(signUpValue.password)) {
      errors.password = "Password must contain at least one uppercase letter";
    } else if (!/[0-9]/.test(signUpValue.password)) {
      errors.password = "Password must contain at least one number";
    } else if (!/[!@#$%^&*(),.?":{}|<>]/.test(signUpValue.password)) {
      errors.password = "Password must contain at least one special character";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validate();
    if (Object.keys(errors).length > 0) {
      setValidationErrors(errors);
      return;
    }

    try {
      const res = await axios.post(
        "http://localhost:5000/api/v1/register",
        signUpValue
      );
      toast.success(res.data.message);
      navigate("/");
    } catch (err) {
      const message = err?.response?.data?.message || "Something went wrong!";
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
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="bg-white p-8 rounded-lg shadow-lg w-96 bg-opacity-80">
        <h2 className="text-2xl font-semibold text-center mb-6">Sign Up</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            autoComplete="username"
            style={{ display: "none" }}
          />

          {[
            { label: "First Name", name: "firstName" },
            { label: "Last Name", name: "lastName" },
            { label: "Email", name: "email" },
            { label: "Mobile", name: "mobile" },
            { label: "Password", name: "password", type: "password" },
          ].map(({ label, name, type = "text" }) => (
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
              {validationErrors[name] && (
                <p className="text-red-500 text-sm mt-1">
                  {validationErrors[name]}
                </p>
              )}
            </div>
          ))}

          <button
            type="submit"
            disabled={isLoading}
            className="w-full py-2 px-4 bg-green-500 text-white rounded-lg hover:bg-green-600 transition"
          >
            {isLoading ? "Signing up..." : "Sign Up"}
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
