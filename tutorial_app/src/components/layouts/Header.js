import React from "react";

/*import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";*/

import { AppBar, Toolbar, Typography } from '@material-ui/core'


function Header() {
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h5" color="inherit">
            Exercise Database
          </Typography>
        </Toolbar>
      </AppBar>
    </div>
  );
}


export default Header;
