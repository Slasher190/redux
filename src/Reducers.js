import { createReducer } from "@reduxjs/toolkit";

const initialStage = {
  c: 0,
};

export const customReducer = createReducer(initialStage, {
  increment: (state, action) => {
    state.c += 1;
  },
  incrementByValue: (state, action) => {
    // increment by input value
    state.c += action.payload;
  },
  decrement: (state, action) => {
    state.c -= 1;
  },
}); // take 2 objects, (initial, that will be called)
