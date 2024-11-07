import { configureStore } from '@reduxjs/toolkit';
import bandReducer from './redux/bandsSlice'; 

const store = configureStore({
  reducer: {
    bands: bandReducer,
  },
});

export default store;
