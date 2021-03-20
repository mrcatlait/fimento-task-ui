import { Button, Card, CardActions, CardContent, CardMedia, Link, Typography } from '@material-ui/core';
import React, { FC } from 'react';
import { Book } from '@types';
import { BookStore, UIStore } from '@stores';
import { useStyles } from './BookCard.styles';

interface Props {
  book: Book;
}

export const BookCard: FC<Props> = ({ book }) => {
  const uiStore = UIStore.useStore();
  const bookStore = BookStore.useStore();
  const classes = useStyles();

  const amIAuthor = uiStore.user && uiStore.user?.userId === book.author?.id;

  const handleDelete = () => {
    bookStore.deleteBook(book.id);
  };

  return (
    <Card className={classes.root}>
      <CardMedia className={classes.media} image={book.imageUrl} title="Contemplative Reptile" />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {book.title}
        </Typography>
        <Typography gutterBottom variant="subtitle1" color="primary" component="p">
          Author: {book.author?.pseudonym}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {book.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Link href="https://www.amazin.com" target="_blank" rel="noopener" underline="none" color="inherit">
          <Button size="small" color="primary">
            Buy for ${book.price}
          </Button>
        </Link>
        {amIAuthor && (
          <Button size="small" className={classes.delete} onClick={handleDelete}>
            Delete book
          </Button>
        )}
      </CardActions>
    </Card>
  );
};
