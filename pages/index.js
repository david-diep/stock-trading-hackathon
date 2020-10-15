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
  const [transactionHistory, setTransactionHistory] = useState([])

  useEffect(()=>{
    // console.log('you have $' + cash + ' remaining.')
    console.log('Transaction History: ', transactionHistory)
  })

  function getTransactionCost(id, cost, quantity){
    const ppsFloat = parseFloat(cost.slice(1, cost.length-1))
    const transactionCost = (ppsFloat * quantity).toFixed(2)
    console.log(+ quantity + ' shares of ' + id + ' will cost ' + '$' + transactionCost)
    return transactionCost
  }

  function handleBuy(id, name, cost,  quantity, event){
    let stock = { id: id, name: name, cost: cost, owned: quantity }
    if (quantity > 0) {
      console.log('i want to buy', quantity ,'shares of ' + id)
      for (let i = 0; i < transactionHistory.length; i++) {
        if (transactionHistory[i] && transactionHistory[i].id === id) {
          stock = { id: id, name: name, cost: cost, owned: (transactionHistory[i].owned + quantity) }
        }
      }
    } else {
      console.log('quantity must be greater than 0')
      quantity = 0
      stock = null
    }
    const buyCost = getTransactionCost(id, cost, quantity)
    if (cash > buyCost) {
      setCash((cash - buyCost).toFixed(2))
    }
    // else {
    //   stock = null
    //   console.log('you dont have enough money for this transaction')
    // }
    if (stock !== null){
    let newState = [...transactionHistory, stock]
    setTransactionHistory(newState)}
  }

  let render;
  if (view ==='home'){
    render = <HomePage/>
  } else if (view === 'buying'){
    render =
      <BuyingPage
        handleBuy={handleBuy}
        stocks={stocks}
      transactionHistory={transactionHistory}/>
  } else if (view ==='selling'){
    render =
      <SellingPage
      transactionHistory={transactionHistory}/>
  }
  return (
    <>
    <Navbar
      setView={setView}
      availableCash={cash}/>
    {render}
    </>
  );
}
