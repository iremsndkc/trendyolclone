import {createSlice} from '@reduxjs/toolkit';
import {getCategories} from '../actions/categoriesActions';

const initialState = {
  pending: false,
  categories: [],
  selectedCategory: '',
  error: null,
};
const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.selectedCategory = action.payload;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(getCategories.pending, state => {
        state.pending = true;
      })
      .addCase(getCategories.fulfilled, (state, action) => {
        (state.pending = false), (state.categories = action.payload);
      })
      .addCase(getCategories.rejected, (state, action) => {
        (state.error = action.payload.error), (state.pending = false);
      });
  },
});
export const {setCategory} = categoriesSlice.actions;
export default categoriesSlice.reducer;
