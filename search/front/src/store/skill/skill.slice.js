import { createSlice } from '@reduxjs/toolkit';

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
    searchRequest: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    searchSuccess: (state, action) => {
      state.skillList = Array.isArray(action.payload) ? action.payload : [];
      state.isLoading = false;
    },
    searchError: (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
      state.skillList = [];
    },
  },
});

export const { inputValue, searchRequest, searchSuccess, searchError } = skillSlice.actions;
export default skillSlice.reducer;

