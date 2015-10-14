const initialState = {
  activePage: 'home',
};

export function simple(state = initialState, action) {
  switch (action.type) {
  case 'CHANGE':
    return {
      ...state,
      activePage: action.page,
    };
  default:
    return state;
  }
}
