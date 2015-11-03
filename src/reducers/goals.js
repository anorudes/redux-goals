import{ handleActions } from 'redux-actions';

const initialState = {
  showAdd: false,
  activeItem: null,
  showAddGoal: false,
  items: [{
    id: 0,
    text: '',
    pos: 0,
  }],
};

const getIndex = (items, id) => items.map(x => x.id).indexOf(id);
const getMaxID = (items) => Math.max(...items.map(({id}) => id));
const getMaxPos = (items) => Math.max(...items.map(({pos}) => pos));

const changePos = (items, id, pos) => {
  let sortItems = [...items];
  let posInc = 0;
  
  /* reset pos */
  items.sort((a, b) => a.pos - b.pos).map((item, index) => {
    posInc++;
    sortItems[index].pos = posInc;
  });

  /* change pos */
  for (const [index] of sortItems.entries()) {
    if (sortItems[index].id === id) {
      sortItems[index].pos = pos;
    } else {
      if (sortItems[index].pos >= pos) {
        posInc++;
        sortItems[index].pos = sortItems[index].pos + 1;
      }
    }
  }
  return sortItems;
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
    activeItem: state.items[getIndex(state.items, action.payload)],
    items: [...state.items],
  }),

  'ADD_GOAL': (state, action) => ({
    ...state,
    items: [
      ...state.items,
      {
        id: getMaxID(state.items) + 1,
        text: action.payload,
        pos: getMaxPos(state.items) + 1,
      },
    ],
  }),

  'CHANGE_GOAL_POS': (state, action) => ({
    ...state,
    items: changePos(state.items, action.payload.id, action.payload.pos),
  }),

  'SAVE_GOAL': (state, action) => ({
      ...state,
      activeItem: {
        id: action.payload.id,
        text: action.payload.text,
        pos: action.payload.pos,
      },
      items: [...state.items].map(item => {
        if (item.id === action.payload.id) {
          item.text = action.payload.text;
        }
        return item;
      }),
  }),
}, initialState);
