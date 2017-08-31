import React from 'react';

import MediaGalleryPage from '../container/MediaGalleryPage';

// Home page component. This serves as the welcome page with link to the history.
const HomePage = () => (
    <div className="container center">
        <h1 className="lead">Welcome to Media App Vod Accedo built with React, Redux, and Redux-saga </h1>
        <MediaGalleryPage />
    </div>
);

export default HomePage;