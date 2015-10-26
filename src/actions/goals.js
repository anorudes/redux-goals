import { store } from '../index.js';
import{ createAction } from 'redux-actions';

export const add = createAction('ADD');
export const del = createAction('DELETE');
export const open = createAction('OPEN');
export const save = createAction('SAVE');
export const loadedItems = createAction('LOADED_ITEMS');
export const toggleAdd = createAction('ADD_GOAL_TOGGLE');

export const fetchItems = () =>
  fetch('/data/items.json')
    .then(response => response.json());

export const loadItems = () =>
  fetchItems()
    .then(data => store.dispatch(loadedItems(data)));
