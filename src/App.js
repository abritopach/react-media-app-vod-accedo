import React, { Component, PropTypes } from 'react';
//import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Main from './components/common/Main';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <Header />
                <Main />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
};

export default App;
