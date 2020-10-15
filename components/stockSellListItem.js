import { makeStyles } from '@material-ui/core/styles';
import React, { useState } from 'react';
import Chip from '@material-ui/core/Chip';
import { ListItem, Button, ListItemSecondaryAction, ListItemText, TextField } from '@material-ui/core';
import { useDispatch } from 'react-redux'
import { stockOwnedChange } from '../redux/actions/stocksActions'
import Tooltip from '@material-ui/core/Tooltip';

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

export default function StockPurchaseListItem(props) {
  const stock = props.stock;
  const classes = useStyles();
  const dispatch = useDispatch();
  const [quantity, setQuantity] = useState(0)


  function handleSell() {
      dispatch(stockOwnedChange(stock.id, Math.max(0, stock.owned-quantity)));
  }

  return (
    <>
      <ListItem
        key={stock.id}>
        <Tooltip placement="bottom-start" title="Stock name and price" aria-label="Stock name and price">
        <ListItemText
          className={classes.stockText}
          primary={stock.name}
          secondary={'$' + stock.price} /></Tooltip>
        <Tooltip placement="left" title="Quantity owned" aria-label="Quantity owned">
        <Chip size="small" label={stock.owned} className={classes.chipColor} /></Tooltip>
        <Tooltip placement="bottom-start" title="Enter amount to sell" aria-label="Enter amount to sell">
        <TextField required
          onChange={event => { setQuantity(parseInt(event.target.value)) }}
          style={{ width: '20%' }}
          InputProps={{
            inputProps: {
              max: stock.owned, min: 1
            }
          }}
          id={stock.id}
          label="Quantity"
          variant="outlined"
          type="number"
          className={classes.quantityField} /></Tooltip>
      <Tooltip placement="top-end" title="Sell button" aria-label="Sell button">
        <Button
          className={classes.buyButton}
          variant="contained"
          color="primary"
          onClick={() => handleSell()}
        >Sell</Button></Tooltip>
      </ListItem>
    </>
  )
}
