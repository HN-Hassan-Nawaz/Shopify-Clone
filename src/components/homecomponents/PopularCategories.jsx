import React, { useState, useRef } from 'react';
import { FaShoppingCart } from 'react-icons/fa';

const categories = [
    { title: 'Shoes', img: '/shoes.avif' },
    { title: 'Mother & Kids', img: '/games.avif' },
    { title: 'Outdoor Fun', img: '/outdoor.avif' },
    { title: 'Beauty & Health', img: '/home.avif' },
    { title: 'Sports & Outdoors', img: '/sports.avif' },
    { title: 'Toys & Games', img: '/games.avif' },
    { title: 'Watches', img: '/healthbeauti.avif' },
    { title: 'Bags', img: '/jewlry.avif' },
    { title: 'Electronics', img: '/motherkids.avif' },
];

const products = [
    {
        id: 1,
        name: 'Fleece - Ac Blanket-(Blue)',
        img: '/card-1.webp',
        rating: 5,
        price: 2518.95,
        originalPrice: 5270.0,
    },
    {
        id: 2,
        name: 'Fleece - Ac Blanket-(Brown)',
        img: '/card-2.png',
        rating: 0,
        price: 2518.95,
        originalPrice: 5270.0,
    },
    {
        id: 3,
        name: 'Fleece - Ac Blanket-(Red)',
        img: '/card-3.png',
        rating: 0,
        price: 2518.95,
        originalPrice: 5270.0,
    },
    {
        id: 4,
        name: 'Fleece - Ac Blanket-(Skin)',
        img: '/card-4.png',
        rating: 4,
        price: 2518.95,
        originalPrice: 5270.0,
    },
];

const TabsSection = () => {
    const [activeTab, setActiveTab] = useState('Featured');
    const scrollRef = useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const amount = 200;
            scrollRef.current.scrollBy({
                left: direction === 'left' ? -amount : amount,
                behavior: 'smooth',
            });
        }
    };

    return (
        <div className="container my-5 position-relative">
            {/* Tabs */}
            <div className="d-flex gap-2 mb-3">
                {['Featured', 'Popular', 'New added'].map((tab) => (
                    <button
                        key={tab}
                        onClick={() => setActiveTab(tab)}
                        className={`fw-bold ${activeTab === tab ? 'featured-btn' : 'neutral-btn'}`}
                    >
                        {tab}
                    </button>
                ))}
            </div>

            {/* Promo */}
            <div className="promo-card mb-4">
                <p className="text-primary fw-semibold mb-2">Repair Services</p>
                <h2 className="fs-1 mb-3" style={{ maxWidth: '700px' }}>
                    We're a GoShopify <br />
                    Authorised Service Provider
                </h2>
                <button className="learn-btn">Learn More</button>
            </div>

            {/* Featured Tab Section */}
            {activeTab === 'Featured' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-bold text-dark">
                            <span className="text-success">Featured</span> Categories
                        </h4>
                        <div className="arrow-controls d-none d-md-flex gap-2">
                            <button onClick={() => scroll('left')} className="btn btn-light rounded-circle border">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button onClick={() => scroll('right')} className="btn btn-light rounded-circle border">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="category-scroll d-flex overflow-auto hide-scrollbar" ref={scrollRef}>
                        {categories.map((cat, idx) => (
                            <div className="category-card-wrapper" key={idx}>
                                <div className="category-card text-center border rounded-4 shadow-sm bg-white">
                                    <div className="category-img-wrapper mb-2">
                                        <img
                                            src={cat.img}
                                            alt={cat.title}
                                            className="category-image"
                                        />
                                    </div>
                                    <h6 className="mb-2 text-secondary">{cat.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

            {/* Popular Tab Section */}
            {activeTab === 'Popular' && (
                <div className="row g-4 mt-4">
                    {products.map((product) => (
                        <div className="col-12 col-sm-6 col-md-4 col-lg-3" key={product.id}>
                            <div className="card product-card shadow-sm rounded-4 overflow-hidden position-relative">
                                <div className="product-image-container">
                                    <img
                                        src={product.img}
                                        alt={product.name}
                                        className="img-fluid product-image"
                                    />
                                </div>
                                <div className="product-card-body card-body">
                                    <h6 className="product-title fs-6 fw-semibold">{product.name}</h6>

                                    <div className="product-rating mb-2 d-flex gap-1">
                                        {[...Array(5)].map((_, i) => (
                                            <img
                                                key={i}
                                                src="/star.jpg"
                                                alt="star"
                                                style={{
                                                    width: '16px',
                                                    height: '16px',
                                                    opacity: i < product.rating ? 1 : 0.2,
                                                }}
                                            />
                                        ))}
                                    </div>

                                    <div className="product-price-cart d-flex justify-content-between align-items-center">
                                        <div className="price-info d-flex align-items-baseline">
                                            <h6 className="text-success">
                                                {product.price.toLocaleString()} PKR
                                            </h6>
                                            <small className="text-muted text-decoration-line-through ms-2">
                                                {product.originalPrice.toLocaleString()} PKR
                                            </small>
                                        </div>
                                        <button className="rounded-circle product-cart-btn ms-3" title="Add To Cart">
                                            <FaShoppingCart size={16} />
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            )}

            {/* Featured Tab Section */}
            {activeTab === 'New added' && (
                <>
                    <div className="d-flex justify-content-between align-items-center mb-3">
                        <h4 className="fw-bold text-dark">
                            <span className="text-success">Featured</span> Categories
                        </h4>
                        <div className="arrow-controls d-none d-md-flex gap-2">
                            <button onClick={() => scroll('left')} className="btn btn-light rounded-circle border">
                                <i className="bi bi-chevron-left"></i>
                            </button>
                            <button onClick={() => scroll('right')} className="btn btn-light rounded-circle border">
                                <i className="bi bi-chevron-right"></i>
                            </button>
                        </div>
                    </div>

                    <div className="category-scroll d-flex overflow-auto hide-scrollbar" ref={scrollRef}>
                        {categories.map((cat, idx) => (
                            <div className="category-card-wrapper" key={idx}>
                                <div className="category-card text-center border rounded-4 shadow-sm bg-white">
                                    <div className="category-img-wrapper mb-2">
                                        <img
                                            src={cat.img}
                                            alt={cat.title}
                                            className="category-image"
                                        />
                                    </div>
                                    <h6 className="mb-2 text-secondary">{cat.title}</h6>
                                </div>
                            </div>
                        ))}
                    </div>
                </>
            )}

        </div>
    );
};

export default TabsSection;
