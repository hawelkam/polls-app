import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class QuestionPage extends Component {
    render() {
        return (
            this.props.authedUser != null ? (
                <div>
                  <Navbar />
                </div>
              ) : 
              <Redirect to='/login' />
        )
    }
}

function mapStateToProps ( { authedUser }) {
    return {
      authedUser
    }
  }

export default connect(mapStateToProps)(QuestionPage);

