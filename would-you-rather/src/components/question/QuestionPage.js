import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddAnswer } from '../../actions/questions';


class QuestionPage extends Component {
    state = {
      alreadyAnswered: this.props.alreadyAnswered
    }
    handleVote = (e, chosenOption) => {
      e.preventDefault();
      const { dispatch } = this.props;

      dispatch(handleAddAnswer({
          qid: this.props.question.id,
          answer: chosenOption,
          authedUser: this.props.authedUser
      }));

      this.setState(() => ({alreadyAnswered: true}));
    }

    render() {
        const {question, authedUser, userAnswer} = this.props;
        console.log(this.props.userAnswer)
        return (
            this.props.authedUser != null ? (
                <div>
                  <Navbar />
                  <h1>Would you rather?</h1>
                  <form>
                    <div className={userAnswer && userAnswer === 'optionOne' ? 'selected' : 'none'}>
                      <button onClick={(e) => this.handleVote(e, 'optionOne')} disabled={this.state.alreadyAnswered}>{question.optionOne.text}</button>
                      {this.state.alreadyAnswered ? (
                        <p>{question.optionOne.votes.length} votes</p>
                      ) : null}
                    </div>
                    <div className={userAnswer && userAnswer === 'optionTwo' ? 'selected' : 'none'}>
                      <button onClick={(e) => this.handleVote(e, 'optionTwo')} disabled={this.state.alreadyAnswered}>{question.optionTwo.text}</button>
                      {this.state.alreadyAnswered ? (
                        <p>{question.optionTwo.votes.length} votes</p>
                      ) : null}
                    </div>
                  </form>

                </div>
              ) : 
              <Redirect to='/login' />
        )
    }
}

function mapStateToProps ( { authedUser, questions, users }, props) {
  const { id } = props.match.params;
  console.log(questions[id]);
    return {
      authedUser,
      question: questions[id],
      userAnswer: users[authedUser].answers[id],
      alreadyAnswered: questions[id] && (questions[id].optionOne.votes.includes(authedUser) || questions[id].optionTwo.votes.includes(authedUser))
    }
  }

export default connect(mapStateToProps)(QuestionPage);

