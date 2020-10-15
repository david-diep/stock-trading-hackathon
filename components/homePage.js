import React from 'react';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Accordion from '@material-ui/core/Accordion'
import AccordionSummary from '@material-ui/core/AccordionSummary'
import AccordionDetails from '@material-ui/core/AccordionDetails'
import ExpandMoreIcon from '@material-ui/icons/ExpandMore'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
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
      <Container maxwidth="sm"  className={classes.containerStyle}>
        <Grid container>
          <Grid item xs={6}>
            <Typography className={classes.headingStyle} variant="h3" align="center">
              Welcome to <br/> Stonks Trader Pro
          </Typography>
          </Grid>
          <Grid item xs={6}>
            <Typography className={classes.gridTextLeft} align="left">A stock market simulator. <br/> Users can buy and sell stocks while tracking their available balance of cash.</Typography>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}
