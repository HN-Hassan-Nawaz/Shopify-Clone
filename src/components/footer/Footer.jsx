import React from 'react';
import Newsletter from './Newsletter';

export default function Footer() {
    return (
        <>
            <Newsletter />

            <footer className="bg-white pt-5 border-top">
                <div className="container px-3">
                    <div className="row gy-4 text-secondary">

                        <div className="col-md-4">
                            <img src="/logo.png" alt="Logo" style={{ width: '120px' }} className="mb-1" />
                            <h6 className="fw-bold mt-2">Contact</h6>
                            <p className="mb-1"><strong>Address:</strong> Sahiwal Punjab Pakistan</p>
                            <p className="mb-1"><strong>Phone:</strong> (+92) 306 1546939 / (+92) 341 4061040</p>
                            <p className="mb-2"><strong>Hours:</strong> 10:00 - 18:00, Mon - Sat</p>

                            {/* Follow Us Section */}
                            <h6 className="fw-bold mt-4 mb-2">Follow Us</h6>
                            <div className="d-flex flex-row gap-2 fs-5 mb-4 social-icons">
                                <a href="#" className="hover-link">
                                    <img src="/icon-facebook.svg" alt="Facebook" style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" className="hover-link">
                                    <img src="/icon-twitter.svg" alt="Twitter" style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" className="hover-link">
                                    <img src="/icon-instagram.svg" alt="Instagram" style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" className="hover-link">
                                    <img src="/icon-pinterest.svg" alt="Pinterest" style={{ width: '24px', height: '24px' }} />
                                </a>
                                <a href="#" className="hover-link">
                                    <img src="/icon-youtube.svg" alt="YouTube" style={{ width: '24px', height: '24px' }} />
                                </a>
                            </div>

                        </div>

                        <div className="col-md-2">
                            <h6 className="text-black fs-4">About</h6>
                            <ul className="list-unstyled mt-4 py-2 about-list">
                                <li><a href="#" className="text-decoration-none text-black hover-link">About Us</a></li>
                                <li><a href="#" className="text-decoration-none text-black hover-link">Privacy Policy</a></li>
                                <li><a href="#" className="text-decoration-none text-black hover-link">Terms & Conditions</a></li>
                                <li><a href="#" className="text-decoration-none text-black hover-link">Contact Us</a></li>
                                <li><a href="#" className="text-decoration-none text-black hover-link">Support Center</a></li>
                            </ul>
                        </div>

                        <div className="col-md-2">
                            <h6 className="text-black fs-4">My Account</h6>
                            <ul className="list-unstyled mt-4 py-2 account-list">
                                <li><a href="#" className="text-decoration-none text-black hover-link">Sign In</a></li>
                            </ul>
                        </div>

                        <div className="col-md-4 text-black">
                            <h6 className="fs-4">Install App</h6>
                            <p>From App Store or Google Play</p>
                            <div className="d-flex flex-column gap-2 my-2 mb-4">
                                <img className='border border-2 border-success rounded apps' src="/app-store.jpg" alt="App Store" style={{ height: '50px', width:"170px" }} />
                                <img className='border border-2 border-secondary rounded apps' src="/google-play.jpg" alt="Play Store" style={{ height: '50px', width:"170px" }} />
                            </div>
                            <p className="mt-4">Secured Payment Gateways</p>
                            <img
                                src="/payment-method.png"
                                alt="Payments"
                                className="img-fluid mt-0"
                                style={{ maxWidth: '230px' }}
                            />
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-md-row justify-content-between border-top pt-3 mt-4 mb-3 small px-2 text-muted">
                        <p className="mb-1">© 2025, <span className="text-success">goshopify</span></p>
                        <p className="mb-1">Designed by <a href="https://goshopify.shop" className="text-success text-decoration-none hover-link">goshopify.shop</a>. All rights reserved</p>
                    </div>
                </div>
            </footer>

        </>
    );
}