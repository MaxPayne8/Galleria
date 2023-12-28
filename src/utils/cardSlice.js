import { createSlice } from "@reduxjs/toolkit";
import { act } from "@testing-library/react";

const cardSlice = createSlice({
  name: "card",
  initialState: { apiCards: [], cards: [] },
  reducers: {
    addCards: (state, action) => {
      state.apiCards = action.payload;
    },
    addCard: (state, action) => {
      state.cards.unshift(action.payload);
    },
    deleteCard: (state, action) => {
      const index = action.payload;

      state.cards = state.cards.filter((card) => card.id !== index);
    },
  },
});

export const { addCard, addCards, deleteCard } = cardSlice.actions;

export default cardSlice.reducer;
