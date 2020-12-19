import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {AppBar, Toolbar, Grid, IconButton, Link, Typography, Avatar, withStyles} from "@material-ui/core";

import {styles} from './../../css/headerStyle';

class Header extends React.Component {

    render() {
        const {classes} = this.props;
        return (
            <React.Fragment>
                <AppBar color="primary" position="sticky" elevation={0}>
                    <Toolbar>
                        <Grid container spacing={1} alignItems="center">
                            <Grid item xs >
                                <Typography color="inherit" variant="h5" component="h1" className={classes.toolbar}>
                                    {this.props.currentTab}
                                </Typography>
                            </Grid>
                            <Grid item>
                                <Link className={classes.link} href="#" variant="body2">
                                    Sign Out
                                </Link>
                            </Grid>
                            <Grid item>
                                <IconButton color="inherit" className={classes.iconButtonAvatar}>
                                    <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar"/>
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Toolbar>
                </AppBar>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        isValidUser: appState.isValidUser,
        currentTab: appState.currentTab
    }
};

const mapDispatchToProps = {};

Header.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Header));