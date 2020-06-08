import React, { Component } from 'react';
import { connect } from 'react-redux';

class Question extends Component {

    render() {
        const { question } = this.props;

        return (

            <button className='question'>
                <h2>Would you rather {question.optionOne.text} or {question.optionTwo.text}?</h2>
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