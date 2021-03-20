import { Author } from './author';

export type Book = {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  price: string;
  author?: Author;
};
