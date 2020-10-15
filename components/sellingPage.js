import { makeStyles } from '@material-ui/core/styles'
import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'
import StockSellListItem from './stockSellListItem'


const useStyles = makeStyles((theme) => ({
  sellButton: {
    marginTop: '4px',
    background: '#e75480'
  },
  quantityField: {
    marginRight: '10px'
  },
  stockText: {
    marginRight: '10px'
  },
  chipColor: {
    backgroundColor: '#014d4e',
    color: 'white',
    marginRight: '10px'
  }
}));

export default function SellingPage() {
  const classes = useStyles();

  const stocks = useSelector(state => state.stockState.stocks)
  const money = useSelector(state => state.stockState.money)
  let ownedStocksList = stocks.filter(stock => stock.owned > 0).map((stock)=>{
      return <StockSellListItem key={stock.id} money={money} stock={stock}/>
  })



  return (
    <>
      <Container>

        <Box my={4}>
          <h1>Selling</h1>
        </Box>
        <List>
          {ownedStocksList}
          {ownedStocksList.length === 0 && <h2>No Stocks Owned</h2>}
        </List>
      </Container>

    </>
  );
}
