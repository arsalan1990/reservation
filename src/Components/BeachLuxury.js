import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    margin: 20, 
  },
  text:{
    textAlign:"",
    fontSize: 16,
    height: 0,
},
});


export default function BeachLuxury() {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Luxury Room"
          height="150"
          image="/images/beachluxury.jpg"
          title="Luxury Room"
        />
        <CardContent>
          <Grid>
          <Typography gutterBottom variant="h5" component="h2">
          Beach Luxury &nbsp; <span className={classes.text}>Single . Quad . King</span>
          </Typography>
          </Grid>

          <Typography variant="body2" color="textSecondary" component="p">
          Warm rooms & suites in a sea-view lodging with 3 restaurants, plus gardens, a pool & free breakfast.
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Details
        </Button>
        <Button size="small" color="primary">
          Add to Cart
        </Button>
        <Button size="small" color="primary">
          Location
        </Button>
      </CardActions>
    </Card>
  );
}