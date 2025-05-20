import React from "react";
import { Link } from "react-router"; 
import styles from "./Cart.module.css";

interface CartItem {
  isbn13: string;
  title: string;
  authors: string;
  price: number;
  quantity: number;
  image: string;
};

type CartProps = {
  cartItems: CartItem[];
  onQuantityChange: (isbn13: string, newQuantity: number) => void;
  onRemoveItem: (isbn13: string) => void;
};

const Cart = ({ cartItems, onQuantityChange, onRemoveItem }: CartProps) => {
  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className={styles.cartContainer}>
      <h2 className={styles.cartTitle}>Your cart</h2>

      {cartItems.length === 0 ? (
        <div className={styles.emptyCart}>
          <p>Your basket is empty.</p>
          <Link to="/" className={styles.continueShopping}>
            Continue shopping
          </Link>
        </div>
      ) : (
        <>
          <div>
            {cartItems.map((item) => (
              <div key={item.isbn13} className={styles.cartItem}>
                <div className={styles.itemImage}>
                  <img src={item.image} alt={item.title} className={styles.bookImage} />
                </div>

                <div className={styles.itemDetails}>
                  <h3>
                    <Link to={`/books/${item.isbn13}`} className={styles.linkStyle}>
                      {item.title}
                    </Link>
                  </h3>
                  <p> by {item.authors}</p>
                  <div className={styles.quantityControl}>
                    <button
                      onClick={() => onQuantityChange(item.isbn13, item.quantity - 1)}
                      disabled={item.quantity <= 1}
                      className={styles.quantityButton}
                    >
                      -
                    </button>
                    <span className={styles.quantityValue}>{item.quantity}</span>
                    <button
                      onClick={() => onQuantityChange(item.isbn13, item.quantity + 1)}
                      className={styles.quantityButton}
                    >
                      +
                    </button>
                  </div>
                  <div className={styles.priceBox}>
                    <p className={styles.priceCart}> 
                      ${(item.price * item.quantity).toFixed(2)}
                    </p>
                  </div>
                  <button 
                      onClick={() => onRemoveItem(item.isbn13)}
                      className={styles.removeButton}
                    >
                     ×
                    </button>
                </div>
                
              </div>
              
            ))}
            
          </div>

          <div className={styles.cartSummary}>
            <h3>Total: ${total.toFixed(2)}</h3>
            <button className={styles.checkoutButton}>Check out</button>
            <Link to="/" className={styles.continueShopping}>
              Continue shopping
            </Link>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;