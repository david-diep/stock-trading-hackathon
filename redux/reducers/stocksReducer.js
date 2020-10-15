import { STOCK_PRICE_CHANGE, STOCK_OWNED_CHANGE } from '../actions/stocksActions'
import Stocks from '../../components/stocks.json'

const initialState = {
  stocks: Stocks,
  money: 5000
}

const stocksReducer = (state = initialState , action) => {
  const newStocks = state.stocks.slice()
  switch (action.type){
    case STOCK_PRICE_CHANGE:

      for (let i = 0; i < newStocks.length; i++) {
        let newPrice = newStocks[i].price;
        const negative = Math.random() < .5 ? -1 : 1;
        newPrice = newPrice * (Math.random() * .03 * negative + 1).toFixed(2);      // returns a random integer from 0 to .15
        newStocks[i].price = newPrice.toFixed(2);
      }
      return Object.assign({}, state, {stocks:newStocks});

    case STOCK_OWNED_CHANGE:

      //stock, quantity
      //quantity is the final number of stock
      //stock.owned is current number of stock possessed
      const {stockId, quantity} = action.payload

      let newMoney = state.money
      const editIndex = newStocks.findIndex((stock)=> stock.id===stockId)
      const focusStock = newStocks[editIndex]
      if (quantity > focusStock.owned){//if buying

        const buyAmount = quantity - focusStock.owned;

        const total = focusStock.price * buyAmount;
        if (total > newMoney){ //cancel if not enough money
          return state;
        } else {
          newMoney -= total;
          focusStock.owned += buyAmount;
          newStocks[editIndex]=focusStock;
          return Object.assign({}, state, {
            stocks: newStocks,
            money: newMoney
          })
        }
      } else {//if selling
        console.log('selling')
        const total = focusStock.price * focusStock.owned;
        newMoney+=total;
        focusStock.owned=quantity;
        return Object.assign({}, state, {
          stocks: newStocks,
          money: newMoney
        })

      }
      //end of STOCK_QUANTITY_CHANGE
    default:
      return state;
  } //end of switch case


  }



export default stocksReducer;
