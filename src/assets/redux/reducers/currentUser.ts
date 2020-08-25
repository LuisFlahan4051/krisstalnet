import {SET_CURRENT_USER} from '../actions/currentUser'

const defaultState = {
    user: '',
    loggedin: false,
    admin: false,
    root: false,
}

function currentUser_reducer(state = defaultState, userAction: { type: any; user: String; loggedin: Boolean; admin: Boolean; root: Boolean;}) {
    switch (userAction.type) {
        case SET_CURRENT_USER:
            return {
                ...state,
                user: userAction.user,
                loggedin: userAction.loggedin,
                admin: userAction.admin,
                root: userAction.root,
            }
        default: return state
    }
}

export default currentUser_reducer