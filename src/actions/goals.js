import { store } from '../index.js';
import{ createAction } from 'redux-actions';

export const add = createAction('ADD_GOAL');
export const del = createAction('DELETE_GOAL');
export const open = createAction('OPEN_GOAL');
export const save = createAction('SAVE_GOAL');
export const loadedGoals = createAction('LOADED_GOALS');
export const toggleAdd = createAction('ADD_GOAL_TOGGLE');

export const fetchGoals = () =>
  fetch('/data/goals.json')
    .then(response => response.json());

export const loadGoals = () =>
  fetchGoals()
    .then(data => store.dispatch(loadedGoals(data)));
