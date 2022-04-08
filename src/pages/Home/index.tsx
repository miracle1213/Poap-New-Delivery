import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import clsx from 'clsx'
import { Typography, Button, Grid } from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search'
// constant
import { Tab } from '../../config/constants'
// style
import { useStyles } from './Style'
// component
import HomeCard from '../../components/HomeCard'

function Home() {
  const classes = useStyles()
  const [tabNum, setTabNum] = useState(Tab.OPEN)

  const handleTab = (e: number) => {
    setTabNum(e)
  }

  return (
    <div className={classes.root}>
      <div className={classes.topContainer}>
        <div className={classes.background} />
        <div className={classes.background2} />
        <div className={classes.div}>
          <Typography className={classes.title}>POAP Delivery</Typography>
          <Typography className={classes.subTitle}>
            Get your POAP to remember that historic event you've been part of.
          </Typography>
          <Typography className={classes.subTitle2}>
            The airdrop based on Merkle trees allow us to honor the participants
            of those events with special POAPs.
          </Typography>
          <Typography className={classes.subTitle2}>
            Check out the events below and claim yours!
          </Typography>
        </div>
      </div>

      <div className={classes.cardGroupDiv}>
        <Grid container spacing={5} className={classes.cardContainer}>
          <Grid item xs={12} className={classes.searchDiv}>
            <div className={classes.searchDiv1}>
              <input placeholder="Search.." className={classes.input} />
              <SearchIcon style={{ verticalAlign: 'middle' }} />
            </div>
          </Grid>
          {['1', '2', '3', '1', '2', '3', '1', '2'].map(
            (item: any, key: any) => (
              <Grid item xl={3} lg={4} md={6} sm={12} key={key}>
                <HomeCard />
              </Grid>
            ),
          )}
        </Grid>
      </div>
    </div>
  )
}

export default Home
