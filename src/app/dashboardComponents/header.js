import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import withStyles from "@material-ui/core/styles/withStyles";
import {styles} from './../../css/headerStyle';

import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Grid from "@material-ui/core/Grid";
import IconButton from "@material-ui/core/IconButton";
import Link from "@material-ui/core/Link";
import Typography from "@material-ui/core/Typography";
import Avatar from "@material-ui/core/Avatar";


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