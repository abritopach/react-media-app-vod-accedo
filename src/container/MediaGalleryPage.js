import React, { Component, PropTypes } from 'react';
import { mockableVideos } from '../api/api';
import { connect } from 'react-redux';
import { searchMediaAction } from '../actions/mediaActions';

import VideoCarousel from '../components/VideoCarousel';

// MediaGalleryPage Component.
class MediaGalleryPage extends Component {

    /*
    // We want to get videos from the API right after our component renders.
    componentDidMount() {
        mockableVideos().then(videos => console.log(videos,'Videos'));
    }
    */

    // Dispatches *searchMediaAction*  immediately after initial rendering.
    // Note that we are using the dispatch method from the store to execute this task, courtesy of react-redux
    componentDidMount() {
        this.props.dispatch(searchMediaAction());
    }

    handleSelectVideo(selectedVideo) {
        //this.props.dispatch(selectVideoAction(selectedVideo));
    }

    render() {
        // TODO: Render videos and images here
        console.log(this.props.videos, 'Videos');
        console.log(this.props.selectedVideo, 'SelectedVideo');
        const { videos, selectedVideo } = this.props;
        return (
            <div className="container-fluid">
                {videos && selectedVideo ? <div>
                <div className="row">
                    <VideoCarousel
                        videos={videos}
                        selectedVideo={selectedVideo}
                        onHandleSelectVideo={this.handleSelectVideo}
                        />
                </div>
                </div> : 'loading ....'}
            </div>
        );
    }
}

MediaGalleryPage.propTypes = {
    videos: PropTypes.array,
    selectedVideo: PropTypes.object,
    dispatch: PropTypes.func.isRequired
};

/* Subscribe component to redux store and merge the state into component\s props */
const mapStateToProps = ({ images, videos }) => ({
    videos: videos[0],
    selectedVideo: videos.selectedVideo
});

/* connect method from react-router connects the component with redux store */
export default connect(mapStateToProps)(MediaGalleryPage);