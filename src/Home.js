import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import SwipeableViews from 'react-swipeable-views';
import { autoPlay } from 'react-swipeable-views-utils';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Divider from '@material-ui/core/Divider';



const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const tutorialSteps = [
  {
    imgPath:
      'https://www.tripsavvy.com/thmb/K7c6vYrioSIVmGUnuHXF6sDybks=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/how-to-visit-the-googleplex-google-hq-mountain-view-57e2d4515f9b586c3529ba9c.jpg',
  },
  {
    imgPath:
      'https://mspoweruser.com/wp-content/uploads/2016/09/Webgroesse_HighRes_Microsoft12711.jpg',
  },
  {
    imgPath:
      'https://usaherald.com/wp-content/uploads/2018/04/Facebook-Headquartes-Building-20.jpg',
  },
  
];





const carddata = [
  {
    avatar: "C",
    title: "University of Cambridge",
    subtitle: "How to learn",
    date: "June 23 2019",
    image: "https://www.sciencedaily.com/images/2019/05/190519191641_1_540x360.jpg",
    p1: "A fleet of driverless cars working together to keep traffic moving smoothly can improve overall traffic flow by at least 35 percent, researchers have shown.",
    p2: "The researchers, from the University of Cambridge, programmed a small fleet of miniature robotic cars to drive on a multi-lane track and observed how the traffic flow changed when one of the cars stopped  When the cars were not driving cooperatively, any cars behind the stopped car had to stop or slow down and wait for a gap in the traffic, as would typically happen on a real road. A queue quickly formed behind the stopped car and overall traffic flow was slowed."

  },
  {
    avatar: "U",
    title: "University of USA",
    subtitle: "How to learn",
    date: "June 23 2019",
    image: "https://www.sciencedaily.com/images/2019/06/190618123509_1_540x360.jpg",
    p1: "A fleet of driverless cars working together to keep traffic moving smoothly can improve overall traffic flow by at least 35 percent, researchers have shown.",
    p2: "The researchers, from the University of Cambridge, programmed a small fleet of miniature robotic cars to drive on a multi-lane track and observed how the traffic flow changed when one of the cars stopped  When the cars were not driving cooperatively, any cars behind the stopped car had to stop or slow down and wait for a gap in the traffic, as would typically happen on a real road. A queue quickly formed behind the stopped car and overall traffic flow was slowed."

  },
  {
    avatar: "D",
    title: "University of Delhi",
    subtitle: "How to learn",
    date: "June 23 2019",
    image: "https://www.sciencedaily.com/images/2019/06/190613104533_1_540x360.jpg",
    p1: "A fleet of driverless cars working together to keep traffic moving smoothly can improve overall traffic flow by at least 35 percent, researchers have shown.",
    p2: "The researchers, from the University of Cambridge, programmed a small fleet of miniature robotic cars to drive on a multi-lane track and observed how the traffic flow changed when one of the cars stopped  When the cars were not driving cooperatively, any cars behind the stopped car had to stop or slow down and wait for a gap in the traffic, as would typically happen on a real road. A queue quickly formed behind the stopped car and overall traffic flow was slowed."

  },
  {
    avatar: "L",
    title: "University of London",
    subtitle: "How to learn",
    date: "June 23 2019",
    image: "https://www.sciencedaily.com/images/2019/06/190605201117_1_540x360.jpg",
    p1: "A fleet of driverless cars working together to keep traffic moving smoothly can improve overall traffic flow by at least 35 percent, researchers have shown.",
    p2: "The researchers, from the University of Cambridge, programmed a small fleet of miniature robotic cars to drive on a multi-lane track and observed how the traffic flow changed when one of the cars stopped  When the cars were not driving cooperatively, any cars behind the stopped car had to stop or slow down and wait for a gap in the traffic, as would typically happen on a real road. A queue quickly formed behind the stopped car and overall traffic flow was slowed."

  },


]


const useStyles = makeStyles(theme => ({
  root: {
    maxWidth: 400,
    flexGrow: 1,
    
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    height: 50,
    paddingLeft: theme.spacing(4),
    backgroundColor: theme.palette.background.default,
  },
  img: {
    height: 255,
    display: 'block',
    maxWidth: 400,
    overflow: 'hidden',
    width: '100%',
  },
  card: {
    maxWidth: 430,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },

}));






function Home() {
  const classes = useStyles();
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = tutorialSteps.length;
  const [expanded, setExpanded] = React.useState(false);
  
  


  function handleExpandClick() {
    setExpanded(!expanded);
  }

  function handleNext() {
    setActiveStep(prevActiveStep => prevActiveStep + 1);
  }

  function handleBack() {
    setActiveStep(prevActiveStep => prevActiveStep - 1);
  }

  function handleStepChange(step) {
    setActiveStep(step);
  }

  return (
    



    <div className={classes.root}>
      <AutoPlaySwipeableViews
        axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
        index={activeStep}
        onChangeIndex={handleStepChange}
        enableMouseEvents
      >
        {tutorialSteps.map((step, index) => (
          <div>
            {Math.abs(activeStep - index) <= 2 ? (
              <img className={classes.img} src={step.imgPath}  />
            ) : null}
          </div>
        ))}
      </AutoPlaySwipeableViews>


      <Divider />

      <Typography variant="h5" gutterBottom>
      News Trending Today
      </Typography>
     

{
  
  carddata.map(item => (
    <div>
      <Card className={classes.card}>
      <CardHeader
        avatar={
          <Avatar aria-label="Recipe" className={classes.avatar}>
            {item.avatar}
          </Avatar>
        }
       
        title={item.title}
        subheader={item.date}
      />
     
      <CardMedia
        className={classes.media}
        image={item.image}
        title="News"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
          {item.p1}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="Add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="Share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="Show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
          {item.p2}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
    <Divider />

    </div>
     ))
      
}

</div>
  );
}

export default Home;