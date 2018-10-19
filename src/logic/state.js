export let selectedDeckIndex = 0;

export let newDeckInput = "";

export let decks = ["default"];

export const selectedDeck = state => {
  return state.decks[state.selectedDeckIndex];
};
