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
                  <ul><h1>Leaderboard</h1>
                      {this.props.leaderboard.map((value, key) => {
                            return (
                                <li key={value}>
                                    <button className='leaderboard-item'>
                                        <h1>{key + 1}</h1>
                                        <span>
                                            <img src={users[value].avatarURL} alt={`Avatar of ${users[value].name}`} className='avatar'/>
                                            <h2>{value}</h2>
                                        </span>
                                        <p className='leaderboard-text'>Question asked: {users[value].questions.length}</p>
                                        <p className='leaderboard-text'>Question answered: {Object.values(users[value].answers).length}</p>
                                    </button>
                                </li>
                            )
                      })}
                  </ul>
                </div>
              ) : 
              <Redirect to={{
                pathname: "/login",
                state: { url: `/leaderboard` }
              }}/>
        )
    }
}

function mapStateToProps ( { authedUser, users }) {
    return {
      authedUser,
      users,
      leaderboard: Object.keys(users).sort((a,b) => (Object.values(users[b].answers).length + users[b].questions.length) - (Object.values(users[a].answers).length + users[a].questions.length))
    }
  }

export default connect(mapStateToProps)(Leaderboard);