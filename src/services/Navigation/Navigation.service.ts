import { createBrowserHistory, History } from 'history';
import { routes } from '@constants';

class NavigationService {
  public readonly history: History;

  constructor() {
    this.history = createBrowserHistory({ basename: '/' });
  }

  public go(key: keyof typeof routes): void {
    this.history.push(routes[key].route);
  }
}

export default new NavigationService();
