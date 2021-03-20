import { createStoreContext } from '@utils';

export abstract class AbstractStore {
  public useStore: () => this;
  public StoreProvider;

  constructor() {
    const { StoreProvider, useStore } = createStoreContext(this);
    this.StoreProvider = StoreProvider;
    this.useStore = useStore;
  }
}
