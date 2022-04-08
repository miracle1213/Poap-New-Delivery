import { Theme, makeStyles } from '@material-ui/core/styles'
import DesktopImage from '../../assets/images/pittsburg.png'
// import MobileImage from '../../assets/images/berlin.png'

export const useStyles = makeStyles((theme: Theme) => ({
  root: {
    paddingTop: 4,
    display: 'block',
    '@media (max-width:768px)': {
      marginTop: 0,
    },
  },
  topContainer: {
    width: '100%',
    paddingTop: 25,
    position: 'relative',
  },
  background: {
    '@media (min-width: 1200px)': {
      backgroundPosition: 'right -201px top 0px',
    },
    '@media (max-width: 1200px)': {
      backgroundPosition: 'right -400px top 0px',
    },
    '@media (max-width: 960px)': {
      backgroundPosition: 'right -600px top 0px',
    },
    '@media (max-width: 800px)': {
      height: 'calc(140vw)',
      backgroundPosition: 'right -900px top 0px',
    },
    height: 'calc(140vw)',
    position: 'absolute',
    zIndex: -2,
    left: 0,
    backgroundImage: `url(${DesktopImage})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 1500,
    opacity: 0.6,
    width: '100%',
    top: -190,
  },
  background2: {
    position: 'absolute',
    pointerEvents: 'none',
    zIndex: -2,
    width: '100%',
    right: 0,
    top: 380,
    height: 537,
    background:
      'linear-gradient(rgba(255, 255, 255, 0), rgb(255, 255, 255) 40%, rgb(255, 255, 255))',
  },
  div: {
    textAlign: 'left',
    paddingTop: 100,
    paddingLeft: 162,
    paddingRight: 162,
  },
  title: {
    color: '#8076fa',
    fontSize: 48,
    lingHeight: '54px',
    maxWidth: 380,
  },
  subTitle: {
    color: '#f9879a',
    fontSize: 20,
    lingHeight: '27px',
    fontWeight: 600,
    marginTop: 24,
    maxWidth: 380,
  },
  subTitle2: {
    color: '#8492ce',
    marginTop: 27,
    maxWidth: 380,
  },
  linkDiv: {
    marginTop: '-160px',
    padding: '0px 16px 8px',
    '@media (min-width:768px)': {
      padding: '0px 32px 8px',
    },
  },
  tabDviv: {
    display: 'flex',
    justifyContent: 'space-between',
    '@media (min-width:768px)': {
      justifyContent: 'flex-start',
    },
  },
  tabBtn: {
    padding: '10px 16px 8px',
    borderRadius: 25,
    fontSize: 16,
    color: '#48558b',
    cursor: 'pointer',
    marginRight: 32,
  },
  activeTab: {
    background: '#f4f4f9',
    padding: '10px 16px 8px',
    borderRadius: 25,
    fontSize: 16,
    color: '#48558b',
    cursor: 'pointer',
    marginRight: 32,
  },
  count: {
    color: '#8492ce',
    marginLeft: 7,
  },
  cardGroupDiv: {
    width: '100%',
    paddingBottom: 100,
    marginTop: 160,
  },
  cardContainer: {
    '@media (min-width:1200px)': {
      width: '100%',
      padding: '0px 64px',
    },
    '@media (max-width:1200px)': {
      width: '100%',
      padding: '0px 64px',
    },
    '@media (max-width:960px)': {
      width: '100%',
      padding: '0px 50px',
    },
    '@media (max-width:800px)': {
      width: '100%',
      padding: '0px 30px',
    },
    width: '100%',
    maxWidth: '1600px',
    margin: '0px auto',
    padding: '0px 30px',
  },
  searchDiv: {
    position: 'relative',
    gridArea: '2 / 1 / 3 / 3',
    placeSelf: 'end stretch',
    marginBottom: '0.5rem',
    color: 'rgb(77, 86, 128)',
  },
  searchDiv1: {
    width: '200px',
    height: 28,
    padding: 12,
    border: '2px solid rgb(196, 202, 232)',
    borderRadius: 4,
    transition: 'right 0.2s ease-out 0s',
    background: '#fff',
    justifyContent: 'left',
    margin: '0px 0px 16px',
  },
  input: {
    border: 'none',
    color: 'rgb(128, 118, 250)',
    height: '100%',
    '&:focus-visible': {
      outline: 'none',
    },
  },
}))
