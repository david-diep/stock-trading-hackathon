import stocksReducer from './stocksReducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
  stocks: stocksReducer
});

export default rootReducer;
