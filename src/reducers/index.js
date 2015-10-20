import { combineReducers } from 'redux';

import { goals } from './goals';

const rootReducer = combineReducers({
  goals,
});

export default rootReducer;
