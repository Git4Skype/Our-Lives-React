import { createSlice } from '@reduxjs/toolkit';

const nextPlayerSlice = createSlice({
  name: 'nextPlayer',
  initialState: { nextPlayer: 0 },
  reducers: {
    setNextPlayer(state, action) {
      state.nextPlayer = action.payload;
    }
  }
});

export const { setNextPlayer } = nextPlayerSlice.actions;
export default nextPlayerSlice.reducer;