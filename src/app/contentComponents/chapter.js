import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {styles} from '../../css/chapterStyle';

import withStyles from "@material-ui/core/styles/withStyles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import CardMedia from "@material-ui/core/CardMedia";
import CardActions from "@material-ui/core/CardActions";
import Dialog from "@material-ui/core/Dialog";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import TextField from "@material-ui/core/TextField";
import AppBar from "@material-ui/core/AppBar";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from '@material-ui/icons/Close';
import Toolbar from "@material-ui/core/Toolbar";

class Chapter extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            editDialogOpen: false
        }
    };


    onEdit = (chapter) => {
        this.setState({
            editDialogOpen: true
        })
    };

    handleEditDialogClose = () => {
        this.setState({
            editDialogOpen: false
        });
        console.log(this.state)
        return false;
    }



    render() {
        const {classes, chapter} = this.props;

        return (
            <React.Fragment>
                <Card className={classes.root}>
                    <CardActionArea>
                        <CardMedia
                            component="iframe"
                            height="140"
                            src={chapter.chapterPreviewLink}
                            title={chapter.chapterName}
                        />
                        <CardContent>

                            <Typography gutterBottom variant="h5" component="h2">
                                {chapter.chapterName}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                {chapter.chapterDescription}
                            </Typography>
                            <Typography variant="body2" color="textSecondary" component="h3">
                                Rs.{chapter.chapterCost}/=
                            </Typography>

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary" onClick={() => this.onEdit(chapter)}>
                            Edit
                        </Button>
                        <Button size="small" color="primary">
                            Remove
                        </Button>
                    </CardActions>
                </Card>

                <Dialog fullScreen  open={this.state.editDialogOpen} onClose={this.handleEditDialogClose} aria-labelledby="form-dialog-title">
                    <AppBar className={classes.appBar}>
                        <Toolbar>
                            <IconButton edge="start" color="inherit" onClick={this.handleEditDialogClose} aria-label="close">
                                <CloseIcon />
                            </IconButton>
                            <Typography variant="h6" className={classes.title}>
                                Chapter Details
                            </Typography>
                            <Button autoFocus color="inherit" onClick={this.handleEditDialogClose}>
                                Save Changes
                            </Button>
                        </Toolbar>
                    </AppBar>
                    <DialogTitle id="form-dialog-title">Edit Chapter Details</DialogTitle>
                    <DialogContent>
                        <TextField
                            autoFocus
                            margin="dense"
                            id="name"
                            label="Email Address"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>
                </Dialog>
            </React.Fragment>
        )
    }
}

const mapStateToProps = (appState) => {
    return {
        loadingChapters: appState.loadingChapters
    }
};

const matchDispatchToProps = {};

Chapter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(Chapter));