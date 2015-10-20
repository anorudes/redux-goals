const initialState = {
  activeItem: 0,
  items: [{
    text: 'message',
  }, {
    text: 'message',
  }, {
    text: 'message',
  }],
};

export function goals(state = initialState, action) {
  switch (action.type) {
  case 'OPEN':
    return {
      activeItem: action.index,
      items: [...state.items],
    };
  default:
    return state;
  }
}
