import { createSlice } from '@reduxjs/toolkit';
import { getSkills } from './skill.actions';

const initialState = {
  skillList: [],
  isLoading: false,
  error: null,
  search: '',
};

const skillSlice = createSlice({
  name: 'skills',
  initialState,
  reducers: {
    inputValue: (state, action) => {
      state.search = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getSkills.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(getSkills.fulfilled, (state, action) => {
        
        state.skillList = Array.isArray(action.payload) ? action.payload : [];
        state.isLoading = false;
      })
      .addCase(getSkills.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
        state.skillList = [];
      });
  },
});

export const { inputValue } = skillSlice.actions;
export default skillSlice.reducer;
export { getSkills }
