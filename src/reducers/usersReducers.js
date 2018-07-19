import {
    USERS_ALL,
    USERS_ADD,
    USERS_UPDATE,
    USERS_REMOVE

} from '../actions/constantType';

export const Users = (state = [], action) => {
    switch (action.type) {
        case USERS_ALL:
            return action.payload
        case USERS_ADD:
            return [...state, action.payload]
        case USERS_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case USERS_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}