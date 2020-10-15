import { STOCK_PRICE_CHANGE, STOCK_SELL, STOCK_BUY } from '../actions/stocksActions'
import Stocks from '../../components/stocks.json'
import { toast } from "react-toastify";

const initialState = {
  stocks: Stocks,
  money: 5000
}

const stocksReducer = (state = initialState , action) => {


  switch (action.type){

    case STOCK_PRICE_CHANGE: {
      const newStocks = state.stocks.slice()
      for (let i = 0; i < newStocks.length; i++) {
        let newPrice = newStocks[i].price;
        const negative = Math.random() < .5 ? -1 : 1;
        newPrice = newPrice * (Math.random() * .03 * negative + 1).toFixed(2);      // returns a random integer from 0 to .15
        newStocks[i].price = newPrice.toFixed(2);
      }
      return Object.assign({}, state, {stocks:newStocks});
    }
    case STOCK_BUY: {

      //stock, quantity
      //quantity is the final number of stock
      //stock.owned is current number of stock possessed

      const {stockId, quantity} = action.payload

      const newStocks = state.stocks.slice()
      let newMoney = state.money
      const editIndex = newStocks.findIndex((stock)=> stock.id===stockId)
      const focusStock = newStocks[editIndex]

      const total = focusStock.price * quantity;

      newMoney -= total;

      focusStock.owned += quantity;
      newStocks[editIndex]=focusStock;
      toast.info(`Bought ${quantity} stocks for $${total.toFixed(2)}`)
      return Object.assign({}, state, {
        stocks: newStocks,
        money: newMoney
      })
      }

      //end of stockbuy

    case STOCK_SELL: {
      const newStocks = state.stocks.slice()
      let newMoney = state.money
      const { stockId, quantity } = action.payload
      const editIndex = newStocks.findIndex((stock) => stock.id === stockId)
      const focusStock = newStocks[editIndex]

      const total = focusStock.price * focusStock.owned;
      newMoney+=total;
      focusStock.owned-=quantity;
      toast.success(`Sold ${quantity} stocks for $${total.toFixed(2)}`)
      return Object.assign({}, state, {
        stocks: newStocks,
        money: newMoney
      })
    }

      //end of stock sell
    default:
      return state;
  } //end of switch case


  }



export default stocksReducer;
