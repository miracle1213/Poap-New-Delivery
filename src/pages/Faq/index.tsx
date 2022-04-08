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
import Image1 from '../../assets/images/faq1.svg'
import Image2 from '../../assets/images/faq2.svg'
import Image3 from '../../assets/images/faq3.svg'
import Image4 from '../../assets/images/faq4.svg'
import Image5 from '../../assets/images/faq5.svg'

function Faq() {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <div className={classes.titleDiv}>FAQ</div>
      <div>
        <div className={classes.rowDiv}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <img src={Image1} alt="image1" className={classes.imageDiv} />
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ padding: 20 }}>
              <Typography className={classes.title}>
                What is POAP again?
              </Typography>
              <Typography className={classes.text}>
                It's a system that event organizers can easily use to distribute
                attendance crypto-badges to people that show up, a tool for
                attendees to display and share the badges they have obtained and
                an open standard for Dapp developers to build on top of.
              </Typography>
              <Typography className={classes.text}>
                If you have 5 whole minutes, you can watch @gomox_ar explain
                POAP at an EthCC Lightning Talk in March 2019
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.rowDiv2}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ padding: 20 }}>
              <Typography className={classes.title}>
                Why would I want to get badges?
              </Typography>
              <Typography className={classes.text}>
                Here are some things that could happen when you obtain POAP
                badges:
              </Typography>
              <Typography className={classes.text}>
                Collect cool badges
              </Typography>
              <Typography className={classes.text}>
                Impress your crypto buddies(*)
              </Typography>
              <Typography className={classes.text}>
                Enter a Lambo giveaway(*)
              </Typography>
              <Typography className={classes.text}>
                (*) Results not guaranteed. Any expectations of recognition,
                prizes, privileges or earnings are your own.
              </Typography>
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <img src={Image2} alt="image1" className={classes.imageDiv} />
            </div>
          </div>
        </div>

        <div className={classes.rowDiv}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <img src={Image3} alt="image1" className={classes.imageDiv} />
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ padding: 20 }}>
              <Typography className={classes.title}>
                How are POAP badges implemented?
              </Typography>
              <Typography className={classes.text}>
                POAP badges are ERC-721 tokens. Once minted, they can be viewed
                on POAP scan or any NFT-enabled interface (Etherscan, OpenSea)
                and most mobile wallets.
              </Typography>
            </div>
          </div>
        </div>

        <div className={classes.rowDiv}>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ padding: 20 }}>
              <Typography className={classes.title}>
                How do I get badges?
              </Typography>
              <Typography className={classes.text}>
                How you actually get the badges depends on the alternative(s)
                chosen by the event organizer to attest your presence.
              </Typography>
              <Typography className={classes.text}>
                Current options include:
              </Typography>
              <Typography className={classes.text1}>
                Batch delivery of badges
              </Typography>
              <Typography className={classes.text}>
                (if you gave a wallet address when you signed up, an organizer
                can airdrop you a badge)
              </Typography>
              <Typography className={classes.text1}>Manual sending</Typography>
              <Typography className={classes.text}>
                (an organizer can scan your wallet address and send you a badge
                on the spot)
              </Typography>
              <Typography className={classes.text1}>
                Self service claim
              </Typography>
              <Typography className={classes.text}>
                (an intranet-only Dapp that is available within the event's WiFi
                will give you your badge)
              </Typography>
            </div>
          </div>
          <div style={{ flex: '1 1 0%' }}>
            <div style={{ textAlign: 'center', padding: 20 }}>
              <img src={Image4} alt="image1" className={classes.imageDiv} />
            </div>
          </div>
        </div>

        <div className={classes.rowDiv}>
          <div style={{ flex: '1 1 0%' }}></div>
        </div>
      </div>
    </div>
  )
}

export default Faq
