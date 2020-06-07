import React, { Component } from 'react';
import { connect } from 'react-redux';
import Navbar from '../nav/Navbar';
import { Redirect } from 'react-router-dom';

class Dashboard extends Component {
    render() {
        console.log(this.props)
        return (
            this.props.authedUser != null ? (<Navbar />) : 
            <Redirect to='/login' />
        )
    }
}

function mapStateToProps ( { authedUser }) {
    return {
      authedUser
    }
  }

export default connect(mapStateToProps)(Dashboard);
