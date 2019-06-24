import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Icon from '@material-ui/core/Icon';
import {Link , NavLink} from 'react-router-dom';


const useStyles = makeStyles({
  root: {
    width: '100%',
    position: 'fixed',
    bottom: 0,
    zIndex: 99999,
  },
});

export default function BottomNav() {
  const classes = useStyles();
  const [value, setValue] = React.useState('recents');
  
  function handleChange(event, newValue) {
    setValue(newValue);
  }

 
  return (
   
    <BottomNavigation value={value} onChange={handleChange} className={classes.root}>
     <NavLink style={{ textDecoration: 'none' }} to="/"><BottomNavigationAction label="Home" value="home" icon={<Icon>home</Icon>} /></NavLink>
     <NavLink style={{ textDecoration: 'none' }} to="/code"><BottomNavigationAction label="Code" value="code" icon={<Icon>code</Icon>} /></NavLink>
     <NavLink style={{ textDecoration: 'none' }} to="/profile"><BottomNavigationAction label="people" value="folder" icon={<Icon>people</Icon>} /></NavLink>
    </BottomNavigation>
    
  );
}
