import React, { PropTypes } from 'react';

// First, we extract videos, onHandleSelectVideo, and selectedVideo
// from props using destructuring assignment and then render.
const VideoCarousel = ({ videos, onHandleSelectVideo, selectedVideo }) => (
    <div className="col-md-12">
        <h2> Videos </h2>
        <div className="select-video">
            <div key={selectedVideo.id}>
                <h6 className="title">{selectedVideo.description}</h6>
                <video poster={selectedVideo.thumbnail} controls src={selectedVideo.mediaUrl} alt={selectedVideo.title} />
            </div>
        </div>
        <div className="video-thumbnail">
            {videos.map((video, i) => (
                <div key={i} onClick={onHandleSelectVideo.bind(this, video)}>
                    <video poster={video.thumbnail} src={video.mediaUrl} alt={video.description} />
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
