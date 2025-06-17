import React from "react";

function TeamSection() {
    return (
        <section className="container py-5">
            {/* Header */}
            <div className="row align-items-center mb-4">
                <div className="col-md-6">
                    <p className="text-uppercase text-success fw-bold small mb-1">Our Team</p>
                    <h2 className="fw-bold mb-3">Top team of experts</h2>
                    <p className="text-muted">
                        Our team at GOSHOPIFY.SHOP is dedicated to creating the best online shopping experience,
                        combining technology and customer satisfaction to build the marketplace of the future.
                    </p>
                </div>
                <div className="col-md-6 text-md-end mt-3 mt-md-0">
                    <button className="btn-outline-teal">All Members</button>
                </div>
            </div>

            {/* Team Members */}
            <div className="row g-4">
                {/* Member 1 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="team-card border-teal rounded text-center p-3">
                        <div className="bg-light-green rounded mb-3" style={{ height: "300px" }}></div>
                        <h6 className="fw-bold mb-1">Mahmood Khan</h6>
                        <p className="founder-name small mb-0">Founder</p>
                        <div className="d-flex justify-content-center gap-2 mb-2">
                            <img src="/icon-facebook.svg" alt="Facebook" className="social-icon" />
                            <img src="/icon-twitter.svg" alt="Twitter" className="social-icon" />
                            <img src="/icon-instagram.svg" alt="Instagram" className="social-icon" />
                            <img src="/icon-pinterest.svg" alt="Pinterest" className="social-icon" />
                        </div>
                    </div>
                </div>

                {/* Member 2 */}
                <div className="col-12 col-md-6 col-lg-3">
                    <div className="team-card border-teal rounded text-center p-3">
                        <div className="bg-light-green rounded mb-3" style={{ height: "300px" }}></div>
                        <h6 className="fw-bold mb-1">Muhammad Sarmad</h6>
                        <p className="founder-name small mb-0">Co-Founder</p>
                        <div className="d-flex justify-content-center gap-3 mb-2">
                            <img src="/icon-facebook.svg" alt="Facebook" className="social-icon" />
                            <img src="/icon-twitter.svg" alt="Twitter" className="social-icon" />
                            <img src="/icon-instagram.svg" alt="Instagram" className="social-icon" />
                            <img src="/icon-pinterest.svg" alt="Pinterest" className="social-icon" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default TeamSection;
