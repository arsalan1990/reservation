import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Paper from '@material-ui/core/Paper';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import MoreIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';



import MovenPick from './MovenPick'
import BeachLuxury from './BeachLuxury'
import Avari from './Avari'
import PC from './PC'
import Ramada from './Ramada';

// const messages = [
  
//     {
//   },
  
// ];

const useStyles = makeStyles((theme) => ({
  text: {
    padding: theme.spacing(2, 2, 0),
  },
  paper: {
    paddingBottom: 50,
  },
  list: {
    marginBottom: theme.spacing(2),
  },
  subheader: {
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    top: 'auto',
    bottom: 0,
  },
  grow: {
    flexGrow: 1,
  },
  text1:{
      textAlign:"center",
      fontSize: 20,
      height: 0,
      
  },
  fabButton: {
    position: 'absolute',
    zIndex: 1,
    top: -30,
    left: 0,
    right: 0,
    margin: '0 auto',
  },
  control: {
    padding: theme.spacing(2),
  },
  }));

export default function BottomAppBar() {
  const classes = useStyles();
  const [spacing, setSpacing] = React.useState(2);

  const handleChange = (event) => {
    setSpacing(Number(event.target.value));
  };

  return (
    <React.Fragment>
      <CssBaseline />
        <Paper square className={classes.paper}>
        <Typography className={classes.text} variant="h5" gutterBottom>  
        </Typography>
    <br />
{/* Moven pick      */}
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <MovenPick />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>   

{/* Beach Luxury */}
      <Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <BeachLuxury />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>        

{/* Avari */}

<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <PC />
            </Grid>
          ))}
        </Grid>
      </Grid>
      </Grid>     

{/* PC */}
<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Avari />
            </Grid>
          ))}
     </Grid>
  </Grid>
</Grid>

{/* Ramada */}
<Grid container className={classes.root} spacing={2}>
      <Grid item xs={12}>
        <Grid container justify="center" spacing={spacing}>
          {[0, 1, 2].map((value) => (
            <Grid key={value} item>
              <Ramada />
            </Grid>
          ))}
     </Grid>
  </Grid>
</Grid>
      </Paper>

      <AppBar position="fixed" color="primary" className={classes.appBar}>
      <div className={classes.text1}> Reservation </div>
      
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="open drawer">
            <MenuIcon />
          </IconButton>
          <div className={classes.grow} />
          <IconButton color="inherit">
            <SearchIcon />
          </IconButton>
          <IconButton edge="end" color="inherit">
            <MoreIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </React.Fragment>
  );
}

