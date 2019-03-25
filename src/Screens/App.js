import React, { useState } from "react";
import { Grid, Typography, Button } from "@material-ui/core";

function App(props) {
  const [name, setName] = useState("TEst");
  const { history } = props;

  return (
    <Grid container>
      <Grid item xs={12}>
        <Typography variant="h1">{name}</Typography>
      </Grid>
      <Grid item xs={12}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            console.log(props);
            history.push("/SecondScreen")
          }}
        >
          <Typography color="secondary">Test</Typography>
        </Button>
      </Grid>
    </Grid>
  );
}

export default App;
