import { makeStyles } from '@material-ui/core/styles'
import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Chip from '@material-ui/core/Chip';
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core'
import { useSelector } from 'react-redux'

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
  let ownedStocksList = []

  for (let i = 0; i < stocks.length; i++) {
    if (stocks[i] !== null) {
      let stockId = ''
      let stockName = ''
      let pricePerShare = 0
      let owned
      const [quantity, setQuantity] = useState(0)

      for (let j = 0; j < ownedStocksList.length; j++) {
        if (ownedStocksList[j].id === stocks[i].id) {
          console.log(ownedStocksList[j])
        }
      }
      stockId = stocks[i].id
      stockName = stocks[i].name
      pricePerShare = stocks[i].cost
      owned = stocks[i].owned

      ownedStocksList.push(
        <ListItem
          key={stockId}>
          <ListItemText
            className={classes.stockText}
            primary={stockName}
            secondary={pricePerShare} />
          {/* <Typography className={classes.stockText}>Owned: {owned}</Typography> */}
          <Chip size="small" label={owned} className={classes.chipColor} />
          <TextField required
            onChange={e => { setQuantity(parseInt(e.target.value)) }}
            id={stockId}
            label="Quantity"
            variant="outlined"
            type="number"
            className={classes.quantityField} />
          <Button
            className={classes.sellButton}
            variant="contained"
            color="secondary"
          //onClick={(event) => { , event) }}
          >Sell</Button>
        </ListItem>
      )
    }
  }

  return (
    <>
      <Container>

        <Box my={4}>
          <h1>Selling</h1>
        </Box>
        <List>
          {ownedStocksList}
        </List>
      </Container>
    </>
  );
}
