import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import 'react-toastify/dist/ReactToastify.css';
import { validateUsername, validateEmail } from '../validation/Validation';

const Registration = () => {
  const navigate = useNavigate();
  const [loginForm, setLoginForm] = useState({ email: '', password: '' });
  const [signupForm, setSignupForm] = useState({ username: '', email: '' });
  const [signupErrors, setSignupErrors] = useState({ username: '', email: '' });
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleLoginChange = (e) =>
    setLoginForm({ ...loginForm, [e.target.name]: e.target.value });

  const handleSignupChange = (e) => {
    const { name, value } = e.target;
    setSignupForm({ ...signupForm, [name]: value });

    let error = '';
    if (name === 'username') {
      error = validateUsername(value);
    } else if (name === 'email') {
      error = validateEmail(value);
    }

    setSignupErrors((prevErrors) => ({ ...prevErrors, [name]: error }));
  };

  const handleLogin = () => {
    if (!loginForm.email || !loginForm.password) {
      return toast.error('All fields are required');
    }
    toast.success('Login successful');
    navigate('/');
  };

  const handleSendOtp = () => {
    if (!signupForm.username || !signupForm.email) {
      return toast.error('All fields are required');
    }
    if (signupErrors.username || signupErrors.email) {
      return toast.error('Fix form errors before proceeding');
    }
    toast.success('OTP Sent');
  };

  return (
    <div className="container auth-container py-5">
      <ToastContainer />
      <div className="row justify-content-center gap-5">
        {/* Login Form */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm p-4">
            <h3 className="mb-4">Login</h3>
            <input
              type="email"
              className="form-control mb-3"
              placeholder="Your Email"
              name="email"
              value={loginForm.email}
              onChange={handleLoginChange}
            />
            <div className="position-relative mb-3">
              <input
                type={showLoginPassword ? 'text' : 'password'}
                className="form-control pe-5"
                placeholder="Password"
                name="password"
                value={loginForm.password}
                onChange={handleLoginChange}
              />
              <span
                className="password-toggle-icon"
                onClick={() => setShowLoginPassword(!showLoginPassword)}
              >
                {showLoginPassword ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  checked={rememberMe}
                  onChange={() => setRememberMe(!rememberMe)}
                />
                <label className="form-check-label">Remember me</label>
              </div>
              <a href="/forgot-password" className="small text-muted">Forgot password?</a>
            </div>
            <button className="btn-teal" onClick={handleLogin}>Log in</button>
          </div>
        </div>

        {/* Signup Form */}
        <div className="col-md-5 mb-4">
          <div className="card shadow-sm p-4">
            <h3 className="mb-3">Create an Account</h3>
            <p className="small text-muted mb-4">
              Your personal data will be used to support your experience throughout this website,
              to manage access to your account, and for other purposes described in our privacy policy.
            </p>
            <input
              type="text"
              className="form-control mb-1"
              placeholder="Username"
              name="username"
              value={signupForm.username}
              onChange={handleSignupChange}
            />
            {signupErrors.username && (
              <div className="alert alert-danger py-1 px-2 mt-1">{signupErrors.username}</div>
            )}

            <input
              type="email"
              className="form-control mb-1 mt-3"
              placeholder="Email"
              name="email"
              value={signupForm.email}
              onChange={handleSignupChange}
            />
            {signupErrors.email && (
              <div className="alert alert-danger py-1 px-2 mt-1">{signupErrors.email}</div>
            )}

            <button className="btn-teal mt-3" onClick={handleSendOtp}>Send OTP</button>
            <p className="text-center mt-3 small">
              Already have an account? <a href="/login" className="text-teal">Sign in now</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;