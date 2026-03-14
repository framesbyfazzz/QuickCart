import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import ProductList from './ProductList';
import '../styles/CategoryPage.css';

function CategoryPage({ products }) {
  const { category } = useParams();
  const { addToCart } = useCart();

  const filteredProducts = products.filter((p) =>
    p.category.toLowerCase() === category.toLowerCase()
  );

  return (
    <div className="category-page">
      <h2 className="category-title">{category} Products</h2>

      {filteredProducts.length === 0 ? (
        <div className="empty-category">
          <p className="empty-category-emoji">😕</p>
          <p className="empty-category-text">No products found in this category</p>
          <Link to="/" className="back-home-link">
            ← Back to all products
          </Link>
        </div>
      ) : (
        <>
          <p className="category-count">
            Showing {filteredProducts.length} {filteredProducts.length === 1 ? 'product' : 'products'}
          </p>
          <ProductList products={filteredProducts} />
        </>
      )}
    </div>
  );
}

export default CategoryPage;
