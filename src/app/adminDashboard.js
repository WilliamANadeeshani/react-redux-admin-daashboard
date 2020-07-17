import React from 'react';
import Header from "./header";
import LoginPage from './loginPage';
import useStyles from './../css/useStyles'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

import {login} from './../store/actions/actionCreators'
import HomePage from "./homePage";

class AdminDashBoard extends React.Component {

    render() {
        const {classes} = this.props;
        if (!this.props.loggedIn) {
            return (
                <div style={{textAlign: 'center', height: '100%'}}>
                    <Header/>
                    <LoginPage componentStyle={classes.loginPageRoot}/>
                </div>
            )
        } else {
            return (
                <HomePage/>
            )
        }

    }
}

AdminDashBoard.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = useStyles();

const mapStateToProps = (appState) => {
    return {
        loggedIn: appState.isValidUser
    }
}

const mapDispatchToProps = {
    login: login
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(AdminDashBoard));
