import { configureStore } from '@reduxjs/toolkit';
import GenToggle from './logic'; // Path to the file containing your TodoDetails reducer

const store = configureStore({
  reducer: {
    genToggle: GenToggle,
  },
});

export default store;