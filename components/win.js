import React from 'react'
import { useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import MakeItRain from 'react-make-it-rain'

const useStyles = makeStyles((theme) => ({
  youWin: {
    textAlign: 'center'

  },
  woo: {
    position: 'fixed'
  }
}))

export default function Win() {
  const classes = useStyles()
  const money = useSelector(state => state.stockState.money)
  return (
    <>
      <Container>
        <Typography className={classes.youWin} variant='h4' align='center'>You win!</Typography>
        <MakeItRain className={classes.woo} dropCount={1000} />
      </Container>
    </>
  )
}
