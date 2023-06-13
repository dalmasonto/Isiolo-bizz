import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  user: null,
  loggedIn: false,
  token: null,
  theme: 'dark',
  cart: {
    items: [
      
    ],
    total: 0,
    itemsCount: 0,
  },
};

export const appSlice = createSlice({
  name: 'isiolo_marketplace',
  initialState,
  reducers: {
    login: (state, action) => {
      state.user = action.payload;
      state.loggedIn = true;
      state.token = action.payload.token
    },
    updateUserAccount: (state, action) => {
      state.user.user.account = action.payload;
    },
    updateMerchantAccount: (state, action) => {
      state.user.user.merchant = action.payload;
    },
    logout: (state) => {
      state.user = null;
      state.loggedIn = false;
    },
    addToCart: (state, action) => {
      const newItem = action.payload
      const itemExists = state.cart.items.find(item => item.product.id === newItem.product.id);
      if (itemExists) {
        state.cart.items = state.cart.items.map(item => {
          if (item.product.id === newItem.product.id) {
            item.qty += 1;
          }
          return item;
        });
        return;
      }
      state.cart.items.push(newItem);
    },
    addItemQuantity: (state, action) => {
      state.cart.items = state.cart.items.map(item => {
        if (item?.product?.id === action.payload?.id) {
          item.qty += 1;
        }
        return item;
      });
    },
    removeItemQuantity: (state, action) => {
      state.cart.items = state.cart.items.map(item => {
        if (item?.product?.id === action.payload?.id) {
          if (item?.qty < 2) {
            state.cart.items = state.cart.items.filter(item => item?.product?.id !== action.payload?.id);
            state.cart.itemsCount -= 1;
          }
          item.qty -= 1;
        }
        return item;
      });
    },
    removeCartItem: (state, action) => {
      state.cart.items = state.cart.items.filter(item => item?.product?.id !== action.payload.id);
      state.cart.itemsCount -= 1;
    },
    clearCart: (state) => {
      state.cart.items = [];
      state.cart.itemsCount = 0;
      state.cart.total = 0;
    },

    getCartTotal: (state) => {
      state.cart.total = state.cart.items.reduce((total, item) => total + (item?.product?.price * item.qty), 0);
    }

  }
});

export const { login, updateUserAccount, updateMerchantAccount, logout, addToCart, addItemQuantity, removeItemQuantity, removeCartItem, clearCart } = appSlice.actions;

export const selectUser = (state) => state.isiolo_marketplace.user;
export const selectMerchant = (state) => state.isiolo_marketplace.user?.user?.merchant;
export const selectAccount = (state) => state.isiolo_marketplace.user?.user?.account;
export const selectToken = (state) => state.isiolo_marketplace.token;
export const selectLoggedIn = (state) => state.isiolo_marketplace.loggedIn;
export const selectCartItems = (state) => state.isiolo_marketplace.cart.items;
export const selectCartTotal = (state) => state.isiolo_marketplace.cart.items.reduce((total, item) => total + (item?.product?.price * item?.qty), 0);



export default appSlice.reducer;


