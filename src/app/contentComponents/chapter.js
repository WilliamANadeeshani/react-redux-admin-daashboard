import React from 'react';
import {connect} from "react-redux";
import * as PropTypes from "prop-types";
import {withStyles, Card, CardActionArea, CardContent, Typography, Button, CardActions, Dialog, DialogContent, AppBar, IconButton, Toolbar} from "@material-ui/core";
import CloseIcon from '@material-ui/icons/Close';

import {styles} from '../../css/chapterStyle';
import ChapterEditDialog from "./chapterEditDialog";
import {fetchChapters} from "../../store/actions/actionCreators";


class Chapter extends React.Component {

    constructor(props) {
        super(props);
        const {chapter} = this.props;
        this.state = {
            editDialogOpen: false,
            chapter: {
                _id: chapter._id,
                chapterNumber: chapter.chapterNumber,
                chapterName: chapter.chapterName,
                chapterCost: chapter.chapterCost,
                chapterDescription: chapter.chapterDescription,
                lessons: chapter.lessons
            }
        }
    };


    onEdit = () => {
        this.setState({
            editDialogOpen: true
        })
    };

    handleEditDialogClose = () => {
        this.props.fetchChapters();
        this.setState({
            editDialogOpen: false
        });
        return false;
    };

    render() {
        const {classes, chapter} = this.props;

        return (
            <React.Fragment>
                <Card className={classes.root}>
                    <CardActionArea>
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
                                Chapter Details Edit
                            </Typography>
                        </Toolbar>
                    </AppBar>
                    <DialogContent style={{backgroundColor: '#eaeff1'}}>
                        <ChapterEditDialog chapter={this.state.chapter}/>
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

const matchDispatchToProps = {
    fetchChapters: fetchChapters
};

Chapter.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, matchDispatchToProps)(withStyles(styles)(Chapter));