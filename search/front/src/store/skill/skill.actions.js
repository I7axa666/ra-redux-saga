import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSkills = createAsyncThunk(
  'skills/getSkills',
  async (value, thunkApi) => {
    const url = new URL('http://localhost:7070/api/search');
    url.searchParams.append('q', value);
    try {
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      return Array.isArray(data) ? data : [];
    } catch (error) {
      return thunkApi.rejectWithValue(error.toString());
    }
  }
);
