import React from "react";

import { Grid } from "@material-ui/core";

import LeftPane from "./LeftPane"
import RightPane from "./RightPane"

const style = {
    Paper: { padding: 20, marginTop: 10, marginBottom: 10 }
  };


function exercise_function() {
  return (
    <Grid container>
      <Grid item sm>
        <LeftPane style={style}/>
      </Grid>

      <Grid item sm>
        <RightPane style={style} />
      </Grid>
    </Grid>
  );
}

export default exercise_function;
