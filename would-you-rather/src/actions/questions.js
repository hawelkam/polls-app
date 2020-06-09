import { _saveQuestion, _saveQuestionAnswer } from '../utils/_DATA';

export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_ANSWER = 'ADD_ANSWER';
export const ADD_QUESTION = 'ADD_QUESTION';

export function receiveQuestions(questions) {
    return {
        type: RECEIVE_QUESTIONS,
        questions
    }
}

function addAnswer({ qid, answer, authedUser }) {
    return {
        type: ADD_ANSWER,
        qid,
        answer,
        authedUser
    }
}

function addQuestion(question) {
    return {
        type: ADD_QUESTION,
        question
    }
}

export function handleAddQuestion(question) {
    return (dispatch) => {
        return _saveQuestion(question).then((q) => dispatch(addQuestion(q)));
    }
}

export function handleAddAnswer(answer) {
    return (dispatch) => {
        return _saveQuestionAnswer(answer).then(() => {
            dispatch(addAnswer(answer))
        });
    }
}