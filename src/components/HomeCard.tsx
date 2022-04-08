import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import CardHeaderImg from '../assets/images/cardheader.svg'
import Avatar from '../assets/images/motor.jpg'
import { Typography, Card, Button } from '@material-ui/core'

const useStyles = makeStyles((theme) => ({
  root: {
    position: 'relative',
    background: '#fff',
    borderRadius: 46,
    boxShadow: 'rgb(187 196 239 / 35%) 0px 4px 16px 0px',
    // maxWidth: 384,
    marginBottom: 20,
    backgroundImage: '#fff',
    overflow: 'hidden',
    cursor: 'pointer',
    '&:hover': {
      transform: 'translateY(-2px)',
    },
  },
  header: {
    width: '100%',
    height: 146,
    backgroundImage: `url(${CardHeaderImg})`,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'contain',
    textAlign: 'center',
    '@media (max-width:768px)': {
      backgroundSize: 'cover',
    },
  },
  avatar: {
    width: 130,
    height: 130,
    marginTop: 60,
    borderRadius: '50%',
    objectFit: 'cover',
    border: '4px solid white',
    background: '#fff',
  },
  container: {
    width: '100%',
    padding: 8,
    boxSizing: 'border-box',
  },
  title: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: '27px',
    color: '#8076fa',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  titleDiv: {
    height: '50px',
    maxWidth: '100%',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    marginTop: 50,
    borderBottom: '1px solid #e6edfe',
  },
  textContainer: {
    overflow: 'hidden',
    width: '100%',
    display: 'grid',
    alignItems: 'center',
    marginTop: 3,
    boxSizing: 'border-box',
    marginBottom: 10,
    padding: '0px 16px',
  },
  textDiv1: {
    height: 105,
    overflow: 'hidden scroll',
    padding: '16px',
  },
  text: {
    color: '#6873a4',
    lineHeight: '24px',
    fontSize: '1rem',
  },
  btn: {
    width: '100%',
    borderRadius: '50px',
    fontWeight: 400,
    padding: '8px 0px',
    lineHeight: '1.2rem',
    border: '1px solid #9289ff',
    color: '#9289ff',
    background: '#fff',
    marginTop: 20,
  },
}))

function HomeCard() {
  const classes = useStyles()

  return (
    <Card className={classes.root}>
      <div className={classes.header}>
        <img src={Avatar} alt="sample" className={classes.avatar} />
      </div>
      <div className={classes.container}>
        <div className={classes.titleDiv}>
          <Typography className={classes.title}>
            Das NFT-Zertifikat ist dein Nachweis über die erfolgreiche Teilnahme
            an der web3 & NFT Masterclass.Das NFT-Zertifikat ist dein Nachweis
            über die erfolgreiche Teilnahme an der web3 & NFT Masterclass.
          </Typography>
        </div>
        <div className={classes.textContainer}>
          <div className={classes.textDiv1}>
            <Typography className={classes.text}>
              Das NFT-Zertifikat ist dein Nachweis über die erfolgreiche
              Teilnahme an der web3 & NFT Masterclass.Das NFT-Zertifikat ist
              dein Nachweis über die erfolgreiche Teilnahme an der web3 & NFT
              Masterclass.
            </Typography>
          </div>
          <Button className={classes.btn}>Claim your POAP</Button>
        </div>
      </div>
    </Card>
  )
}

export default HomeCard
