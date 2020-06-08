import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setAuthedUser } from '../../actions/authedUser';
import { Redirect } from 'react-router-dom';
import { _getQuestions } from '../../utils/_DATA';
import { receiveQuestions } from '../../actions/questions';

class RegisteredUser extends Component {
    state = {
        toDashboard: false,
    }

    handleLogin = (e) => {
        const { dispatch, id } = this.props;
        dispatch(setAuthedUser(id));

        // GET QUESTIONS
        _getQuestions().then((questions) => {
            dispatch(receiveQuestions(questions));
        })

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