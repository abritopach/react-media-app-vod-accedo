import React from 'react';
import PropTypes from 'prop-types';

// First, we extract videos, onHandleSelectVideo, and selectedVideo
// from props using destructuring assignment and then render.
const VideoCarousel = ({ videos, onHandleSelectVideo, selectedVideo, onHandleKeyPress }) => (
    <div className="col-md-12">
        <h2> Videos </h2>
        <div className="select-video" style={{display: 'none'}}>
            <div key={selectedVideo.id}>
                <h6 className="title">{selectedVideo.description}</h6>
                <video id="selectedVideo" preload="none" poster={selectedVideo.thumbnail} controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
            </div>
        </div>
        <div className="video-thumbnail">
            {videos.map((video, i) => (
                <div key={i} onClick={onHandleSelectVideo.bind(this, video)} onKeyDown={onHandleKeyPress.bind(this)}>
                    <video id={video.id} poster={video.thumbnail} src={video.mediaUrl} alt={video.description}/>
                    <p>{video.title}</p>
                </div>
            ))}
        </div>
    </div>
);

// Define PropTypes
VideoCarousel.propTypes = {
    videos: PropTypes.array.isRequired,
    selectedVideo: PropTypes.object.isRequired,
    onHandleSelectVideo: PropTypes.func.isRequired
};

export default VideoCarousel;
