import React, { useState, useEffect } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ResetPassword = () => {
    const navigate = useNavigate();
    const [form, setForm] = useState({ otp: '', newPassword: '', confirmPassword: '' });
    const [email, setEmail] = useState('');

    useEffect(() => {
        const savedEmail = localStorage.getItem('resetEmail');
        if (!savedEmail) navigate('/forgot-password');
        else setEmail(savedEmail);
    }, [navigate]);

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleReset = async () => {
        const { otp, newPassword, confirmPassword } = form;

        if (!otp || !newPassword || !confirmPassword)
            return toast.error('All fields are required');

        if (newPassword !== confirmPassword)
            return toast.error('Passwords do not match');

        try {
            const res = await fetch('http://localhost:5000/api/v1/users/reset-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email, otp, newPassword }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message);
                localStorage.removeItem('resetEmail');
                setTimeout(() => navigate('/login'), 1500);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error('Failed to reset password');
        }
    };

    return (
        <div style={container}>
            <ToastContainer />
            <div style={card}>
                <h2 style={heading}>Reset Password</h2>
                <input
                    name="otp"
                    placeholder="Enter OTP"
                    value={form.otp}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <input
                    name="newPassword"
                    type="password"
                    placeholder="New Password"
                    value={form.newPassword}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <input
                    name="confirmPassword"
                    type="password"
                    placeholder="Confirm Password"
                    value={form.confirmPassword}
                    onChange={handleChange}
                    style={inputStyle}
                />
                <button onClick={handleReset} style={buttonStyle}>Reset Password</button>
                <p style={footerText}><a href="/login">Back to login</a></p>
            </div>
        </div>
    );
};

const container = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: '100vh',
    backgroundColor: '#f5f5f5',
};

const card = {
    background: '#fff',
    padding: '2rem',
    borderRadius: '10px',
    boxShadow: '0 0 15px rgba(0,0,0,0.1)',
    maxWidth: '400px',
    width: '100%',
};

const heading = {
    textAlign: 'center',
    marginBottom: '1.5rem',
};

const inputStyle = {
    width: '100%',
    padding: '0.75rem',
    marginBottom: '1rem',
    border: '1px solid #ccc',
    borderRadius: '5px',
};

const buttonStyle = {
    width: '100%',
    padding: '0.75rem',
    backgroundColor: '#0d9488',
    color: '#fff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
};

const footerText = {
    marginTop: '1rem',
    textAlign: 'center',
    fontSize: '0.9rem',
};

export default ResetPassword;
