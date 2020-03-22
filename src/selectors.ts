import { createSelector } from 'reselect';
import { RootReducerType } from './reducers';
import { ItemFirebaseType } from './types';

export const sortItemsSelector = (titleItem: string) =>
  createSelector(
    (state: RootReducerType) => state.firebase.ordered[titleItem],
    (items: ItemFirebaseType[]) =>
      items &&
      items.sort((a, b) => (a.value.completed > b.value.completed ? 1 : -1))
  );
