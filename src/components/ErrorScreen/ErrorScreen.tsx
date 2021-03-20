import React, { FC } from 'react';
import { Box, Button, Grid, Typography } from '@material-ui/core';
import { Build as BuildIcon, Block as BlockIcon } from '@material-ui/icons';
import { UIStore } from '@stores';
import { Navigation } from '@services';
import { useStyles } from './ErrorScreen.styles';

interface Props {
  type: 'internal' | 'access';
}

export const ErrorScreen: FC<Props> = ({ type }) => {
  const store = UIStore.useStore();
  const classes = useStyles();

  const handleHomepageClick = () => {
    Navigation.go('home');
  };

  return (
    <Box className={classes.content}>
      <Box className={classes.iconWrapper}>
        {type === 'internal' ? <BuildIcon className={classes.icon} /> : <BlockIcon className={classes.icon} />}
      </Box>
      <Typography variant="h5" align="center">
        {type === 'internal' ? (
          <>
            Sorry, something isn&apos;t right on our side.
            <br />
            It shouldn&apos;t take us long to fix it.
          </>
        ) : (
          <>Access to the page you were trying to reach is denied</>
        )}
      </Typography>
      <Typography variant="subtitle1" align="center" className={classes.text}>
        Here are some useful links that you can try instead:
      </Typography>
      <Grid container justify="center" alignItems="center" spacing={1}>
        <Grid item>
          <Button onClick={handleHomepageClick} variant="outlined" color="primary">
            Homepage
          </Button>
        </Grid>
        <Grid item>
          <Button variant="outlined" color="primary">
            Contact support
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};
