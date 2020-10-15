import React, {useEffect, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'
import BuyingPage from '../components/buyingPage'
import SellingPage from '../components/sellingPage'
import HomePage from '../components/homePage'


import { Provider, useDispatch } from 'react-redux'
import store from '../redux/store'
import { stockPriceChange} from '../redux/actions/stocksActions'

export default function Index() {
  const [view,setView] = useState('home');
  const [cash, setCash] = useState(5000);
  const dispatch = useDispatch();

  const mapStateToProps = (state) =>{

  }

  let timeUpdate;
  setTimeout(() => { timeUpdate = setInterval(updateStocks, 5000)},3000);

  function updateStocks(){
    dispatch(stockPriceChange());
  }
  // function updateStocks(){
  //   setStocks(prevStocks =>{
  //     console.log('updating');
  //     for(let i=0; i < prevStocks.length; i++){
  //       let newPrice = prevStocks[i].price;
  //       const negative = Math.random()<.5 ? -1 : 1;
  //       newPrice = newPrice*(Math.random() * .03 *negative +1).toFixed(2);      // returns a random integer from 0 to .15
  //       prevStocks[i].price = newPrice.toFixed(2);
  //     }
  //     return prevStocks;
  //   })
  // }

  let render;
  if (view ==='home'){
    render = <HomePage/>
  } else if (view === 'buying'){
    render = <BuyingPage/>
  } else if (view ==='selling'){
    render = <SellingPage/>
  }
  return (
    <Provider store={store}>
    <Navbar
      setView={setView}
      availableCash={cash}
      />
    {render}
    </Provider>
  );
}
