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

let date = new Date();
let today = date.toLocaleString()
let after = `After: ${today}`
date.setDate(date.getDate()-25);
let before = `Before: ${date.toLocaleString()}`
let disasterIndex = 7.39

const ResultsScreen = props => {
  return (
    <Container maxWidth="lg" className={props.classes.container}>
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={props.classes.paper}>
            <Grid container spacing={3}>
              <Grid item xs={6}>
                <h1>Disaster Index: </h1>                
                <DisasterIndex disasterIndex={disasterIndex}  />

              </Grid>
              <Grid item xs={6}>
                <h3>Location: </h3>
                Longitude: 35° 30' 52.9416'' N <br />
                Latitude:  89° 54' 45.0216'' W
                <h3>Date: </h3>
                { today }
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <ResultCard picUrl={pic1} date={before} />
        </Grid>
        <Grid item xs={6}>
          <ResultCard picUrl={pic2} date={after}/>
        </Grid>
      </Grid>
    </Container>
  );
};

export default ResultsScreen;
