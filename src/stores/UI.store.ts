import { action, configure, makeObservable, observable, runInAction } from 'mobx';
import { Auth, Navigation } from '@services';
import { User } from '@types';
import { AbstractStore } from './abstract.store';

configure({ enforceActions: 'observed' });

export class UIStore extends AbstractStore {
  public isLoggedIn = false;
  public user: User | null = null;

  constructor() {
    super();
    makeObservable(this, {
      isLoggedIn: observable,
      login: action,
      logout: action,
    });
    const currentUser = Auth.currentUser;
    if (currentUser) {
      this.isLoggedIn = true;
      this.user = currentUser;
    }
  }

  public async login(username: string, password: string): Promise<void> {
    runInAction(async () => {
      this.user = await Auth.login(username, password);
      this.isLoggedIn = true;
      Navigation.go('home');
    });
  }

  public logout(): void {
    Auth.logout();
    this.user = null;
    this.isLoggedIn = false;
    Navigation.go('login');
  }
}

export default new UIStore();
