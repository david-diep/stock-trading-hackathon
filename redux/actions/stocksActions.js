//Action Types
export const STOCK_PRICE_CHANGE = "STOCK_PRICE_CHANGE";
export const STOCK_OWNED_CHANGE = "STOCK_QUANTITY_CHANGE";

//Action Creator
export const stockPriceChange = () => {
  return {type: STOCK_PRICE_CHANGE}
}

export const stockOwnedChange = (stockId, quantity) =>{
  return {
    type: STOCK_OWNED_CHANGE,
  payload:{
    stockId,
    quantity
  }}
}
