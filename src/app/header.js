import React from "react";
import Typography from "@material-ui/core/Typography";
import Toolbar from "@material-ui/core/Toolbar";
import AppBar from "@material-ui/core/AppBar";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
    toolbar: {
        textAlign: "center",
        height: 80
    },
    heading: {
        margin: "auto"
    }
});
const Header = () => {
    const classes = useStyles();
    return (
        <AppBar position="static">
            <Toolbar className={classes.toolbar}>
                <Typography className={classes.heading} variant="h5" align="center">Power Academy - Admin Dashboard</Typography>
            </Toolbar>
        </AppBar>
    )
}

export default Header;