import React, { Component } from 'react';
import PropTypes from 'prop-types';

// History page component.
class HistoryPage extends Component {

    /*
    constructor() {
        super();
    }
    */

    render() {
        const videos = JSON.parse(localStorage.getItem('historyVideos'));
        const listItems = videos.map((video, idx) =>
                <div className="media video-history" key={idx}>
                    <div className="media-left">
                        <img src={video.thumbnail} className="media-object img-thumbnail img-rounded" width="64px" alt="My video thumbnail"/>
                    </div>
                    <div className="media-body">
                        <h4 className="media-heading">{video.title}</h4>
                        <p>{video.description}</p>
                        <p>{video.countViews} <span className="glyphicon glyphicon-eye-open"></span></p>
                    </div>
                </div>
        );
        return (
            <div className="center">
                <h1 className="lead">Viewing History</h1>
                <div>
                    {listItems}
                    <button type="button" className="btn btn-primary">Save history</button>
                </div>
            </div>
        );
    }
}

HistoryPage.propTypes = {
    videos: PropTypes.array
};

export default HistoryPage;