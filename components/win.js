import React from 'react'
import { useSelector } from 'react-redux'
// import MakeItRain from 'react-make-it-rain'


export default function Win() {
  const money = useSelector(state => state.stockState.money)
  return (
    <>
      <Container>
        <Typography>Poopies</Typography>
        {/* <MakeItRain ></MakeItRain> */}
      </Container>
    </>
  )
}
