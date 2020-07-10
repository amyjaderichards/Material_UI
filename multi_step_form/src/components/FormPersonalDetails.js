import React, { Component } from "react"
//MUI theme provider is deprecated?
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button"

export class FormPersonalDetails extends Component {
    continue = (e) => {
      e.preventDefault();
      this.props.nextStep();
    };

    back = e => {
        e.preventDefault();
        this.props.prevStep();
    }
  
    render() {
      const { values, handleChange } = this.props;
  
      //title = "Enter User Details";
      return (
        <React.Fragment>
          <AppBar position="static">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" color="inherit">
                Enter Personal Details
              </Typography>
            </Toolbar>
          </AppBar>
  
          <TextField
            placeholder="Occupation"
            onChange={handleChange("occupation")}
            defaultValue={values.occupation}
          />
  
          <br />
  
          <TextField
            placeholder="City"
            onChange={handleChange("city")}
            defaultValue={values.city}
          />
  
          <br />
  
          <TextField
            placeholder="Bio"
            onChange={handleChange("bio")}
            defaultValue={values.bio}
          />
  
          <br />
  
          <Button 
            variant="contained"
            color="secondary"
            style={styles.button}
            onClick={this.back}>
            Previous
          </Button>

          <Button 
              variant="contained"
              color="primary"
              style={styles.button}
              onClick={this.continue}>
              Continue
          </Button>



        </React.Fragment>
      );
    }
  }
  
  const styles = {
      button: {
          margin: 15,
      }
  }
  
  export default FormPersonalDetails;
  