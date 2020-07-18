import React from "react";
import {connect} from "react-redux";
import Container from "@material-ui/core/Container";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";


import {login} from '../../store/actions/actionCreators'
import Grid from "@material-ui/core/Grid";


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
            email : event.target.value
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
        return (
            <Container maxWidth="sm" className={this.props.componentStyle}>
                <Grid container alignItems="center" spacing={3}>
                    <Grid item xs={12}>
                        <TextField required label="Email" type="email" onChange={this.emailChangeHandler} value={this.state.email}/>
                    </Grid>
                    <Grid item xs={12}>
                        <TextField required label="Password" type="password" onChange={this.passwordChangeHandler}/>
                    </Grid>
                    <Grid item md={12}>
                        <Button variant="contained" color="primary" onClick={this.onSubmit}>Login</Button>
                    </Grid>
                </Grid>
            </Container>
        )
    }
}

//state from the redux store map to props
const mapStateToProps = (appState) => {
    return {
        isValidUser: appState.isValidUser
    }
};

//can use as  --> this.props
const mapDispatchToProps = {
    login: login
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);