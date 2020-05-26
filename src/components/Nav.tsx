import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter, RouteComponentProps, Link as RouterLink } from 'react-router-dom';
import { Link } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    marginLeft: 3, 
    marginRight: 3,
  },
}));

function Nav(props: RouteComponentProps) {
  const classes = useStyles();

  const [pageTitle, setPageTitle] = useState("HOME");

  useEffect(() => {
    props.history.listen(() => {
      setPageTitle(window.location.pathname);
    })
  })

  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
        <MenuIcon />
        </IconButton>
        <Typography variant="h6" className={classes.title}>
        {pageTitle}
        </Typography>
        <Link component={RouterLink} to="/" color="secondary" className={classes.link}>
          Tests
        </Link>
        <Link component={RouterLink} to="/variants" color="secondary" className={classes.link}>
          Variants
        </Link>
        <Link component={RouterLink} to="/user-variants" color="secondary" className={classes.link}>
          User Variants
        </Link>
      </Toolbar>
    </AppBar> 
  )
}

export default withRouter(Nav);