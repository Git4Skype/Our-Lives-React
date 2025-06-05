import { createSlice } from '@reduxjs/toolkit';

const throwStateSlice = createSlice({
  name: 'throwState',
  initialState: { noLives: 0, status: 0, isDead: false },
  reducers: {
    setNoLives: (state, action) => { state.noLives = action.payload; },
    setStatus: (state, action) => { state.status = action.payload; },
    setIsDead: (state, action) => { state.isDead = action.payload; }
  }
});

export const selectThrowState = (state) => state.throwState.throwState;


export const { setNoLives, setStatus, setIsDead } = throwStateSlice.actions;
export default throwStateSlice.reducer;