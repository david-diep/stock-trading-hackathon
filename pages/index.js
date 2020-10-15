import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'
import BuyingPage from '../components/buyingPage'
import SellingPage from '../components/sellingPage'
import HomePage from '../components/homePage'


import { useDispatch } from 'react-redux'
import store from '../redux/store'
import { stockPriceChange} from '../redux/actions/stocksActions'

export default function Index() {
  const [view,setView] = useState('home');

  const dispatch = useDispatch();

  let timeUpdate;
  setTimeout(() => { timeUpdate = setInterval(updateStocks, 5000) }, 3000);

  function updateStocks() {
    dispatch(stockPriceChange());
  }

  let render;
  if (view ==='home'){
    render = <HomePage/>
  } else if (view === 'buying'){
    render = <BuyingPage/>
  } else if (view ==='selling'){
    render = <SellingPage/>
  }
  return (
    <>
      <Navbar
        setView={setView}
        />
      {render}
    </>
  );
}
