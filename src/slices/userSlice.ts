import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState, AppThunk } from '@/app/store';

const initialState = {
    name: '',
    email: '',
    phone: '',
};

export const userSlice = createSlice({
    initialState,
    name: 'user',
    reducers: {
        storeName: (state, action) => {

        }
    },
    extraReducers: builder => { }
})
export const { storeName } = userSlice.actions;
export default userSlice.reducer;
