import u from 'updeep';

const initialState = {
  activeItem: -1,
  items: [{
    text: '',
  }],
};

export function goals(state = initialState, action) {
  console.log(action);
  switch (action.type) {
  case 'LOADED_ITEMS':
    return {
      activeItem: state.activeItem,
      items: [...action.items],
    };

  case 'OPEN':
    return {
      activeItem: action.index,
      items: [...state.items],
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
