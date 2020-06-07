import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import Login from '../login/Login';
import { handleInitialData } from '../../actions/shared';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    return (
      this.props.loading === true ? null : <Login />
    );
  } 
}

function mapStateToProps ( { users }) {
  console.log("users: ", users);
  return {
    loading: Object.entries(users).length === 0
  }
}

export default connect(mapStateToProps)(App);
