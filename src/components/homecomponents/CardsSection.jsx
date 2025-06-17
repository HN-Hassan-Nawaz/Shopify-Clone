import React from 'react';
import { FaShoppingCart } from "react-icons/fa";

const products = [
    {
        id: 1,
        name: 'Fleece - Ac Blanket-(Blue)',
        img: '/card-1.webp',
        rating: 5,
        price: 2518.95,
        originalPrice: 5270.00,
    },
    {
        id: 2,
        name: 'Fleece - Ac Blanket-(Brown)',
        img: '/card-2.png',
        rating: 0,
        price: 2518.95,
        originalPrice: 5270.00,
    },
    {
        id: 3,
        name: 'Fleece - Ac Blanket-(Red)',
        img: '/card-3.png',
        rating: 0,
        price: 2518.95,
        originalPrice: 5270.00,
    },
    {
        id: 4,
        name: 'Fleece - Ac Blanket-(Skin)',
        img: '/card-4.png',
        rating: 4,
        price: 2518.95,
        originalPrice: 5270.00,
    },
];

const ProductGrid = () => {
    return (
        <div className="container my-5">
            <div className="row g-4">
                {products.map((product) => (
                    <div className="col-6 col-md-4 col-lg-3" key={product.id}>
                        <div className="card product-card border rounded-4 h-100 overflow-hidden">
                            {/* Image section */}
                            <div className="product-img-container">
                                <img
                                    src={product.img}
                                    alt={product.name}
                                    className="img-fluid product-img"
                                />
                            </div>

                            {/* Card body */}
                            <div className="card-body position-relative">
                                <h6 className="card-title large fs-5">{product.name}</h6>

                                <div className="mb-2 d-flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <img
                                            key={i}
                                            src="/star.jpg" // update path if needed
                                            alt="star"
                                            style={{ width: '16px', height: '16px', opacity: i < product.rating ? 1 : 0.3 }}
                                        />
                                    ))}
                                </div>

                                {/* Price */}
                                <div className="d-flex">
                                    <h6 className="text-success mb-0">
                                        {product.price.toLocaleString()} PKR
                                    </h6>
                                    <small className="text-muted text-decoration-line-through mx-3">
                                        {product.originalPrice.toLocaleString()} PKR
                                    </small>
                                </div>

                                <div className="position-absolute bottom-0 end-0 m-3">
                                    <button
                                        className="rounded-circle shadow-sm cart-btn"
                                        title="Add To Cart"
                                    >
                                        <FaShoppingCart size={16} color="#00796b" />
                                    </button>
                                </div>


                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ProductGrid;
