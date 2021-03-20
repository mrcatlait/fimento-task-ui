import React, { FC } from 'react';
import { AppBar, Button, Container, Grid, Typography } from '@material-ui/core';
import { observer } from 'mobx-react';
import { Logo } from '@assets/images';
import { UIStore } from '@stores';
import { Navigation } from '@services';
import { useStyles } from './Header.styles';

export const Header: FC = observer(() => {
  const classes = useStyles();
  const uiStore = UIStore.useStore();

  const handleLogoClick = () => {
    Navigation.go('home');
  };

  const handleLoginClick = () => {
    Navigation.go('login');
  };

  const handleLogoutClick = () => {
    uiStore.logout();
  };

  return (
    <AppBar position="static" color="default" variant="outlined" className={classes.mb56}>
      <Container fixed className={classes.container}>
        <Grid container alignItems="center" justify="space-between">
          <Grid item>
            <Grid container alignItems="center">
              <img
                src={Logo}
                alt="Amazin - Best book store"
                height={50}
                className={classes.logo}
                onClick={handleLogoClick}
              />
            </Grid>
          </Grid>
          <Grid item>
            <Grid container alignItems="center" justify="flex-end" spacing={4}>
              {uiStore.isLoggedIn ? (
                <>
                  <Typography variant="subtitle1">Welcome, {uiStore.user?.username}</Typography>
                  <Button color="primary" className={classes.mr16} onClick={handleLogoutClick}>
                    Logout
                  </Button>
                </>
              ) : (
                <Button color="primary" className={classes.mr16} onClick={handleLoginClick}>
                  Login
                </Button>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </AppBar>
  );
});
