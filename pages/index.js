import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'
import BuyingPage from '../components/buyingPage'
import SellingPage from '../components/sellingPage'
import HomePage from '../components/homePage'
import Stocks from '../components/stocks.json'

export default function Index() {
  const [view,setView] = useState('home');
  const [cash, setCash] = useState(5000);
  const [stocks, setStocks] = useState(Stocks);
  const [purchaseHistory, setPurchaseHistory] = useState([])

  useEffect(()=>{
    console.log(purchaseHistory)
  })

  function calculateStocks(){

  }

  function handleBuy(id, name, cost,  quantity, event){
    let purchasedStock = { id: id, name: name, cost: cost, owned: quantity }
    if (quantity > 0) {
      console.log('i want to buy', quantity ,'shares of '+id)
      for (let i = 0; i < purchaseHistory.length; i++) {
        if (purchaseHistory[i] && purchaseHistory[i].id === id) {
          purchasedStock = { id: id, name: name, cost: cost, owned: (purchaseHistory[i].owned + quantity) }
        }
      }
    } else {
      console.log('quantity must be greater than 0')
      quantity = 0
      purchasedStock = null
    }
    let newState = [...purchaseHistory, purchasedStock]
    setPurchaseHistory(newState)
  }

  let render;
  if (view ==='home'){
    render = <HomePage/>
  } else if (view === 'buying'){
    render =
      <BuyingPage
        handleBuy={handleBuy}
        stocks={stocks}
        purchaseHistory={purchaseHistory}/>
  } else if (view ==='selling'){
    render =
      <SellingPage
      purchaseHistory={purchaseHistory}/>
  }
  return (
    <>
    <Navbar
      setView={setView}
      availableCash={cash}
      />
    {render}
    </>
  );
}
