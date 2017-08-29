import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import { mockableVideos } from '../api/api';
import { connect } from 'react-redux';
import { searchMediaAction, selectVideoAction } from '../actions/mediaActions';

import VideoCarousel from '../components/VideoCarousel';

// MediaGalleryPage Component.
class MediaGalleryPage extends Component {

    constructor() {
        super();
        this.handleSelectVideo = this.handleSelectVideo.bind(this);
    }

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

    /*
    componentWillReceiveProps(nextProps){
        console.log(this.props.selectedVideo);
        console.log(nextProps.selectedVideo);
        if(nextProps.selectedVideo !== this.props.selectedVideo){
            this.handleFullScreenVideo();
        }
    }
    */

    handleSelectVideo(selectedVideo) {
        console.log(selectedVideo);
        this.props.dispatch(selectVideoAction(selectedVideo));

        this.handleFullScreenVideo(selectedVideo);
    }

    handleFullScreenVideo(selectVideo) {

        //var elem = document.getElementById("selectedVideo");
        var elem = document.getElementById(selectVideo.id);

        if (elem != null) {

            if (elem.requestFullscreen) {
                elem.requestFullscreen();
            } else if (elem.webkitRequestFullscreen) {
                elem.webkitRequestFullscreen();
            } else if (elem.mozRequestFullScreen) {
                elem.mozRequestFullScreen();
            } else if (elem.msRequestFullscreen) {
                elem.msRequestFullscreen();
            }

            // Show loading animation.
            var playPromise = elem.play();

            if (playPromise !== undefined) {
                playPromise.then(_ => {
                    // Automatic playback started!
                    // Show playing UI.
                })
                    .catch(error => {
                        // Auto-play was prevented
                        // Show paused UI.
                    });
            }

            // Video Ended.
            document.getElementById(selectVideo.id).addEventListener('ended', myHandler,false);
            function myHandler(e) {
                // What you want to do after the event
                console.log("Video ended");
                elem.webkitExitFullScreen();
            }


            document.addEventListener('webkitfullscreenchange', exitHandler, false);
            document.addEventListener('mozfullscreenchange', exitHandler, false);
            document.addEventListener('fullscreenchange', exitHandler, false);
            document.addEventListener('MSFullscreenChange', exitHandler, false);

            function exitHandler() {
                if (document.webkitIsFullScreen === false) {
                    console.log("Exit fullscreen webkit");
                    elem.pause();
                }
                else if (document.mozFullScreen === false) {
                    console.log("Exit fullscreen moz");
                    elem.pause();
                }
                else if (document.msFullscreenElement === false) {
                    console.log("Exit fullscreen ms");
                    elem.pause();
                }
            }


        }
    }

    render() {
        // TODO: Render videos here
        //console.log(this.props.videos, 'Videos');
        //console.log(this.props.selectedVideo, 'SelectedVideo');
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