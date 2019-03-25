import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const SecondScreen = props => (
  <Grid container>
    <Grid item>
      <Typography variant="h1">Test 2</Typography>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" onClick={() => { props.history.push('/') }}>
        <Typography color="secondary">Test</Typography>
      </Button>
    </Grid>
  </Grid>
);

export default SecondScreen;
