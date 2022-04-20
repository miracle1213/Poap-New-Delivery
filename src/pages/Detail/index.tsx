import React, { useState } from 'react'
import { useStyles } from './Style'
// icons
import Avatar from '../../assets/images/unname.jpg'
import { Typography, Button } from '@material-ui/core'
import SubBackImg1 from '../../assets/images/subBack1.svg'
import SubBackImg2 from '../../assets/images/subBack2.svg'
import Icon1 from '../../assets/images/icon1.svg'
import Icon2 from '../../assets/images/icon2.svg'

// components

function Detail() {
  const classes = useStyles()
  return (
    <>
      <div className={classes.root}>
        <div className={classes.head} />
        <div className={classes.content}>
          <div className={classes.avatarDiv}>
            <div className={classes.avatarDiv1}>
              <img src={Avatar} alt="avatar" className={classes.avatar} />
            </div>
          </div>

          <Typography className={classes.title}>Shrohmie Cap #9</Typography>

          <div className={classes.subContent}>
            <div style={{ width: 124 }}>
              <img src={SubBackImg1} alt="image1" className={classes.image} />
            </div>
            <div className={classes.div1}>
              <div className={classes.div2}>
                <div style={{ display: 'flex' }}>
                  <img src={Icon1} alt="icon" width={26} height={26} />
                  <Typography className={classes.h1}>POAPs Claimed</Typography>
                </div>
                <Typography className={classes.h2}>23</Typography>
              </div>
              <div className={classes.div2}>
                <div style={{ display: 'flex' }}>
                  <img src={Icon2} alt="icon" width={26} height={26} />
                  <Typography className={classes.h1}>POAPs Claimed</Typography>
                </div>
                <Typography className={classes.h2}>23</Typography>
              </div>
            </div>
            <div style={{ width: 124 }}>
              <img src={SubBackImg2} alt="image1" className={classes.image} />
            </div>
          </div>

          <div style={{ width: 'fit-content', margin: '0px auto' }}>
            <Typography className={classes.h3}>Event description</Typography>
            <Typography className={classes.h4}>
              MUSHROHMS - Shrohmie Council meeting - 03.30.2022 - Next Gen
              Shrohms!
            </Typography>
          </div>
        </div>

        <div className={classes.content2}>
          <div className={classes.div3}>
            <Typography className={classes.h5}>Address lookup</Typography>
            <div className={classes.div4}>
              <input
                placeholder="Input your Ethereum address or ENS name"
                className={classes.input}
              />
            </div>
            <div className={classes.div5}>
              <Button className={classes.btn}>Lookup</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Detail
