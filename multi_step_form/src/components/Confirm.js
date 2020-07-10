import React, { Component } from "react";

//import { createMuiTheme } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

export class Confirm extends Component {
  continue = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    this.props.nextStep();
  };

  back = e => {
    e.preventDefault();
    this.props.prevStep();
}

  render() {
    const {
      values: { firstName, lastName, email, occupation, city, bio },
    } = this.props;

    return (
      <React.Fragment>
        <AppBar position="static">
          <Toolbar variant="dense">
            <IconButton edge="start" color="inherit" aria-label="menu">
              <MenuIcon />
            </IconButton>
            <Typography variant="h6" color="inherit">
              Confirm User Details
            </Typography>
          </Toolbar>
        </AppBar>

        <List>
          <ListItemText primary="First Name" secondary={firstName} />

          <ListItemText primary="Last Name" secondary={lastName} />

          <ListItemText primary="Email" secondary={email} />

          <ListItemText primary="Occupation" secondary={occupation} />

          <ListItemText primary="City" secondary={city} />

          <ListItemText primary="Bio" secondary={bio} />
        </List>

        <br />

        <Button
          variant="contained"
          color="secondary"
          style={styles.button}
          onClick={this.back}
        >
          Previous
        </Button>

        <Button
          variant="contained"
          color="primary"
          style={styles.button}
          onClick={this.continue}
        >
          Confirm & Continue
        </Button>
      </React.Fragment>
    );
  }
}

const styles = {
  button: {
    margin: 15,
  },
};

export default Confirm;
