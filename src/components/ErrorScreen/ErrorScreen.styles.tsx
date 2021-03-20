import { makeStyles, Theme } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme: Theme) => ({
  content: {
    marginTop: theme.spacing(8),
  },
  iconWrapper: {
    margin: '0 auto',
    borderRadius: '50%',
    backgroundColor: theme.palette.primary.dark,
    width: 360,
    height: 360,
    position: 'relative',
    marginBottom: 30,
  },
  icon: {
    color: theme.palette.common.white,
    width: 160,
    height: 160,
    margin: 0,
    display: 'block',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
  },
  text: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(1),
  },
}));
