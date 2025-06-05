import { createSlice } from '@reduxjs/toolkit';

const currentPlayerSlice = createSlice({
  name: 'currentPlayer',
  initialState: { currentPlayer: 0 },
  reducers: {
    setCurrentPlayer(state, action) {
      state.currentPlayer = action.payload;
    }
  }
});

export const { setCurrentPlayer } = currentPlayerSlice.actions;
export default currentPlayerSlice.reducer;