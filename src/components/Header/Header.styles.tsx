import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  container: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
  logo: {
    marginRight: theme.spacing(6),
    cursor: 'pointer',
  },
  mr16: {
    marginRight: theme.spacing(2),
  },
  mb56: {
    marginBottom: theme.spacing(7),
  },
}));
