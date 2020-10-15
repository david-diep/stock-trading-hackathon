import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  tutorialHeading: {
    marginTop: '20px',
    marginBottom: '12px'
  },
  containerStyle: {
    height: '100vh',
    width: '100vw'
  },
  headingStyle: {
    marginTop: '10px'
  },
  gridTextLeft: {
    marginTop: '20px'
  }
}));

export default function HomePage() {
  const classes = useStyles();
  return (
    <>
      <Container maxwidth="sm" className={classes.containerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.headingStyle} variant="h3" align="center">
              Welcome to <br /> Stonks Trader Pro
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.gridTextLeft} align="left">A stock market simulator.
            <br />
            Users can buy and sell stocks while tracking their available balance of cash.
            <br />
            Made by <a href="https://www.linkedin.com/in/david-diep-dev/ " target="__blank">David Diep</a> and <a href="https://www.linkedin.com/in/timahn-webdev/" target="__blank">Tim Ahn</a>
            <br />
              <a href="https://github.com/david-diep/stock-trading-hackathon">Checkout the code!</a>
          </Typography>
          </Grid>
        </Grid>
        <br />
        <Typography className={classes.tutorialHeading} variant="h4">
          Tutorial
        </Typography>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel1a-content"
            id="panel1a-header"
          >
            <Typography variant="h6">Buying Stocks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <List>
                <ListItem>To view stocks available for purchase, click on the green Buying button in the top navigation bar.</ListItem>
                <ListItem>You may buy a specific amount of stocks by entering the amount of stocks you wish to buy and clicking on the Buy button.</ListItem>
              </List>
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Selling Stocks</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <List>
                <ListItem>To view stocks owned, click on the red Selling button in the top navigation bar.</ListItem>
                <ListItem>A bubble indicating the amount of stocks owned will be displayed next to each stock.</ListItem>
                <ListItem>You may sell a specific amount of stocks by entering the amount of stocks you wish to sell and clicking on the Sell button.</ListItem>
              </List>
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Available Funds</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <List>
                <ListItem>Your available balance is displayed in the top navigation bar.</ListItem>
                <ListItem>If you have sufficient funds, you can purchase stocks and your available funds will decrease.</ListItem>
                <ListItem>If you sell stocks, your available funds will increase.</ListItem>
              </List>
          </Typography>
          </AccordionDetails>
        </Accordion>
        <Accordion>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls="panel2a-content"
            id="panel2a-header"
          >
            <Typography variant="h6">Stock Price Changes</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              <List>
                <ListItem>Stock prices change in real-time and a new price is dynamically displayed every five seconds.</ListItem>
              </List>
            </Typography>
          </AccordionDetails>
        </Accordion>
      </Container>
    </>
  );
}
