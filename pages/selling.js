import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'

export default function Selling() {
  return (
    <>
      <Navbar />
      <Container>

        <Box my={4}>
          <h1>Selling</h1>
        </Box>
      </Container>
    </>
  );
}
