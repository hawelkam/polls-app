import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddAnswer } from '../../actions/questions';


class QuestionPage extends Component {
    handleVote = (e, chosenOption) => {
      e.preventDefault();
      const { dispatch } = this.props;

      dispatch(handleAddAnswer({
          qid: this.props.question.id,
          answer: chosenOption,
          authedUser: this.props.authedUser.id
      }));
    }

    render() {
        const {question, authedUser, userAnswer} = this.props;
        return (
            authedUser != null ? (
                <div>
                  <Navbar />
                  <h1>Would you rather?</h1>
                  <p>Asked by: <img src={authedUser.avatarURL} alt={`Avatar of ${authedUser.name}`} className='avatar'/>
                    {authedUser.id}</p>
                  <form>
                    <div className={userAnswer && userAnswer === 'optionOne' ? 'selected answer' : 'answer'}>
                      <button onClick={(e) => this.handleVote(e, 'optionOne')} disabled={userAnswer} className='question'>{question.optionOne.text}</button>
                      {userAnswer ? (
                        <p>{question.optionOne.votes.length} votes</p>
                      ) : null}
                    </div>
                    <div className={userAnswer && userAnswer === 'optionTwo' ? 'selected answer' : 'answer'}>
                      <button onClick={(e) => this.handleVote(e, 'optionTwo')} disabled={userAnswer} className='question'>{question.optionTwo.text}</button>
                      {userAnswer ? (
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
    return {
      authedUser: users[authedUser],
      question: questions[id],
      userAnswer: users[authedUser].answers[id],
    }
  }

export default connect(mapStateToProps)(QuestionPage);

