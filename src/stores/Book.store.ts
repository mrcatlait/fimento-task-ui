import { action, configure, makeObservable, observable, runInAction } from 'mobx';
import { Book } from '@types';
import { HTTP } from '@services';
import { AbstractStore } from './abstract.store';

configure({ enforceActions: 'observed' });

export class BookStore extends AbstractStore {
  public isFormOpen = false;
  public books: Book[] = [];

  constructor() {
    super();
    makeObservable(this, {
      books: observable,
      loadBooks: action,
      deleteBook: action,
    });
  }

  public async loadBooks(): Promise<void> {
    runInAction(async () => {
      const response = await HTTP.get<{ books: Book[] }>('/books');
      if (response) {
        this.books = response.data.books;
      }
    });
  }

  public async deleteBook(id: number): Promise<void> {
    runInAction(async () => {
      await HTTP.delete(`/books/${id}`, true);
      this.books = this.books.filter((book) => book.id !== id);
    });
  }
}

export default new BookStore();
