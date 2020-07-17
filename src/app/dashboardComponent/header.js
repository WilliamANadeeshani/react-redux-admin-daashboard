import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from './../../css/headerStyle';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import Hidden from "@material-ui/core/Hidden";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from '@material-ui/icons/Menu';
import Link from "@material-ui/core/Link";
import Tooltip from "@material-ui/core/Tooltip";
import NotificationsIcon from '@material-ui/icons/Notifications';
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Avatar from "@material-ui/core/Avatar";
import HelpIcon from '@material-ui/icons/Help';


class Header extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">
                            <Hidden smUp>
                                <Grid item>
                                    <IconButton
                                        color="inherit"
                                        aria-label="open drawer"
                                        // onClick={onDrawerToggle}
                                        className={classes.menuButton}
                                    >
                                        <MenuIcon/>
                                    </IconButton>
                                </Grid>
                            </Hidden>
                            <Grid item xs/>
                            <Grid item>
                                <Link className={classes.link} href="#" variant="body2">
                                    Go to docs
                                </Link>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Alerts • No alerts">
                                    <IconButton color="inherit">
                                        <NotificationsIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                    <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar
                    component="div"
                    className={classes.secondaryBar}
                    color="primary"
                    position="static"
                    elevation={0}
                >
                    <Toolbar>
                        <Grid container alignItems="center" spacing={1}>
                            <Grid item xs>
                                <Typography color="inherit" variant="h5" component="h1">
                                    Authentication
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Button className={classes.button} variant="outlined" color="inherit" size="small">
                                    Web setup
                                </Button>
                            </Grid>
                            <Grid item>
                                <Tooltip title="Help">
                                    <IconButton color="inherit">
                                        <HelpIcon/>
                                    </IconButton>
                                </Tooltip>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
                <AppBar
                    component="div"
                    className={classes.secondaryBar}
                    color="primary"
                    position="static"
                    elevation={0}
                >
                    <Tabs value={0} textColor="inherit">
                        <Tab textColor="inherit" label="Users"/>
                        <Tab textColor="inherit" label="Sign-in method"/>
                        <Tab textColor="inherit" label="Templates"/>
                        <Tab textColor="inherit" label="Usage"/>
                    </Tabs>
                </AppBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        isValidUser: appState.isValidUser
    }
}

const mapDispatchToProps = {}

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));