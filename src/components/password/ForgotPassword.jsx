import React, { useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';

const ForgotPassword = () => {
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async () => {
        if (!email) return toast.error('Enter your email');

        try {
            const res = await fetch('http://localhost:5000/api/v1/users/forgot-password', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ email }),
            });

            const data = await res.json();

            if (res.ok) {
                toast.success(data.message);
                localStorage.setItem('resetEmail', email); // for next step
                setTimeout(() => navigate('/reset-password'), 1500);
            } else {
                toast.error(data.message);
            }
        } catch (err) {
            toast.error('Something went wrong');
        }
    };

    return (
        <div style={container}>
            <ToastContainer />
            <div style={card}>
                <h2 style={heading}>Forgot Password</h2>
                <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)}
                    style={inputStyle}
                />
                <button onClick={handleSubmit} style={buttonStyle}>Send OTP</button>
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

export default ForgotPassword;