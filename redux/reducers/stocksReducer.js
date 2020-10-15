import { STOCK_PRICE_CHANGE, STOCK_QUANTITY_CHANGE } from '../actions/stocksActions'
import Stocks from '../../components/stocks.json'

const initialState = {
  stocks: Stocks
}

const stocksReducer = (state = initialState , action) => {

  switch (action.type){
    case STOCK_PRICE_CHANGE:
      let newStocks = state.stocks.slice()
      for (let i = 0; i < newStocks.length; i++) {
        let newPrice = newStocks[i].price;
        const negative = Math.random() < .5 ? -1 : 1;
        newPrice = newPrice * (Math.random() * .03 * negative + 1).toFixed(2);      // returns a random integer from 0 to .15
        newStocks[i].price = newPrice.toFixed(2);
      }
      return Object.assign({},state,{stocks:newStocks});

    case STOCK_QUANTITY_CHANGE:
      //stock, quantity
      return Object.assign({}, state, {
        //changes
      })

    default:
      return state;
        }

  }


export default stocksReducer;
