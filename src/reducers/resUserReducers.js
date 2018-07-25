import {
    RESTAURANT_USER_ALL,
    RESTAURANT_USER_ADD,
    RESTAURANT_USER_UPDATE,
    RESTAURANT_USER_REMOVE
} from '../actions/constantType';



export const Restaurant_Users = (state = [], action) => {
    switch (action.type) {
        case RESTAURANT_USER_ALL:
            return action.payload
        case RESTAURANT_USER_ADD:
            return [...state, action.payload]
        case RESTAURANT_USER_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case RESTAURANT_USER_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}