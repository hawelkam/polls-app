import React, { Component } from 'react';
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';


class Leaderboard extends Component {
    render() {
        const { users } = this.props;
        return (
            this.props.authedUser != null ? (
                <div>
                  <Navbar />
                  <ul>
                      {users.map((user) => (
                          <li key={user.id}><button>
                              <h2>{user.id}</h2>
                              <p>Question asked: {user.questions.length}</p>
                          </button></li>
                      ))}
                  </ul>
                  <ul>
                      {users.map((user) => (
                          <button>
                              <h2>{user.id}</h2>
                              <p>Question answered: {Object.values(user.answers).length}</p>
                          </button>
                      ))}
                  </ul>
                </div>
              ) : 
              <Redirect to='/login' />
        )
    }
}

function mapStateToProps ( { authedUser, users }) {
    return {
      authedUser,
      users: Object.values(users)
    }
  }

export default connect(mapStateToProps)(Leaderboard);
