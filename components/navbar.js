import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

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
}));

export default function Navbar(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar variant="dense" className={classes.toolbar}>
          <Link href="/">
            <h1>Stonks Trader Pro</h1>
          </Link>
          <Link href="/buying">
            <Button variant="contained" className={classes.buyPageButton}>
              Buying
            </Button>
          </Link>

          <Link href="/selling">
            <Button variant="contained" className={classes.sellPageButton}>
              Selling
            </Button>
          </Link>

        </Toolbar>
      </AppBar>
    </div>
  )
}
