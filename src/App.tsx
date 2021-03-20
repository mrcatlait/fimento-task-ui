import React, { PureComponent, ReactNode } from 'react';
import { Container, CssBaseline } from '@material-ui/core';
import { ThemeProvider } from '@material-ui/core/styles';
import { UIStore } from '@stores';
import { Header } from '@components';
import { Navigation } from '@services';
import { theme } from './App.theme';

interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

class App extends PureComponent<Props, State> {
  public readonly state: Readonly<State> = {
    hasError: false,
  };

  componentDidMount(): void {
    document.title = 'Online Books';
  }

  public static getDerivedStateFromError(): State {
    return { hasError: true };
  }

  public render(): JSX.Element {
    if (this.state.hasError) {
      Navigation.go('error');
    }

    const { children } = this.props;

    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <UIStore.StoreProvider>
          <Header />
          <Container fixed>{children || <p />}</Container>
        </UIStore.StoreProvider>
      </ThemeProvider>
    );
  }
}

export default App;
