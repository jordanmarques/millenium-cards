export let selectedDeckIndex = null;

export let newDeckInput = "";

export let decks = [];

export const selectedDeck = state => {
  return state.decks[state.selectedDeckIndex];
};
