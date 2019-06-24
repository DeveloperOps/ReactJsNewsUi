import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { black } from 'ansi-colors';

const data = [
  {
    image: "https://www.economist.com/sites/default/files/images/2015/09/blogs/economist-explains/code2.png",
    code: "Home Source Code"
  },
  {
    image: "https://news-cdn.softpedia.com/images/news2/Keep-Your-Programming-Code-Safe-Obfuscate-It-480832-2.jpg",
    code: "Code Section"
  },
  {
    image: "https://www.fossmint.com/wp-content/uploads/2017/02/visual-studio-code.png",
    code: "Profile Section Code"
  }
]

const useStyles = makeStyles({
  card: {
    maxWidth: 430,
    marginTop: 5
  },
});

export default function Code() {
  const classes = useStyles();

  return (
<div>
    {data.map(item => (
      <div>
      
      <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="140"
          image={item.image}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {item.code}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Click below to get code
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Get Code!!
        </Button>
       
      </CardActions>
    </Card>
    <p>.</p>
 </div>
    ))}
   </div>
  );
}