// Newsletter.jsx
import React from 'react';

const Newsletter = () => {
    return (
        <div className="py-4" style={{ backgroundColor: '#a8cbc3' }}>
            <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center gap-3">
                <div className="d-flex align-items-center">
                    <img
                        src="/icon-email.svg"
                        alt="Newsletter Icon"
                        style={{ width: '50px', height: '60px', marginRight: '10px' }}
                    />
                    <strong className="me-2">Sign up to Newsletter</strong>
                    <span className="mx-4 float-right">...and receive $25 coupon for first shopping.</span>
                </div>
                <form className="d-flex" onSubmit={(e) => e.preventDefault()}>
                    <input
                        type="email"
                        className="news-plc"
                        placeholder="Enter your email"
                        required
                    />
                    <button className="btn btn-dark sub-btn" type="submit">
                        Subscribe
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Newsletter;
