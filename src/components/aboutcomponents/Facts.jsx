import React from "react";

function Facts() {
    return (
        <section className="container py-5 text-center">
            <div className="custom-line my-4"></div>
            {/* Heading */}
            <p className="text-uppercase text-success fw-bold small">Some Facts</p>
            <h2 className="fw-bold mb-3">
                Take a look at what <br />
                our global clients say about us
            </h2>
            <p className="text-muted mx-auto mb-5" style={{ maxWidth: "700px" }}>
                Our clients around the world have trusted GOSHOPIFY for its innovative solutions and
                exceptional service. From boosting sales to improving operations, hear how we’ve helped
                businesses grow globally.
            </p>

            {/* Testimonials */}
            <div className="row g-4">
                {/* Testimonial 1 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">John Anderson</h6>
                                <p className="text-muted small mb-2">Tech Innovators Inc.</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "GOSHOPIFY has elevated our online business, providing us with cutting-edge solutions
                            that helped us grow rapidly in the competitive tech market."
                        </p>
                    </div>
                </div>

                {/* Testimonial 2 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">Emma Thompson</h6>
                                <p className="text-muted small mb-2">Fashion Fusion</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "GOSHOPIFY transformed the way we run our online store. With easy customization and
                            powerful analytics, we are able to make data-driven decisions."
                        </p>
                    </div>
                </div>

                {/* Testimonial 3 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">Olivia Brown</h6>
                                <p className="text-muted small mb-2">EcoGoods Canada</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "We couldn’t have asked for a better platform to grow our online store. GOSHOPIFY’s
                            seamless integrations and excellent customer support make it stand out in the market."
                        </p>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">Olivia Brown</h6>
                                <p className="text-muted small mb-2">EcoGoods Canada</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "We couldn’t have asked for a better platform to grow our online store. GOSHOPIFY’s
                            seamless integrations and excellent customer support make it stand out in the market."
                        </p>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">Olivia Brown</h6>
                                <p className="text-muted small mb-2">EcoGoods Canada</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "We couldn’t have asked for a better platform to grow our online store. GOSHOPIFY’s
                            seamless integrations and excellent customer support make it stand out in the market."
                        </p>
                    </div>
                </div>
                {/* Testimonial 3 */}
                <div className="col-12 col-md-6 col-lg-4 mt-4 mb-4">
                    <div className="testimonial-card rounded shadow-sm p-4 text-start h-100">
                        <div className="d-flex align-items-start gap-3">
                            <div className="rounded bg-light-green avatar-placeholder"></div>
                            <div>
                                <h6 className="fw-bold mb-0">Olivia Brown</h6>
                                <p className="text-muted small mb-2">EcoGoods Canada</p>
                            </div>
                        </div>
                        <p className="text-muted mt-3 mb-0">
                            "We couldn’t have asked for a better platform to grow our online store. GOSHOPIFY’s
                            seamless integrations and excellent customer support make it stand out in the market."
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Facts;