import { Grid } from '@material-ui/core';
import React, { FC, useEffect } from 'react';
import { observer } from 'mobx-react';
import { BookStore } from '@stores';
import { BookCard } from '../BookCard';

export const BookList: FC = observer(() => {
  const store = BookStore.useStore();

  useEffect(() => {
    store.loadBooks();
  }, []);

  return (
    <Grid container spacing={4}>
      {store.books.map((book) => (
        <Grid key={book.id} item>
          <BookCard book={book} />
        </Grid>
      ))}
    </Grid>
  );
});
