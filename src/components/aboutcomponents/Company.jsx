import React from 'react';
import { FaGlobe } from "react-icons/fa";

function Company() {
    return (
        <section className="container py-5">
            <div className="row align-items-center">
                {/* Left Column: Icon Box */}


                {/* Right Column: Text */}
                <div className="col-md-6">
                    <p className="text-uppercase text-success fw-bold small">Our Company</p>
                    <h2 className="fw-semibold mb-4" style={{ fontSize: "2.3rem" }}>
                        We are Building the <br />
                        Ultimate E-Commerce <br />
                        Marketplace for All Your <br />
                        Shopping Needs
                    </h2>
                    <p className="text-muted">
                        At GOSHOPIFY, we aim to provide a seamless online shopping experience across various
                        categories, including Beauty & Health, Books & Media, Electronics, Clothing, Sports,
                        and more. Our platform is designed to help you easily find and purchase the best
                        products from trusted vendors.
                    </p>
                    <p className="text-muted">
                        We are committed to offering a wide range of products, ensuring quality, and making
                        shopping convenient, fast, and secure for our customers. Whether you're looking for the
                        latest tech gadgets, fashion, or health products, GOSHOPIFY has everything you need to
                        get things done!
                    </p>
                </div>

                <div className="col-md-6">
                    <div className="bg-light-green p-5" style={{ minHeight: "250px" }}>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Company;
