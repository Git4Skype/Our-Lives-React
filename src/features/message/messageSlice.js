import { createSlice } from '@reduxjs/toolkit';

const messageSlice = createSlice({
  name: 'message',
  initialState: { message: "Click the START button to begin" },
  reducers: {
    setMessage(state, action) {
      state.message = action.payload;
    }
  }
});

export const { setMessage } = messageSlice.actions;
export default messageSlice.reducer;