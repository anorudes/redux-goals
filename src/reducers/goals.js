import u from 'updeep';
import{ handleActions } from 'redux-actions';

const initialState = {
  showAdd: false,
  activeItem: -1,
  showAddGoal: false,
  items: [{
    text: '',
  }],
};

export const goals = handleActions({
  'ADD_GOAL_TOGGLE': (state) => ({
    ...state,
    showAddGoal: !state.showAddGoal,
  }),

  'LOADED_GOALS': (state, action) => ({
    ...state,
    activeItem: state.activeItem,
    items: [...action.payload],
  }),

  'OPEN_GOAL': (state, action) => ({
    ...state,
    activeItem: action.payload,
    items: [...state.items],
  }),

  'ADD_GOAL': (state, action) => ({
    ...state,
    items: [
      ...state.items,
      {
        text: action.payload,
      },
    ],
  }),

  'SAVE_GOAL': (state, action) => u({
    items: { [action.payload.index]: {
      text: action.payload.text,
    }},
  }, state),
}, initialState);
