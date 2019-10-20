import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Orders from '../Orders';
import Map from '../Map'

const HomeMapScreen = (props) =>{
    return( <Container maxWidth="lg" className={props.classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Paper className={props.tall}>
          <Map />
        </Paper>
      </Grid>
    </Grid>
  </Container>)
}

export default HomeMapScreen