import React, { Component } from 'react';
import PropTypes from 'prop-types';

// History page component.
class HistoryPage extends Component {

    constructor() {
        super();
    }

    render() {
        const videos = JSON.parse(localStorage.getItem('historyVideos'));
        const listItems = videos.map((video, idx) =>
                <li className="list-group-item" key={idx}>{video.title}</li>
        );
        return (
            <div className="center">
                <h1 className="lead">History</h1>
                <div>
                    <ul className="list-group">
                        {listItems}
                    </ul>
                </div>
            </div>
        );
    }
}

HistoryPage.propTypes = {
    videos: PropTypes.array
};

export default HistoryPage;