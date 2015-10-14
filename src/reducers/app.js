const initialState = {
  activePage: 'home',
};

export function app(state = initialState, action) {
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
