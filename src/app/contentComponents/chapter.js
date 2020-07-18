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

class Chapter extends React.Component {

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

                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button size="small" color="primary">
                            Edit
                        </Button>
                        <Button size="small" color="primary">
                            Remove
                        </Button>
                    </CardActions>
                </Card>
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