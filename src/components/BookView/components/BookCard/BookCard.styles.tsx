import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 180,
  },
  delete: {
    color: theme.palette.error.main,
  },
}));
