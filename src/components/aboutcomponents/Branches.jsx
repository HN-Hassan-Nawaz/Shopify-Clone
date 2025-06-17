import React from "react";

function Branches() {
    return (
        <section className="container text-center">
            <div className="custom-line my-2"></div>
            {/* Heading */}
            <p className="text-uppercase text-success fw-bold small mb-1 mt-4">GOSHOPIFY</p>
            <h2 className="fw-bold mb-3">Our main branches<br />around the world</h2>
            <p className="text-muted mx-auto mb-5" style={{ maxWidth: "600px" }}>
                At GOSHOPIFY, we strive to bring the best shopping experience with a wide range of products across various categories.
                From Beauty & Health to Electronics, our marketplace serves customers worldwide, offering quality and convenience at every click.
                Join us as we expand globally and continue to provide top-notch service to our clients.
            </p>

            {/* Branch Cards */}
            <div className="row g-4">
                {/* Branch 1 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="branch-card bg-light-green rounded mb-3"></div>
                    <h6 className="fw-bold">Sahiwal, Pakistan</h6>
                    <p className="text-muted small mb-0">
                        Near Sahiwal Stadium,<br />Sahiwal, Punjab, Pakistan
                    </p>
                </div>

                {/* Branch 2 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="branch-card bg-light-green rounded mb-3"></div>
                    <h6 className="fw-bold">Sahiwal, Pakistan</h6>
                    <p className="text-muted small mb-0">
                        Near Sahiwal Stadium,<br />Fareed Town, Punjab, Pakistan
                    </p>
                </div>

                {/* Branch 3 */}
                <div className="col-12 col-md-6 col-lg-4">
                    <div className="branch-card bg-light-green rounded mb-3"></div>
                    <h6 className="fw-bold">Sahiwal, Pakistan</h6>
                    <p className="text-muted small mb-0">
                        Near Sahiwal Stadium,<br />Muhammad Pur, Punjab, Pakistan
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Branches;
