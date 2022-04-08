import React from 'react'
import { Link } from 'react-router-dom'
import { makeStyles } from '@material-ui/core/styles'
import { Button } from '@material-ui/core'

import Logo from '../../assets/images/POAP.png'

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '24px 30px',
    pointerEvents: 'auto',
    display: 'flex',
    justifyContent: 'space-between',
    boxShadow: 'rgb(187 196 239 / 36%) 0px 3px 6px 0px',
  },
  logo: {
    width: 125,
    position: 'absolute',
    top: 10,
  },
  walletBtn: {
    borderRadius: 25,
    background: '#9289ff',
    color: '#fff',
    border: 'none',
    boxShadow: 'rgb(101 52 255 / 30%) 0px 6px 18px 0px',
    cursor: 'pointer',
  },
  faqBtn: {
    textDecoration: 'none',
    marginLeft: 32,
    color: '#8076fa',
    cursor: 'pointer',
  },
}))

function Header() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <div style={{ display: 'flex' }}>
        <Link to="/">
          <img src={Logo} alt="logo" className={classes.logo} />
        </Link>
      </div>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <Button className={classes.walletBtn}>Connect Wallet</Button>
        <Link to="/faq" className={classes.faqBtn}>
          FAQ
        </Link>
      </div>
    </div>
  )
}

export default Header
