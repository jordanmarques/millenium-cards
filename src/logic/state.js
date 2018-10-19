export let selectedDeckIndex = 0;

export let newDeckInput = "";

export let decks = [{ name: "noob", cards: [11714098, 23771716] }];

export const selectedDeck = state => {
  return state.decks[state.selectedDeckIndex];
};
