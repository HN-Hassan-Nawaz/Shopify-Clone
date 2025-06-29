import React, { useEffect } from 'react';
import Carousel from 'bootstrap/js/dist/carousel';

const slides = [
    {
        id: 1,
        title: 'Exclusive Offers',
        subtitle: 'Special Discounts',
        description: 'Grab exclusive deals on latest fashion items',
        buttonText: 'Explore Deals',
        image: '/hania.webp',
    },
    {
        id: 2,
        title: 'Super Value Deals',
        subtitle: 'Trade-in offer',
        description: 'Save more with coupons & up to 70% off',
        buttonText: 'Shop Now',
        image: '/shoes.png',
    },
    {
        id: 3,
        title: 'Mega Sale',
        subtitle: 'Limited Time Offer',
        description: 'Get up to 50% off on all electronics',
        buttonText: 'Explore Deals',
        image: '/iphone.png',
    },
];

const HeroCarousel = () => {
    useEffect(() => {
        const carousel = document.querySelector('#heroCarousel');
        if (carousel) {
            new Carousel(carousel, {
                interval: 3000,
                ride: 'carousel',
                pause: false,
            });
        }
    }, []);

    return (
        <div id="heroCarousel" className="carousel slide carousel-fade position-relative" data-bs-ride="carousel">
            <div className="carousel-inner">
                {slides.map((slide, index) => (
                    <div className={`carousel-item ${index === 0 ? 'active' : ''}`} key={slide.id}>
                        <div className="container-fluid py-5 home-carousel">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-md-6 py-5">
                                        <p className="fs-3 text-muted mb-2">{slide.subtitle}</p>
                                        <h1 className="fs-1 mb-1 fw-bold">{slide.title}</h1>
                                        <h2 className="fw-bold mb-4 desc-text col-md-10" style={{ fontSize: '3rem' }}>
                                            {slide.description}
                                        </h2>
                                        <div className="brush-container mt-4">
                                            <div className="brush-button">
                                                <span className="brush-text">{slide.buttonText}</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-md-6 text-center image-container">
                                        <img
                                            src={slide.image}
                                            alt={slide.title}
                                            className="carousel-image"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HeroCarousel;
