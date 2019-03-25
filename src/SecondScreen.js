import React from "react";
import { Grid, Typography, Button } from "@material-ui/core";

const App = () => (
  <Grid container>
    <Grid item>
      <Typography variant="h1">Test 2</Typography>
    </Grid>
    <Grid item>
      <Button variant="contained" color="primary" onClick={() => { console.log('this', this) }}>
        <Typography color="secondary">Test</Typography>
      </Button>
    </Grid>
  </Grid>
);

export default App;
