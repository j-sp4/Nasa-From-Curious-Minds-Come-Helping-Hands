import React from 'react';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import { mainListItems } from '../ListItems';
import {useStyles} from './styles'
import HomeMapScreen from '../HomeMapScreen';
import ResultsScreen from '../ResultsScreen'
import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import Icon from '../../assets/icon.png'

const App = () => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  const tallHeightPaper = clsx(classes.paper, classes.fixedTallHeight);

  const smallHeightPaper = clsx(classes.paper, classes.fixedSmallHeight)

  return (
    <Router>
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="absolute" className={clsx(classes.appBar, open && classes.appBarShift)}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(classes.menuButton, open && classes.menuButtonHidden)}
          >
            <MenuIcon />
          </IconButton>
          <Typography component="h1" variant="h6" color="inherit" noWrap className={classes.title}>
            NASA Disaster Indexing
          </Typography>
          <IconButton color="inherit">
              <img src={Icon} width="40px" />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <ChevronLeftIcon />
          </IconButton>
        </div>
        <Divider />
        <List>{mainListItems}</List>
      </Drawer>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Switch>
          <Route exact path= '/' component={()=><HomeMapScreen classes={classes} tall={tallHeightPaper} small={smallHeightPaper}/>}/>
          <Route exact path= '/result' component={()=><ResultsScreen classes={classes} tall={tallHeightPaper} small={smallHeightPaper}/>}/>
        </Switch>
      </main>
    </div>
    </Router>

  );
}

export default App