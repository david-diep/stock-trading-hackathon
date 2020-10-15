import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  navbar: {
    background:'#014d4e'
  },
  toolbar: {
    display:'flex',
  },
  buyPageButton: {
    background: '#80c0c0',
    marginLeft:'10px'
  },
  sellPageButton: {
    background: '#e75480',
    marginLeft:'10px'
  },
  availableCash: {
    padding: '10px'
  },
}));

export default function Navbar(props) {
  const classes = useStyles();
  const money = useSelector(state => state.stockState.money)

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense" className={classes.toolbar}>

            <h1>Stonks Trader Pro</h1>

            <Button onClick={()=>props.setView('buying')} variant="contained" className={classes.buyPageButton}>
              Buying
            </Button>

          <Button onClick={() => props.setView('selling')} variant="contained" className={classes.sellPageButton}>
              Selling
            </Button>

          <Typography className={classes.availableCash}>
            <b>Available Cash:</b> ${money}
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  )
}
