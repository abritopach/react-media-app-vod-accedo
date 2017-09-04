# React-Media-App-Vod-Accedo

Project that build a simple Media App VOD (Video On-Demand) application that keeps track of a list of videos the user has 
watched. 

[DEMO](https://react-media-app-vod-accedo.herokuapp.com/)

** Application Features
  
  1. Application should display a list of videos in a horizontal carousel on the home page which can be scrollable.
  2. User should be able to select a video to play in full screen.
  3. When the video is finished, the application should go back to the previous page.
  4. The user should be able to use a mouse and keyboard to select the video.
  5. The user should be able to see a list of videos they have previously watched.
  6. The application must be responsible to changing screen sizes. You do not need to implement a mobile view but it should at least adjust based on the
  desktop browser width.

This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

## Api video list example

You may use this API for a video list https://demo2697834.mockable.io/movies

## Folder Structure

Project should look like this:

```
my-app/
  README.md
  node_modules/
  package.json
  public/
    index.html
    favicon.ico
  src/
    App.css
    App.js
    App.test.js
    index.css
    index.js
    logo.svg
```

For the project to build, **these files must exist with exact filenames**:

* `public/index.html` is the page template;
* `src/index.js` is the JavaScript entry point.

You can delete or rename the other files.

You may create subdirectories inside `src`. For faster rebuilds, only files inside `src` are processed by Webpack.<br>
You need to **put any JS and CSS files inside `src`**, otherwise Webpack won’t see them.

Only files inside `public` can be used from `public/index.html`.<br>

You can, however, create more top-level directories.<br>
They will not be included in the production build so you can use them for things like documentation.

## Running

Before you go through this example, you should have at least a basic understanding of ReactJS concepts. You must also already have reactjs installed on your machine.

* Test in localhost:

To run it, cd into `react-media-app-vod-accedo` and run:

```bash
npm install
npm start / yarn start
```

## Deployment

`npm run build` creates a `build` directory with a production build of your app. Set up your favourite HTTP server so that a visitor to your site is served `index.html`, and requests to static paths like `/static/js/main.<hash>.js` are served with the contents of the `/static/js/main.<hash>.js` file.

## Requirements

* [Node.js](http://nodejs.org/)
* [ReactJS](https://facebook.github.io/react/docs/installation.html)

## License
   
The MIT License (MIT) Copyright (c)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
   
Original work Copyright (c) 2017 Adrián Brito
