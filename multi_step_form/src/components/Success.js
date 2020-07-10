import React, { Component } from "react";

//import { createMuiTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

export class Success extends Component {
  render() {
    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Success
            </Typography>
          </Toolbar>
        </AppBar>

        <h1>Thank you for your submission!</h1>
        <p>You will get an email with further information</p>

        <br />
      </React.Fragment>
    );
  }
}

export default Success;
