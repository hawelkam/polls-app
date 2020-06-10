import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddQuestion } from '../../actions/questions';


class NewQuestion extends Component {
    state = {
        option1: '',
        option2: '',
        redirect: false
    }

    handleOption1Change = (e) => {
        const option1 = e.target.value

        this.setState(() => ({
            option1
        }))
    }

    handleOption2Change = (e) => {
        const option2 = e.target.value

        this.setState(() => ({
            option2
        }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const { option1, option2 } = this.state;
        const { dispatch } = this.props;
        console.log(option1, option1, this.props.authedUser);

        dispatch(handleAddQuestion({
            author: this.props.authedUser,
            optionOneText: option1,
            optionTwoText: option2
        }));

        this.setState(() => ({
            option1: '',
            option2: '',
            redirect: true
        }));
    }

    render() {
        const { option1, option2 } = this.state;
        if (this.state.redirect === true) {
            return <Redirect to='/' />
        }
        return (
            this.props.authedUser != null ? (
                <div>
                  <Navbar />
                  <h1>Would you rather...</h1>
                  <form onSubmit={this.handleSubmit}>
                    <input type='text' value={option1} onChange={this.handleOption1Change} placeholder='Option 1'></input>
                    <input type='text' value={option2} onChange={this.handleOption2Change} placeholder='Option 2'></input>
                    <button type='submit' disabled={option1 === '' || option2 === ''}>Save</button>
                  </form>
                </div>
              ) : 
              <Redirect to={{
                pathname: "/login",
                state: { url: `/add` }
              }}/>
        )
    }
}

function mapStateToProps ( { authedUser }) {
    return {
      authedUser
    }
  }

export default connect(mapStateToProps)(NewQuestion);
