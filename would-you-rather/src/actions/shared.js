import { _getUsers, _getQuestions } from '../utils/_DATA';
import { receiveUsers } from './users';
import { receiveQuestions } from './questions';
import { setAuthedUser } from './authedUser';
// Should I set it here or after user is set?

export function handleInitialData() {
    return (dispatch) => {
        return _getUsers().then((users) => {
            //dispatch(receiveQuestions(que));
            dispatch(receiveUsers(users));
        })
    }
}