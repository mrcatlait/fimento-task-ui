import React, { FC, createContext, useContext } from 'react';

export const createStoreContext = <Store extends unknown>(
  store: Store,
): {
  StoreProvider: FC;
  useStore: () => Store;
} => {
  const StoreContext = createContext<Store>({} as Store);

  const StoreProvider: FC = ({ children }) => <StoreContext.Provider value={store}>{children}</StoreContext.Provider>;

  const useStore = (): Store => useContext(StoreContext);

  return { StoreProvider, useStore };
};
