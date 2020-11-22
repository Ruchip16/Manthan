import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import ClassRoundedIcon from '@material-ui/icons/ClassRounded';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import GitHubIcon from '@material-ui/icons/GitHub';
import HomeRoundedIcon from '@material-ui/icons/HomeRounded';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItemText from '@material-ui/core/ListItemText';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsRoundedIcon from '@material-ui/icons/SettingsRounded';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Styles from '../../assets/jss/components/Navbar/NavbarStyles';
import Login from './LoginMenu';

const useStyles = makeStyles(Styles);

export default function MenuAppBar() {
  const classes = useStyles();
  const [state, setState] = React.useState({left: false});
  const [openlist, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!openlist);
  };
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setState({ ...state, left: open });
  };
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" onClick={toggleDrawer(true)} aria-label="menu">
            <MenuIcon/>
          </IconButton>
          <Typography variant="h6" className={classes.title}>Manthan</Typography>
          <Login/>
        </Toolbar>
      </AppBar>
      <Drawer className={classes.list} open={state['left']} onClose={toggleDrawer(false)} role="presentation">
        <List  className={classes.list}t>
          <ListItem button component='a' href = '/' >
            <ListItemIcon><HomeRoundedIcon/></ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItem>
        </List>
        <Divider />
        <List component="nav" aria-labelledby="list-subheader" subheader={<ListSubheader component="div" id="list-subheader"> Enrolled </ListSubheader>}>
          <ListItem button onClick={handleClick}>
            <ListItemIcon><ClassRoundedIcon/></ListItemIcon>
              <ListItemText primary="Classroom" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon><ClassRoundedIcon/></ListItemIcon>
              <ListItemText primary="Classroom" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon><ClassRoundedIcon/></ListItemIcon>
              <ListItemText primary="Classroom" />
          </ListItem>
          <ListItem button onClick={handleClick}>
            <ListItemIcon><ClassRoundedIcon/></ListItemIcon>
              <ListItemText primary="Classroom" />
          </ListItem>
        </List>
        <Divider />
        <List>
          <ListItem button>
            <ListItemIcon><SettingsRoundedIcon /></ListItemIcon>
            <ListItemText>Setting</ListItemText>
          </ListItem>
          <ListItem button component='a' href = 'https://github.com/Manthan933/Manthan'>
            <ListItemIcon><GitHubIcon /></ListItemIcon>
            <ListItemText>GitHub</ListItemText>
          </ListItem>
        </List>
      </Drawer>
    </div>
  );
}