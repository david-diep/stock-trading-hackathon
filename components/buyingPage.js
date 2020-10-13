import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import stocks from './stocks.json'

export default function BuyingPage() {
  // 🤔
  // const ownedStocks = []
  // for (let i = 0; i < stocks.length; i++) {
  //   if (stocks[i].owned > 0) {
  //     ownedStocks.push(stocks[i])
  //   }
  // }

  return (
    <>
      <Container>

        <Box my={4}>
          <h1>Buying</h1>
        </Box>



      </Container>

      {/* 🤔
      <ul>
        {ownedStocks.map(stock => {
          <li key={stock.id}>
            {stock.name}
          </li>
        })}
      </ul> */}
    </>
  );
}
