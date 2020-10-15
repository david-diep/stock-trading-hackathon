import { makeStyles } from '@material-ui/core/styles'
import React, { useRef, useState } from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { List, ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core'

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
  }
}));

export default function SellingPage(props) {
  const classes = useStyles();
  let ownedStocksList = []



  for (let i = props.transactionHistory.length - 1; i >= 0 ; i--) {
      if (props.transactionHistory[i] !== null) {
    let stockId = ''
      let stockName = ''
      let pricePerShare = 0
      let owned
      const [quantity, setQuantity] = useState(0)



      for (let j = 0; j < ownedStocksList.length; j++) {
        if (ownedStocksList[j].id === props.transactionHistory[i].id) {
          console.log(ownedStocksList[j])
        }
      }

      stockId = props.transactionHistory[i].id
      stockName = props.transactionHistory[i].name
      pricePerShare = props.transactionHistory[i].cost
      owned = props.transactionHistory[i].owned



        ownedStocksList.push(
          <ListItem
            key={stockId}>
            <ListItemText
              className={classes.stockText}
              primary={stockName}
              secondary={pricePerShare} />
            <Typography className={classes.stockText}>Owned: {owned}</Typography>
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
            //onClick={(event) => { props.handleBuy(stockId, stockName, pricePerShare, parseInt(quantity), event) }}
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
