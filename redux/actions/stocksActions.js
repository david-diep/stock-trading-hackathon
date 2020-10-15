//Action Types
export const STOCK_PRICE_CHANGE = "STOCK_PRICE_CHANGE";
export const STOCK_BUY = "STOCK_BUY";
export const STOCK_SELL = "STOCK_SELL"

//Action Creator
export const stockPriceChange = () => {
  return {type: STOCK_PRICE_CHANGE}
}

export const stockBuy = (stockId, quantity) =>{
  return {
    type: STOCK_BUY,
  payload:{
    stockId,
    quantity
  }}
}

export const stockSell = (stockId, quantity) => {
  return {
    type: STOCK_SELL,
    payload: {
      stockId,
      quantity
    }
  }
}
