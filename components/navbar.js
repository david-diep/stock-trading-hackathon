import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { useSelector} from 'react-redux'
import Tooltip from '@material-ui/core/Tooltip';

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

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense" className={classes.toolbar}>

          <Tooltip placement="bottom" title="View tutorial" aria-label="View tutorial">
            <h1 onClick={() => props.setView('home')}>Stonks Trader Pro</h1>
          </Tooltip>


          <Tooltip placement="bottom" title="Buy stocks" aria-label="Buy stocks">
            <Button onClick={()=>props.setView('buying')} variant="contained" className={classes.buyPageButton}>
            Buying
            </Button>
          </Tooltip>

          <Tooltip placement="bottom" title="Sell stocks" aria-label="Sell stocks">
          <Button onClick={() => props.setView('selling')} variant="contained" className={classes.sellPageButton}>
              Selling
            </Button>
            </Tooltip>

          <Tooltip placement="bottom" title="Available balance of cash" aria-label="Available balance of cash">
          <Typography className={classes.availableCash}>
              <b>Available Cash: $</b> {props.money.toFixed(2)}
          </Typography>
          </Tooltip>
        </Toolbar>
      </AppBar>
    </div>
  )
}
