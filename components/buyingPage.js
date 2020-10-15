import { makeStyles } from '@material-ui/core/styles';
import React, {useRef, useState} from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import { useSelector, useDispatch } from 'react-redux'

const useStyles = makeStyles((theme) => ({
  buyButton: {
    marginTop: '4px'
  },
  quantityField: {
    marginRight: '10px'
  },
  stockText: {
    marginRight: '10px'
  }
}));

 // function getPurchaseCost(id, cost, quantity){
  //   const ppsFloat = parseFloat(cost.slice(1, cost.length))
  //   const purchaseCost = (ppsFloat * quantity).toFixed(2)
  //   console.log(+ quantity + ' shares of ' + id + ' will cost ' + '$' + purchaseCost)
  //   return purchaseCost
  // }

  // function handleBuy(id, name, cost,  quantity, event){
  //   let purchasedStock = { id: id, name: name, cost: cost, owned: quantity }
  //   if (quantity > 0) {
  //     console.log('i want to buy', quantity ,'shares of ' + id)
  //     for (let i = 0; i < purchaseHistory.length; i++) {
  //       if (purchaseHistory[i] && purchaseHistory[i].id === id) {
  //         purchasedStock = { id: id, name: name, cost: cost, owned: (purchaseHistory[i].owned + quantity) }
  //       }
  //     }
  //   } else {
  //     console.log('quantity must be greater than 0')
  //     quantity = 0
  //     purchasedStock = null
  //   }
  //   const buyCost = getPurchaseCost(id, cost, quantity)
  //   if (cash > buyCost) {
  //     setCash((cash - buyCost).toFixed(2))
  //   } else {
  //     purchasedStock = null
  //     console.log('you dont have enough money for this transaction')
  //   }
  //   let newState = [...purchaseHistory, purchasedStock]
  //   setPurchaseHistory(newState)
  // }

export default function BuyingPage() {
  const classes = useStyles();

  const stocks = useSelector(state => state.stockState.stocks)

  let stockList = []
  for(let i=0; i<stocks.length; i++){
    const stockId = stocks[i].id
    const stockName = stocks[i].name
    const pricePerShare = stocks[i].cost
    const [quantity, setQuantity] = useState(0)
    stockList.push(
      <ListItem
        key={stockId}>
        <ListItemText
          className={classes.stockText}
          primary={stockName}
          secondary={pricePerShare}/>
          <TextField required
            onChange={e => { setQuantity(parseInt(e.target.value)) }}
            id={stockId}
            label="Quantity"
            variant="outlined"
            type="number"
            className={classes.quantityField}/>
          <Button
            className={classes.buyButton}
            variant="contained"
            color="primary"
            //onClick={(event) => { props.handleBuy(stockId, stockName, pricePerShare, parseInt(quantity), event)}}
          >Buy</Button>
      </ListItem>
  )}

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
