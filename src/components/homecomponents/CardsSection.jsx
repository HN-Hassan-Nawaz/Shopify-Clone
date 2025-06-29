import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

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

const ProductGrid = () => {
  return (
    <div className="container my-5">
      <div className="row g-4">
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
    </div>
  );
};

export default ProductGrid;