import React, { Component } from 'react';
import PropTypes from 'prop-types';
//import logo from './logo.svg';
import './App.css';
import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Main from './components/common/Main';

// The parent component renders the Header component and component(s) in the
// route the user navigates to.
class App extends Component {
    render() {
        return (
            <div className="container-fluid text-center">
                <Header />
                <Main />
                <Footer />
                {this.props.children}
            </div>
        );
    }
}

App.propTypes = {
    //children: PropTypes.object.isRequired
    children: PropTypes.object
};

export default App;
