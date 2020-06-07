import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router-dom';


class RegisteredUser extends Component {
    state = {
        toDashboard: false,
    }

    handleLogin = (e) => {
        const { dispatch, id } = this.props;
        dispatch(setAuthedUser(id));

        this.setState(() => ({
            toDashboard: true,
          }))
    }


    render() {
        const { user } = this.props;

        if (this.state.toDashboard === true) {
            return <Redirect to='/' />
        }
    
        return (

            <button onClick={this.handleLogin}>
                <img src={user.avatarURL} alt={`Avatar of ${user.name}`} className='avatar'/>
                <h2>{user.id}</h2>
            </button>
        )
    }
}

function mapStateToProps ( { users }, { id }) {
    return {
      user: users[id]
    }
  }

export default connect(mapStateToProps)(RegisteredUser);