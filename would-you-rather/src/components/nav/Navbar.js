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
        return (
            <nav className='nav'>
            <ul>
              <li>
                <NavLink to='/' exact activeClassName='active'>
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to='/new' activeClassName='active'>
                  New Question
                </NavLink>
              </li>
              <li>
                <NavLink to='/leaderboard' activeClassName='active'>
                  Leaderboard
                </NavLink>
              </li>
            </ul>
            <div>
                Logged user
            </div>
            <button onClick={this.handleLogout}>
                Log out
            </button>
          </nav>
        )
    }
}

export default connect()(Navbar);
