import React from "react";
import { Grid } from "material-ui";

import "./styles/CenterWrapperStyles.css";

export default function CenterWrapper(props) {
  return (
    <Grid container justify="center" className="center-wrapper">
      <Grid item xs={12} md={8} className="center-container">
        {props.children}
      </Grid>
    </Grid>
  );
}
