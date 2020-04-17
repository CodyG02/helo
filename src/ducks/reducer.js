const initialState = {
    username: '',
    profile_pic: '',
    user_id: '',
}

const UPDATE_USER = 'UPDATE_USER'

// clear user info builder

export function updateUser(user_id, username, profile_pic){
    return {
        type: UPDATE_USER,
        payload: {
            user_id,
            username,
            profile_pic
        }
    }
}

export default function reducer(state = initialState, action) {
    switch(action.type){
        case UPDATE_USER:
            return {...state, user_id: action.payload, username: action.payload, profile_pic: action.payload}
    default:
    return initialState
}
}