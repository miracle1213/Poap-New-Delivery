import { Theme, makeStyles } from '@material-ui/core/styles'
import DesktopImage from '../../assets/images/pittsburg.png'
// import MobileImage from '../../assets/images/berlin.png'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 4,
    display: 'block',
    maxWidth: 1200,
    width: '100%',
    margin: '0px auto',
    '@media (max-width:768px)': {
      marginTop: 0,
    },
  },
  titleDiv: {
    width: '100%',
    textAlign: 'center',
    padding: '125px 0px',
    color: 'rgb(101, 52, 255)',
    fontSize: '40px',
    lineHeight: '44px',
    fontWeight: 700,
  },
  rowDiv: {
    display: 'flex',
    flexDirection: 'column',
    paddingBottom: 50,
    '@media (min-width: 800px)': {
      flexDirection: 'row',
    },
  },
  rowDiv2: {
    display: 'flex',
    flexDirection: 'column-reverse',
    paddingBottom: 50,
    '@media (min-width: 800px)': {
      flexDirection: 'row',
    },
  },
  imageDiv: {
    width: '100%',
    maxWidth: 300,
    margin: 'auto',
  },
  title: {
    color: 'rgb(101, 52, 255)',
    fontSize: '1.875rem',
    marginBottom: '0.5em',
  },
  text1: {
    fontWeight: 'bold',
    fontSize: 22,
    color: 'rgb(77, 86, 128)',
  },
  text: {
    color: 'rgb(77, 86, 128)',
    fontSize: '16px',
  },
}))
