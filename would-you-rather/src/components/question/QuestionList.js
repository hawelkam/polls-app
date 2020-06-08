import React, { Component } from 'react';
import { connect } from 'react-redux';
import Question from './Question';

class QuestionList extends Component {
    state = {
        showUnanswered: true,
        showAnswered: true
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
            <ul>
                {this.props.questions
                    .filter((q) => ((this.state.showUnanswered && this.props.answered[q.id] == null) || (this.state.showAnswered && this.props.answered[q.id] != null)))
                    .map((question) => (
                        <li key={question.id}><Question id={question.id} /></li>)
                    )
                }
            </ul>
            </div>
        )
    }
}

function mapStateToProps ( { questions, authedUser, users }) {
    return {
      questions: Object.values(questions),
      answered: users[authedUser].answers
    }
}

export default connect(mapStateToProps)(QuestionList); 
