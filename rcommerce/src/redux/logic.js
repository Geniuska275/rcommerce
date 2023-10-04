import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  showMobileMenu: false,
  showMobileSearch : false,
  showCart : false,
};

const GenToggle = createSlice({
  name: 'details',
  initialState,
  reducers: {
    isMobileMenu: (state) => {
      state.showMobileMenu = !state.showMobileMenu;
    },
    isMobileSearch: (state) => {
      state.showMobileSearch = !state.showMobileSearch;
    },
    isCart: (state) => {
      state.showCart = !state.showCart;
    },
  },
});

export const { isMobileMenu, isMobileSearch, isCart } = GenToggle.actions;
export default GenToggle.reducer;
