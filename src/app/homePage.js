import React from 'react';
import {connect} from "react-redux";
import PropTypes from 'prop-types';
import {ThemeProvider, withStyles} from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import {theme, styles, drawerWidth} from './../css/homeStyle';
import Header from './dashboardComponent/header';
import Navigator from './dashboardComponent/navigator';

class HomePage extends React.Component {

    render() {
        const {classes} = this.props;

        return (
            <ThemeProvider theme={theme}>
                <div className={classes.root}>
                    <CssBaseline/>
                    <nav className={classes.drawer}>
                        <Navigator PaperProps={{ style: { width: drawerWidth } }} />
                    </nav>
                    <div className={classes.app}>
                        <Header/>
                        {/*<main className={classes.main}>*/}
                        {/*<Content />*/}
                        {/*</main>*/}
                        {/*<footer className={classes.footer}>*/}
                        {/*<Copyright />*/}
                        {/*</footer>*/}
                    </div>
                </div>
            </ThemeProvider>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        isValidUser: appState.isValidUser
    }
}

const mapDispatchToProps = {}

HomePage.propTypes = {
    classes: PropTypes.object.isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(HomePage));
