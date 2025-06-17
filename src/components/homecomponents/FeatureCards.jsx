import React from 'react';

const features = [
    {
        title: 'Free Shipping',
        img: '/feature-1.png',
        bgColor: '#FFCBD0',
        textColor: '#d63384',
    },
    {
        title: 'Online Order',
        img: '/feature-2.png',
        bgColor: '#B3E5FC',
        textColor: '#0dcaf0',
    },
    {
        title: 'Save Money',
        img: '/feature-3.png',
        bgColor: '#C8E6C9',
        textColor: '#198754',
    },
    {
        title: 'Promotions',
        img: '/feature-4.png',
        bgColor: '#B3D4FC',
        textColor: '#0d6efd',
    },
    {
        title: 'Happy Sell',
        img: '/feature-5.png',
        bgColor: '#E1C8F9',
        textColor: '#6f42c1',
    },
    {
        title: '24/7 Support',
        img: '/feature-6.png',
        bgColor: '#FFE0B2',
        textColor: '#00695c',
    },
];


const FeatureCards = () => {
    return (
        <div className="container py-5">
            <div className="row g-4">
                {features.map((feature, index) => (
                    <div className="col-6 col-md-4 col-lg-2" key={index}>
                        <div className="text-center p-3 border rounded feature-cards" style={{ minHeight: '200px' }}>
                            <img
                                src={feature.img}
                                alt={feature.title}
                                className="img-fluid mb-3"
                                style={{ height: '100px' }}
                            />
                            <div
                                className="fw-bold px-2 py-1 rounded d-inline-block"
                                style={{
                                    backgroundColor: feature.bgColor,
                                    color: feature.textColor,
                                }}
                            >
                                {feature.title}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeatureCards;
