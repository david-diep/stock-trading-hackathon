import stocksReducer from './stocksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stockState: stocksReducer
});

export default rootReducer;
