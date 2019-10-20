import React from 'react';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Chart from '../Chart';
import Score from '../Deposits';
import Orders from '../Orders';
import pic1 from '../../assets/test_a_23.jpg'
import pic2 from '../../assets/test_b_23.jpg'

const ResultsScreen = (props) =>{
    return( <Container maxWidth="lg" className={props.classes.container}>
    <Grid container spacing={3}>
      <Grid item xs={12}>
      <Paper className={props.tall}>
        <img src={pic1}/>
        <img src={pic2}/>
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper className={props.small}>
          <Score />
        </Paper>
      </Grid>
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper className={props.small}>
          <Chart />
        </Paper>
      </Grid>

      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper className={props.classes.paper}>
          <Orders />
        </Paper>
      </Grid>
    </Grid>
  </Container>)
}

export default ResultsScreen