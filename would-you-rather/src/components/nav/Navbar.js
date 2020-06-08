import React, { Component } from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom'
import { setAuthedUser } from '../../actions/authedUser';


class Navbar extends Component {
    handleLogout = (e) => {
        e.preventDefault();
        const { dispatch } = this.props;
        dispatch(setAuthedUser(null));
    }

    render() {
      const { user } = this.props
        return (
            <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active' className='nav-link'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/new' activeClassName='active' className='nav-link'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active' className='nav-link'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
            <div className='nav-user'>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>
                <h2>{user.id}</h2>
                <button onClick={this.handleLogout} className='logout-btn'>
                  Log out
                </button>
            </div>
           
          </nav>
        )
    }
}

function mapStateToProps ( { authedUser, users }) {
  return {
    user: users[authedUser]
  }
}

export default connect(mapStateToProps)(Navbar);
