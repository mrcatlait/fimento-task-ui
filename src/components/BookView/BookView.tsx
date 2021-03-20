import { Grid, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { BookStore } from '@stores';
import { BookList } from './components';

export const BookView: FC = () => {
  return (
    <BookStore.StoreProvider>
      <Grid container direction="column" spacing={4}>
        <Grid item>
          <Grid container spacing={3} alignItems="center">
            <Grid item>
              <Typography variant="h3">List of Books</Typography>
            </Grid>
          </Grid>
        </Grid>
        <Grid item>
          <BookList />
        </Grid>
      </Grid>
    </BookStore.StoreProvider>
  );
};
