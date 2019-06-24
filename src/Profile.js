import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Chip from '@material-ui/core/Chip';
import Divider from '@material-ui/core/Divider';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';

const listdata = [
  {
    data: "mail: devops@xyz.com"
  },
  {
    data: "Address: this.street xyz"
  },
  {
    data: "Phone: +49 21434868"
  },
  {
    data: "Hobbies: Reading , Singing"
  },
  {
    data: "Extras: XYZ , JKL , ILO"
  },
]
const useStyles = makeStyles({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  rootList: {
    width: '100%',
    maxWidth: 360,
  
  },
   
  avatar: {
    margin: 10,
  },
  bigAvatar: {
    margin: 10,
    width: 145,
    height: 150,
  },
  typo: {
    textAlign: "center"
  },
 
  
});


export default function Profile() {
  const classes = useStyles();
  
  return (
    <div>
    
    <Grid container justify="center" alignItems="center">
      <Avatar alt="DevOps" src="https://cdn-images-1.medium.com/max/1600/1*6W5eurFhYPpwNbRbqNImgQ.jpeg" className={classes.bigAvatar} />
    </Grid>
    <Typography className={classes.typo} variant="h4" component="h2" gutterBottom>
        Devops
    </Typography>
    <Divider />

    <div className={classes.root}>
      <Chip
        label="React js Developer"
        color="primary"
      />
    </div>

    {listdata.map(item =>(
      <List component="nav" className={classes.rootList} aria-label="Contacts">
      
      <ListItem button>
      <ListItemIcon>
          <StarIcon />
        </ListItemIcon>
        <ListItemText inset primary={item.data} />
      </ListItem>
    </List>
    ))}
    
    </div>
  );
}