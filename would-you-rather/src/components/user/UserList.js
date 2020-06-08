import React, { Component } from 'react';
import { connect } from 'react-redux';
import RegisteredUser from './RegisteredUser';

class UserList extends Component {
    render() {
        return (
            <ul>
                {this.props.users.map((user) => (
                    <li className='user-list-item' key={user.id}><RegisteredUser id={user.id} /></li>))}
            </ul>
        )
    }
}

function mapStateToProps ( { users }) {
    return {
      users: Object.values(users)
    }
}

export default connect(mapStateToProps)(UserList); 
