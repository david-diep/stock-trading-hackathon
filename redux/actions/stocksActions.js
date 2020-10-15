//Action Types
export const STOCK_PRICE_CHANGE = "STOCK_PRICE_CHANGE";
export const STOCK_QUANTITY_CHANGE = "STOCK_QUANTITY_CHANGE";
//Action Creator
export const stockPriceChange = () => {
  return {type: STOCK_PRICE_CHANGE}
}

export const stockQuantityChange = (stock, quantity) =>{
  return {type: STOCK_QUANTITY_CHANGE,
  payload:{
    stock:stock,
    quantity: quanttiy
  }}
}
