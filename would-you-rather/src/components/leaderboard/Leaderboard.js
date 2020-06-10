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
                  <ul>Asking Leaderboard
                      {this.props.questionLeaderboard.map((userId) => {
                            return (
                                <li key={userId}>
                                    <button>
                                        <h2>{userId}</h2>
                                        <p>Question asked: {users[userId].questions.length}</p>
                                    </button>
                                </li>
                            )
                      })}
                  </ul>
                  <ul>Answering leaderboard
                      {this.props.answerLeaderboard.map((userId) => {
                            return (
                                <li key={userId}>
                                    <button>
                                        <h2>{userId}</h2>
                                        <p>Question answered: {Object.values(users[userId].answers).length}</p>
                                    </button>
                                </li>
                            )
                      })}
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
      users,
      answerLeaderboard: Object.keys(users).sort((a,b) => Object.values(users[b].answers).length - Object.values(users[a].answers).length),
      questionLeaderboard: Object.keys(users).sort((a,b) => users[b].questions.length - users[a].questions.length)
    }
  }

export default connect(mapStateToProps)(Leaderboard);