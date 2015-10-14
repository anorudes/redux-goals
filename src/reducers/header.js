const initialState = {  
};

export function simple(state = initialState, action) {
  switch (action.type) {
  case 'CHANGE':
    return {
      ...state,      
    };
  default:
    return state;
  }
}
