import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'
import BuyingPage from '../components/buyingPage'
import SellingPage from '../components/sellingPage'
import HomePage from '../components/homePage'


import { useDispatch, useSelector } from 'react-redux'
import store from '../redux/store'
import { stockPriceChange} from '../redux/actions/stocksActions'
import { ToastContainer,toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Index() {
  const [view,setView] = useState('home');

  const dispatch = useDispatch();
  const money = useSelector(state => state.stockState.money)

  useEffect(()=>{
    const timeUpdate = setInterval(updateStocks, 5000)
    return ()=> clearInterval(timeUpdate);
  },[])
  // let timeUpdate;
  // setTimeout(() => { timeUpdate = setInterval(updateStocks, 5000) }, 3000);

  function updateStocks() {
    dispatch(stockPriceChange());
    if(money>1000000){
      toast("Wow, a Million Dollars!!!1!")
    }
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
        money = {money}
        />
      {render}
      <ToastContainer
        autoClose={4000}
        limit={2}
        position="top-right"
        closeOnClick
      />
    </>
  );
}
