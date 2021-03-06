import React from "react";
import { Card, CardContent, Typography, Grid } from '@mui/material';
import CountUp from "react-countup";
import styles from './Cards.module.css'
import cx from 'classnames'

const Cards = ( {data: { confirmed, deaths, lastUpdate }}) => {
    if(!confirmed){
        return 'Loading...'
    }
    return(
        <div className={styles.container}>
            <Grid container spacing={3} justifyContent="center">
                <Grid item component={Card} xs={10} md={4} className={cx(styles.card, styles.infected)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={confirmed.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of active cases of COVID-19</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card} xs={10} md={4} className={cx(styles.card, styles.deaths)}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">
                            <CountUp start={0} end={deaths.value} duration={2.5} separator=","/>
                        </Typography>
                        <Typography color="textSecondary">{new Date(lastUpdate).toDateString()}</Typography>
                        <Typography variant="body2">Number of deaths caused by COVID-19</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    )
}
export default Cards;