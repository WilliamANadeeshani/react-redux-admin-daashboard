import React from 'react';
import LoginPage from './loginPage';
import useStyles from '../../css/loginStyle'
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {withStyles} from '@material-ui/styles';

import {login} from '../../store/actions/actionCreators'
import HomePage from "../dashboardComponents/content";

class Content extends React.Component {

    render() {
        if (sessionStorage.getItem('logged') === "F" || sessionStorage.getItem('logged') == null) {
            return <LoginPage/>

        }else {
            return <HomePage/>
        }
    }
}

Content.propTypes = {
    classes: PropTypes.object.isRequired,
};

const styles = useStyles();

const mapStateToProps = (appState) => {
    return {
        loggedIn: appState.isValidUser
    }
};

const mapDispatchToProps = {
    login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(Content));
