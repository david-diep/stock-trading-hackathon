import { makeStyles } from '@material-ui/core/styles';
import React, {useRef, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'
import { stockOwnedChange } from '../redux/actions/stocksActions'
import StockListItem from '../components/stockListItem'




export default function BuyingPage() {
  //const classes = useStyles();
  const dispatch = useDispatch();

  const stocks = useSelector(state => state.stockState.stocks)
  const money = useSelector(state => state.stockState.money)
  const stockList = stocks.map((stock)=>
    (<StockListItem key={stock.id} stock={stock} money={money}/>));




  return (
    <>
      <Container>
        <Box my={4}>
          <h1>Buying</h1>
        </Box>
        <List >
          {stockList}
        </List>

      </Container>
    </>
  );
}
