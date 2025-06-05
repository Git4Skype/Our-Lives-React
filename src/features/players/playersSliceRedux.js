import { createSlice } from '@reduxjs/toolkit';

const playersSliceRedux = createSlice({
  name: 'players',
  initialState: { players: [] },
  reducers: {
    addPlayer(state, action) {
      state.players.push(action.payload);
    },
    updateLives(state, action) {
      const { id, lives } = action.payload;
      const player = state.players.find(p => p.id === id);
      if (player) player.lives = lives;
    },
    updateScore(state, action) {
      const { id, score } = action.payload;
      const player = state.players.find(p => p.id === id);
      if (player) player.score = score;
    },
    updateStatus(state, action) {
      const { id, isAlive } = action.payload;
      const player = state.players.find(p => p.id === id);
      if (player) player.isAlive = isAlive;
    }
  }
});

export const selectAllPlayers = (state) => state.players.players;


export const { addPlayer, updateLives, updateScore, updateStatus } = playersSliceRedux.actions;
export default playersSliceRedux.reducer;