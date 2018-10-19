export const addNewDeck = state => {
  if (isBlank(state.newDeckInput)) return;
  state.decks.push(state.newDeckInput);
  state.newDeckInput = "";
};

export const onInputNewDeckChange = (state, value) =>
  (state.newDeckInput = value);

export const onDeckClicked = (state, deckIndex) =>
  (state.selectedDeckIndex = deckIndex);

const isBlank = str => {
  return !str || /^\s*$/.test(str);
};
