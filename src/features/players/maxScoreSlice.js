import { createSlice } from '@reduxjs/toolkit';

const maxScoreSlice = createSlice({
  name: 'maxScore',
  initialState: { maxScore: 50 },
  reducers: {
    setMaxScore(state, action) {
      state.maxScore = action.payload;
    }
  }
});

export const { setMaxScore } = maxScoreSlice.actions;
export default maxScoreSlice.reducer;