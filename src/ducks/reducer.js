const initialState = {
    username: '',
    profile_pic: '',
    user_id: '',
}

const UPDATE_USER = 'UPDATE_USER'

// clear user info builder

export function updateUser({user_id, username, profile_pic}){
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
    const {type, payload} = action
    switch(type){
        case UPDATE_USER:
            return {...state, ...payload}
    default:
    return initialState
}
}