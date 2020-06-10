import React, { Component } from 'react';
import { connect } from 'react-redux';
import { formatDate } from '../../utils/helpers'

class Question extends Component {

    render() {
        const { question } = this.props;

        return (

            <button className='question'>
                <h2>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</h2>
                <p>Asked by {question.author} on {formatDate(question.timestamp)}</p>
            </button>
        )
    }
}

function mapStateToProps ( { questions }, { id }) {
    return {
      question: questions[id]
    }
  }

export default connect(mapStateToProps)(Question);