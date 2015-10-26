import u from 'updeep';

const initialState = {
  showAdd: false,
  activeItem: -1,
  showAddGoal: false,
  items: [{
    text: '',
  }],
};

export function goals(state = initialState, action) {
  switch (action.type) {
  case 'SHOW_ADD_GOAL':
    return {
      ...state,
      showAddGoal: true,
    };

  case 'ADD_GOAL_TOGGLE':
    return {
      ...state,
      showAddGoal: !state.showAddGoal,
    };

  case 'LOADED_ITEMS':
    return {
      ...state,
      activeItem: state.activeItem,
      items: [...action.items],
    };

  case 'OPEN':
    return {
      ...state,
      activeItem: action.index,
      items: [...state.items],
    };

  case 'ADD':
    return {
      ...state,
      items: [
        ...state.items,
        {
          text: action.text,
        },
      ],
    };

  case 'SAVE':
    return u({
      items: { [action.index]: {
        text: action.text,
      }},
    }, state);

  default:
    return state;
  }
}
