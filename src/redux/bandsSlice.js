import { createSlice } from '@reduxjs/toolkit';

const bandsSlice = createSlice({
  name: 'bands',
  initialState: [], 
  reducers: {
    addBand: (state, action) => {
        state.push(action.payload);
    },
    deleteBand: (state, action) => {
        const id = action.payload;
        return state.filter(band => band.id !== id);
      },
  },
});

export const { addBand, deleteBand } = bandsSlice.actions; 
export default bandsSlice.reducer;
