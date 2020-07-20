import React from 'react';
import {connect} from "react-redux";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";
import ListItem from "@material-ui/core/ListItem";
import PersonIcon from '@material-ui/icons/Person';
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import * as PropTypes from "prop-types";
import {styles} from './../../css/userStyles';
import withStyles from "@material-ui/core/styles/withStyles";
import {fetchUsers, updateCredits} from './../../store/actions/actionCreators'
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import Dialog from "@material-ui/core/Dialog";
import InputAdornment from "@material-ui/core/InputAdornment";
import CircularProgress from "@material-ui/core/CircularProgress";
import Backdrop from "@material-ui/core/Backdrop";


class Users extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            open: false,
            currentUser: {},
            creditUpdateAmount: 0
        }
    }

    componentDidMount() {
        this.props.fetch_users();
    }

    onUpdateCreditDialogOpen = (user) => {
        this.setState({
            open: true,
            currentUser: user,
        });

    };

    handleClose = () => {
        this.setState({
            open: false,
            currentUser: []
        });
    };

    onUpdate = () => {
        this.props.update_credits(this.state.currentUser, this.state.creditUpdateAmount);
        this.setState({
            open: false
        })
    };

    handleCreditFieldChange = (e) => {
        this.setState({
            creditUpdateAmount: e.target.value
        })
    };

    render() {
        const {classes, users, loading, loadingChapterUpdate} = this.props;
        return (
            <React.Fragment>
                <List subheader={<ListSubheader>User Credits</ListSubheader>} className={classes.root}>
                    {users.map((user) => {
                        return (
                            <ListItem key={user.id}>
                                <ListItemIcon>
                                    <PersonIcon/>
                                </ListItemIcon>
                                <Grid container spacing={2}>
                                    <Grid item xs={3}>
                                        <ListItemText>{user.name}</ListItemText>
                                    </Grid>
                                    <Grid item xs={3}>
                                        <ListItemText>{user.email}</ListItemText>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ListItemText>Rs. {user.creditBalance}</ListItemText>
                                    </Grid>
                                    <Grid item xs={2}>
                                        <ListItemText>Rs. {user.pendingCredits}</ListItemText>
                                    </Grid>

                                </Grid>
                                <ListItemSecondaryAction>
                                    <Button variant="outlined" color="primary" onClick={() => {
                                        this.onUpdateCreditDialogOpen(user)
                                    }}>
                                        Update Credits
                                    </Button>
                                </ListItemSecondaryAction>
                            </ListItem>
                        )
                    })}
                </List>

                <div>
                    <Dialog open={this.state.open} onClose={this.handleClose} aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Update {this.state.currentUser.name}'s Credit
                            Balance</DialogTitle>
                        <DialogContent>
                            <DialogContentText>
                                To update user credits, please enter added new amount here.
                            </DialogContentText>
                            <br/>
                            <TextField style={{width: '35ch'}}
                                       id="standard-number"
                                       type="number"
                                       required
                                       variant="outlined"
                                       label="Update By"
                                       defaultValue={0}
                                       min={0}
                                       onChange={this.handleCreditFieldChange}
                                       InputProps={{
                                           startAdornment: <InputAdornment
                                               position="start">Rs</InputAdornment>,
                                           inputProps: {min: 0}
                                       }}
                            />
                        </DialogContent>
                        <DialogActions>
                            <Button onClick={this.handleClose} color="primary">
                                Cancel
                            </Button>
                            <Button onClick={this.onUpdate} color="primary">
                                Update
                            </Button>
                        </DialogActions>
                    </Dialog>
                </div>
                <Backdrop open={loading || loadingChapterUpdate} style={{zIndex: 1, color: '#fff'}}>
                    <CircularProgress color="inherit"/>
                </Backdrop>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        loading: appState.loadingUsers,
        users: appState.users,
        loadingChapterUpdate: appState.loadingChapterUpdate
    }
};

const matchDispatchToProps = {
    fetch_users: fetchUsers,
    update_credits: updateCredits
};

Users.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(Users));