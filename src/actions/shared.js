import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';

export function handleInitialData() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            dispatch(receiveUsers(users));
        }).then(() => {
            _getQuestions().then((questions) => {
                dispatch(receiveQuestions(questions))
            })
        })
    }
}