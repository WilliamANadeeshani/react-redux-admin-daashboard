import React from "react";
import {connect} from "react-redux";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import {login} from '../../store/actions/actionCreators'
import Grid from "@material-ui/core/Grid";
import CssBaseline from "@material-ui/core/CssBaseline";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import * as PropTypes from "prop-types";
import styles from "../../css/loginStyle";
import withStyles from "@material-ui/core/styles/withStyles";
import Backdrop from "@material-ui/core/Backdrop";
import CircularProgress from "@material-ui/core/CircularProgress";
import Alert from '@material-ui/lab/Alert';


class LoginPage extends React.Component {


    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: '',
            isSubmit: false
        }
    }

    emailChangeHandler = (event) => {
        this.setState({
            email: event.target.value
        })
    };

    passwordChangeHandler = (event) => {
        this.setState({
            password: event.target.value
        })
    };

    onSubmit = () => {
        this.setState({
            isSubmit: true
        });
        this.props.login(this.state.email, this.state.password);
    };

    render() {
        const {classes, loadingLogin, errorDetails} = this.props;
        return (
            <Grid container component="main" className={classes.root}>
                <CssBaseline/>
                <Grid item className={classes.formBlock}>
                    <Grid item xs={12} sm={8} md={5} elevation={6}>
                        <Grid item xs={12} className={classes.logoRoot}></Grid>
                        <Grid item xs={12}>
                            <div className={classes.paper}>
                                <Avatar className={classes.avatar}>
                                    <LockOutlinedIcon />
                                </Avatar>
                                <div className={classes.alertRoot} style={{display: errorDetails.display, marginTop: '15px'}}>
                                    <Alert variant="filled" severity="warning">
                                        {errorDetails.msg}
                                    </Alert>
                                </div>

                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                        onChange={this.emailChangeHandler}
                                        value={this.state.email}
                                    />
                                    <TextField
                                        variant="outlined"
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                        onChange={this.passwordChangeHandler}
                                    />
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        onClick={this.onSubmit}
                                        className={classes.submit}
                                    >
                                        Sign In
                                    </Button>
                            </div>
                        </Grid>

                    </Grid>
                </Grid>
                <Backdrop open={loadingLogin} className={classes.backdrop}>
                    <CircularProgress   color="inherit" />
                </Backdrop>
            </Grid>


        )
    }
}

//state from the redux store map to props
const mapStateToProps = (appState) => {
    return {
        isValidUser: appState.isValidUser,
        loadingLogin: appState.loadingLogin,
        errorDetails: appState.loginErrorDetail
    }
};

//can use as  --> this.props
const mapDispatchToProps = {
    login: login
};

LoginPage.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LoginPage));