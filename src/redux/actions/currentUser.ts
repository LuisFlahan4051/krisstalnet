export const SET_CURRENT_USER = 'SET_CURRENT_USER'

function setCurrentUser_action(user: { user: String, loggedin: Boolean, admin: Boolean, root: Boolean,}){
    return {
        type: SET_CURRENT_USER,
        user: user.user,
        loggedin: user.loggedin,
        admin: user.admin,
        root: user.root,
    }
}

export default setCurrentUser_action