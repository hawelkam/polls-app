import React, { Component } from 'react';
import { connect } from 'react-redux';


class RegisteredUser extends Component {
    render() {
        const { user } = this.props;
        return (
            <button>
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