import React, { Component } from 'react'
import Navbar from '../nav/Navbar';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { handleAddAnswer } from '../../actions/questions';
import NotFound from '../NotFound';


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

    calculatePercentage = (option) => {
      const { question } = this.props
      return question[option].votes.length === 0 ? 0 : question[option].votes.length / (question.optionOne.votes.length + question.optionTwo.votes.length) * 100
    }

    render() {
        const {question, authedUser, userAnswer} = this.props;
        return (
            authedUser != null ? (
              question ? (
                <div>
                  
                  <h1>Would you rather?</h1>
                  <p>Asked by: <img src={authedUser.avatarURL} alt={`Avatar of ${authedUser.name}`} className='avatar'/>
                    {authedUser.id}</p>
                  <form>
                    <div className={userAnswer && userAnswer === 'optionOne' ? 'selected answer' : 'not-selected answer'}>
                      <button onClick={(e) => this.handleVote(e, 'optionOne')} disabled={userAnswer} className='question'>{question.optionOne.text}</button>
                      {userAnswer ? (
                        <div className='results'>
                          <p>{question.optionOne.votes.length} votes</p>
                          <p className='percentage'>{this.calculatePercentage('optionOne')}%</p>
                        </div>
                      ) : null}
                    </div>
                    <div className={userAnswer && userAnswer === 'optionTwo' ? 'selected answer' : 'not-selected answer'}>
                      <button onClick={(e) => this.handleVote(e, 'optionTwo')} disabled={userAnswer} className='question'>{question.optionTwo.text}</button>
                      {userAnswer ? (
                        <div className='results'>
                          <p>{question.optionTwo.votes.length} votes</p>
                          <p className='percentage'>{this.calculatePercentage('optionTwo')}%</p>
                        </div>
                      ) : null}
                    </div>
                  </form>

                </div>
              ) : (<div>
                    <Navbar />
                    <NotFound />
                  </div>)) : 
              <Redirect to={{
                pathname: "/login",
                state: { url: `/question/${this.props.match.params.id}` }
              }}/>
        )
    }
}

function mapStateToProps ( { authedUser, questions, users }, props) {
  const { id } = props.match.params;
    return {
      authedUser: users[authedUser],
      question: questions[id],
      userAnswer: users[authedUser] ? users[authedUser].answers[id] : {},
    }
  }

export default connect(mapStateToProps)(QuestionPage);

