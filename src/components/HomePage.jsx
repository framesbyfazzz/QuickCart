import React from 'react';
import ProductList from './ProductList';
import '../styles/HomePage.css';

function HomePage({ products, searchTerm }) {
  const filteredProducts = products.filter((p) =>
    p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home-page">
      {searchTerm && (
        <div className="search-results-info">
          <p className="search-results-text">
            Found <strong>{filteredProducts.length}</strong> {filteredProducts.length === 1 ? 'product' : 'products'} for "{searchTerm}"
          </p>
        </div>
      )}

      {filteredProducts.length === 0 ? (
        <div className="no-results">
          <p className="no-results-emoji">🔍</p>
          <p className="no-results-text">No products found</p>
          {searchTerm && (
            <p className="no-results-subtext">Try searching with different keywords</p>
          )}
        </div>
      ) : (
        <ProductList products={filteredProducts} />
      )}
    </div>
  );
}

export default HomePage;
