import { configureStore } from '@reduxjs/toolkit';

import cartSlice from './cartSlice';
import cartModalSlice from './cartModalSlice';

const store = configureStore({
  reducer: {cart: cartSlice.reducer, modal: cartModalSlice.reducer },
});

export default store;
