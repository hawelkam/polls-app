import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';
import { Link } from 'react-router-dom';

class QuestionList extends Component {
    state = {
        showUnanswered: true,
        showAnswered: false
    }

    toggleUnanswered = () => (
        this.setState(() => ({
            showUnanswered: !this.state.showUnanswered
        }))
    )

    toggleAnswered = () => (
        this.setState(() => ({
            showAnswered: !this.state.showAnswered
        }))
    )

    render() {
        return (
            <div>
                <label>
                    <input type="checkbox"
                        checked={this.state.showUnanswered}
                        onChange={this.toggleUnanswered}/>
                        Show unanswered
                </label>
                <label>
                    <input type="checkbox"
                    checked={this.state.showAnswered}
                    onChange={this.toggleAnswered}/>
                    Show answered
                </label>
            {this.state.showUnanswered && (<ul><h1>Unanswered questions</h1>
                {this.props.questions
                    .filter((q) => ((this.state.showUnanswered && this.props.answered[q] == null)))
                    .map((question) => (
                        <li key={question}><Link to={`/question/${question}`}><Question id={question} /></Link></li>)
                    )
                }
            </ul>)}
            {this.state.showAnswered && (
                <ul><h1>Answered questions</h1>
                {this.props.questions
                    .filter((q) => ((this.state.showUnanswered && this.props.answered[q] == null) || (this.state.showAnswered && this.props.answered[q] != null)))
                    .map((question) => (
                        <li key={question}><Link to={`/question/${question}`}><Question id={question} /></Link></li>)
                    )
                }
                </ul>
            )}

            </div>
        )
    }
}

function mapStateToProps ( { questions, authedUser, users }) {
    return {
      questions: Object.keys(questions).sort((a,b) => questions[b].timestamp - questions[a].timestamp),
      answered: users[authedUser].answers
    }
}

export default connect(mapStateToProps)(QuestionList); 
