import React from 'react';
import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import '../styles/CartPage.css';

function CartPage() {
  const { cart, updateQuantity, removeFromCart, getTotalPrice } = useCart();

  const totalPrice = getTotalPrice();

  return (
    <div className="cart-page">
      <h1>Shopping Cart</h1>

      {cart.length === 0 ? (
        <div className="empty-cart-page">
          <p className="empty-cart-emoji">🛒</p>
          <p className="empty-cart-text">Your cart is empty</p>
          <Link to="/" className="continue-shopping-btn">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <div className="cart-page-content">
          <div className="cart-items-list">
            {cart.map((item) => (
              <div key={item.id} className="cart-page-item">
                <img src={item.image} alt={item.name} className="cart-item-img" />

                <div className="cart-item-info">
                  <h3 className="cart-item-title">{item.name}</h3>
                  <p className="cart-item-desc">{item.description}</p>
                  <p className="cart-item-category">{item.category}</p>
                </div>

                <div className="cart-item-price">
                  <p className="price-label">Price</p>
                  <p className="price-value">${item.price.toFixed(2)}</p>
                </div>

                <div className="cart-item-qty">
                  <p className="qty-label">Qty</p>
                  <div className="qty-controls">
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      aria-label="Decrease quantity"
                    >
                      −
                    </button>
                    <span className="qty-value">{item.quantity}</span>
                    <button
                      className="qty-btn"
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      aria-label="Increase quantity"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="cart-item-subtotal">
                  <p className="subtotal-label">Subtotal</p>
                  <p className="subtotal-value">${(item.price * item.quantity).toFixed(2)}</p>
                </div>

                <button
                  className="cart-remove-btn"
                  onClick={() => removeFromCart(item.id)}
                  aria-label="Remove item"
                >
                  ✕
                </button>
              </div>
            ))}
          </div>

          <div className="cart-summary">
            <h3 className="summary-title">Order Summary</h3>

            <div className="summary-details">
              <div className="summary-row">
                <span>Items:</span>
                <span>{cart.length}</span>
              </div>
              <div className="summary-row">
                <span>Subtotal:</span>
                <span>${totalPrice.toFixed(2)}</span>
              </div>
              <div className="summary-row">
                <span>Shipping:</span>
                <span>FREE</span>
              </div>
            </div>

            <div className="summary-total">
              <span>Total:</span>
              <span className="total-amount">${totalPrice.toFixed(2)}</span>
            </div>

            <button className="checkout-btn">Proceed to Checkout</button>
            <Link to="/" className="continue-shopping-link">
              Continue Shopping
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

export default CartPage;
