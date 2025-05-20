import { createSlice } from '@reduxjs/toolkit';

interface CartItem {
  isbn13: string;
  title: string;
  price: number;
  quantity: number;
  authors: string;
  image: string;
};

interface CartState {
  items: CartItem[];
}

const initialState: CartState = {
  items: JSON.parse(localStorage.getItem('cart') || '[]') as CartItem[],
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: { payload: CartItem }) {
      const item = state.items.find(i => i.isbn13 === action.payload.isbn13);
      item ? item.quantity++ : state.items.push(action.payload);
    },

    updateQuantity(state, action: { payload: { isbn13: string; quantity: number } }) {
      const item = state.items.find(i => i.isbn13 === action.payload.isbn13);
      if (item) item.quantity = action.payload.quantity;
    },

    removeItem(state, action: { payload: string }) {
      state.items = state.items.filter(item => item.isbn13 !== action.payload);
    }
  },
});

export const { addToCart, updateQuantity, removeItem } = cartSlice.actions;
export default cartSlice.reducer;