import { createAsyncThunk } from '@reduxjs/toolkit';

export const getSkills = createAsyncThunk(
  'skills/getSkills',
  async (value, thunkApi) => {
    const url = new URL('http://localhost:7070/api/search');
    url.searchParams.append('q', value);
    try {
      const response = await fetch(url);
      return await response.json();
    } catch (error) {
      return thunkApi.rejectWithValue(error.toString());
    }
  }
);
