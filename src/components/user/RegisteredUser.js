import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router-dom';

class RegisteredUser extends Component {
    state = {
        redirect: false,
    }

    handleLogin = (e) => {
        const { dispatch, id } = this.props;
        dispatch(setAuthedUser(id));

        this.setState(() => ({
            redirect: true,
          }))
    }


    render() {
        const { user } = this.props;

        if (this.state.redirect === true) {
            return <Redirect to={this.props.url} />
        }
    
        return (

            <button className='user-button' onClick={this.handleLogin}>
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