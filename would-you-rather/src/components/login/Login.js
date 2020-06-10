import React, { Component } from 'react';
import { connect } from 'react-redux';
import UserList from '../user/UserList'


class Login extends Component {
    render() {
        return (
            <div>
                <h1>Would you rather?</h1>
                <h2>Select user:</h2>
                <UserList callbackUrl={this.props.location.state ? this.props.location.state.url : '/'}/>
            </div>
        )
    }
}

export default connect()(Login);

