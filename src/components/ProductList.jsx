import React from 'react';
import { useCart } from '../context/CartContext';
import ProductCard from './ProductCard';
import '../styles/ProductList.css';

function ProductList({ products }) {
  const { addToCart } = useCart();

  return (
    <div className="product-list">
      <h2 className="section-title">Our Products</h2>
      <div className="product-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={addToCart}
          />
        ))}
      </div>
    </div>
  );
}

export default ProductList;
