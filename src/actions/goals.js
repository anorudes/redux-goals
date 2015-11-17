import{ createAction } from 'redux-actions';

export const add = createAction('ADD_GOAL');
export const del = createAction('DELETE_GOAL');
export const open = createAction('OPEN_GOAL');
export const close = createAction('CLOSE_GOAL');
export const save = createAction('SAVE_GOAL');
export const changePos = createAction('CHANGE_GOAL_POS');
export const loadedGoals = createAction('LOADED_GOALS');
export const toggleAdd = createAction('ADD_GOAL_TOGGLE');

export const loadGoals = () => dispatch =>
  fetch('/data/goals.json')
    .then(response => response.json())
    .then(data => dispatch(loadedGoals(data)));
