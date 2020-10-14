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

  useEffect(()=>{

  })

  function calculateStocks(){

  }

  function handleBuy(id, name, cost, owned, event){
    console.log('$'+id+' ' +name+ ' was clicked, the price per share is: ' +cost+ ' and you own ' +owned+ ' shares.' )
  }

  let render;
  if (view ==='home'){
    render = <HomePage/>
  } else if (view === 'buying'){
    render =
    <BuyingPage
      handleBuy={handleBuy}
      stocks={stocks}/>
  } else if (view ==='selling'){
    render = <SellingPage stocks={stocks}/>
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
