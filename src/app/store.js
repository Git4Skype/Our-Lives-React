import { configureStore } from '@reduxjs/toolkit';
import playersReducer from '../features/players/playersSliceRedux';
import currentPlayerReducer from '../features/players/currentPlayerSlice';
import nextPlayerReducer from '../features/players/nextPlayerSlice';
import messageReducer from '../features/message/messageSlice';
import maxScoreReducer from '../features/players/maxScoreSlice';
import throwStateReducer from "../utils/throwStateSlice";


const store = configureStore({
  reducer: {
    players: playersReducer,
    currentPlayer: currentPlayerReducer,
    nextPlayer: nextPlayerReducer,
    message: messageReducer,
    maxScore: maxScoreReducer,
    throwState: throwStateReducer


  }
});

export default store;