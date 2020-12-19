import React from 'react';
import {connect} from "react-redux";
import {Grid, Backdrop, CircularProgress} from "@material-ui/core";

import {fetchChapters} from "../../store/actions/actionCreators";
import Chapter from '../contentComponents/chapter';

class Chapters extends React.Component {

    componentDidMount() {
        this.props.fetch_chapters();
    }

    viewChapters = (chapterList) => {
        if (!this.props.loading) {
            return (
                <Grid container spacing={3} >
                    {chapterList.map(chapter => {
                        return (
                            <React.Fragment key={chapter._id}>
                                <Grid item xs={3}>
                                    <Chapter
                                        chapter={chapter}
                                    />
                                </Grid>
                            </React.Fragment>
                        )
                    })}
                </Grid>
            )
        } else {
            return (
                <Backdrop open={true} style={{zIndex: 1, color: '#fff'}}>
                    <CircularProgress   color="inherit" />
                </Backdrop>
            )
        }
    };

    render() {
        const {chapterList} = this.props;
        return this.viewChapters(chapterList);
    }
}


const mapStateToProps = (appState) => {
    return {
        chapterList: appState.chapters,
        loading: appState.loadingChapters
    }
};

const matchDispatchToProps = {
    fetch_chapters: fetchChapters
};

export default connect(mapStateToProps, matchDispatchToProps)(Chapters)