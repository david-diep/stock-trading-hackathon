import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'
import BuyingPage from '../components/buyingPage'
import SellingPage from '../components/sellingPage'
import HomePage from '../components/homePage'

export default function Index() {
  const [view,setView] = React.useState('home')



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
    <Navbar setView={setView}/>
    {render}
    </>
  );
}
