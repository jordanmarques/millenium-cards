import * as mutations from "./mutations";

export const newDeck = action => action.mutate(mutations.addNewDeck);

export const onInputNewDeckChange = action =>
  action.mutate(mutations.onInputNewDeckChange);

export const onDeckClicked = action => action.mutate(mutations.onDeckClicked);

export const addCardToCurrentDeck = action => action.mutate(mutations.addCardToCurrentDeck)
