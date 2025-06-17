import React from 'react';

const TabsSection = () => {
    return (
        <div className="container my-5">
            {/* Tab Buttons */}
            <div className="d-flex gap-2">
                <button className="featured-btn fw-bold">Featured</button>
                <button className="neutral-btn">Popular</button>
                <button className="neutral-btn">New added</button>
            </div>

            {/* Promo Card */}
            <div className="promo-card">
                <p className="text-primary fw-semibold mb-2">Repair Services</p>
                <h2 className="fs-1 mb-3" style={{ maxWidth: '700px' }}>
                    We're an goshopify <br />
                    Authorised Service Provider
                </h2>

                <button className="learn-btn">Learn More</button>
            </div>
        </div>
    );
};

export default TabsSection;
