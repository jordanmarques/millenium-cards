export const addNewDeck = state => {
  if (isBlank(state.newDeckInput)) return;
  state.decks.push({ name: state.newDeckInput, cards: [] });
  state.newDeckInput = "";
};

export const onInputNewDeckChange = (state, value) =>
  (state.newDeckInput = value);

export const onDeckClicked = (state, deckIndex) =>
  (state.selectedDeckIndex = deckIndex);

export const addCardToCurrentDeck = (state, number) =>
  state.decks[state.selectedDeckIndex].cards.push(number);

const isBlank = str => {
  return !str || /^\s*$/.test(str);
};
