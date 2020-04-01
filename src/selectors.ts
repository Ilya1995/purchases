import { createSelector } from 'reselect';
import { RootReducerType } from './reducers';
import { ItemFirebaseType } from './types';

export const sortItemsSelector = () =>
  createSelector(
    (state: RootReducerType, titleItem: string) =>
      state.firebase.ordered[titleItem],
    (items: ItemFirebaseType[]) =>
      items
        ?.sort((a, b) => (a.value.timestamp > b.value.timestamp ? 1 : -1))
        .sort((a, b) => (a.value.completed > b.value.completed ? 1 : -1))
  );
