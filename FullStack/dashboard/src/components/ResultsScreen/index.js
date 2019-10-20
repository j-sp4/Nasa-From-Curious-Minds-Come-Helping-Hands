import React from "react";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Chart from "../Chart";
import Score from "../Deposits";
import Orders from "../Orders";
import pic1 from "../../assets/test_a_23.jpg";
import pic2 from "../../assets/test_b_23.jpg";
import ResultCard from "../ResultCard";
import DisasterIndex from "../DisasterIndex";

const ResultsScreen = props => {
  return (
    <Container maxWidth="lg" className={props.classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={props.classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h1>Disaster Index </h1>
                
                <DisasterIndex disasterIndex={7.67}  />
                Some information about the Number
              </Grid>
              <Grid item xs={6}>
                <br /><br /><br />
                <h3>Location: </h3>
                Longitude: 35° 30' 52.9416'' N <br />
                Latitude:  89° 54' 45.0216'' W
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <ResultCard picUrl={pic1} />
        </Grid>
        <Grid item xs={6}>
          <ResultCard picUrl={pic2} />
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
    </Container>
  );
};

export default ResultsScreen;
