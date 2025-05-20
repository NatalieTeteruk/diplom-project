import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/cart/store";
import { updateQuantity, removeItem } from "../../store/cart/cartSlice";
import Cart from "./Cart"; 

const CartContainer = () => {
  const dispatch = useDispatch();
  const { items: cartItems } = useSelector((state: RootState) => state.cart);

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cartItems));
  }, [cartItems]);

  const handleQuantityChange = (isbn13: string, newQuantity: number) => {
    if (newQuantity < 1) return;
    dispatch(updateQuantity({ isbn13, quantity: newQuantity }));
  };
  const handleRemoveItem = (isbn13: string) => {
    dispatch(removeItem(isbn13)); 
};
  return (
    <Cart 
      cartItems={cartItems} 
      onQuantityChange={handleQuantityChange} 
      onRemoveItem={handleRemoveItem}
    />
  );
};

export default CartContainer;