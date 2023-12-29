import { createSlice } from "@reduxjs/toolkit";

const cardSlice = createSlice({
  name: "card",
  initialState: {
    apiCards: [],
    cards: [],
    index: null,
    myCards: true,
    sampleCards: true,
  },
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
    updateCard: (state, action) => {
      const { index, author, download_url, description } = action.payload;

      state.cards[index].author = author;
      state.cards[index].download_url = download_url;
      state.cards[index].description = description;
    },
    addIndex: (state, action) => {
      state.index = action.payload;
    },
    showSampleCard: (state, action) => {
      state.myCards = action.payload;
    },
    showMyCards: (state, action) => {
      state.sampleCards = action.payload;
    },
  },
});

export const {
  addCard,
  addCards,
  deleteCard,
  updateCard,
  addIndex,
  showMyCards,
  showSampleCard,
} = cardSlice.actions;

export default cardSlice.reducer;
