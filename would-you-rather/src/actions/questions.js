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

function addAnswer({ id, answer, authedUser }) {
    return {
        type: ADD_ANSWER,
        id,
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

export function handleAddQuestion(text, replyingTo) {
    return (dispatch, getState) => {
        // const { authedUser } = getState();
        // dispatch(showLoading());

        // return saveTweet({
        //     text,
        //     author: authedUser,
        //     replyingTo
        // }).then((tweet) => dispatch(addTweet(tweet)))
        //     .then(() => dispatch(hideLoading()));
    }
}

export function handleAddAnswer(info) {
    return (dispatch) => {
        // dispatch(toggleTweet(info))
        // return saveLikeToggle(info).catch((e) => {
        //     console.warn('Error in handle toggle event: ', e);
        //     dispatch(toggleTweet(info));
        //     alert('There was an error while liking the tweet!');
        // })
    }
}