import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Navbar from '../components/navbar'

export default function Buying() {
  return (
    <>
      <Navbar />
      <Container>

        <Box my={4}>
          <h1>Buying</h1>
        </Box>
      </Container>
    </>
  );
}
