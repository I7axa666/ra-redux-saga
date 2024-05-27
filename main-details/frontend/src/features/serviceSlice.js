import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

export const fetchToService = createAsyncThunk(
  'service/fetchToService',
  async (value, thunkApi) => {
    const url = new URL(' http://localhost:7070/api/services');
  
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.toString());
    }
  }
);

export const serviceSlice = createSlice({
  name: 'service',
  initialState: {
    serviceInfo: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchToService.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchToService.fulfilled, (state, action) => {
        state.isLoading = false;
        state.serviceInfo = action.payload;
      })
      .addCase(fetchToService.rejected, (state, action) => {
        state.isLoading = false;
        state.error = "Произошла ошибка!";
        state.serviceInfo = [];
      });
  },
})

export default serviceSlice.reducer
