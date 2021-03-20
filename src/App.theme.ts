/*eslint no-restricted-imports: ["error"]*/
import { createMuiTheme } from '@material-ui/core/styles';

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#2962ff',
    },
    secondary: {
      main: '#ff9800',
    },
  },
  overrides: {
    MuiAppBar: {
      colorDefault: {
        'background-color': '#ffffff',
      },
    },
  },
});
