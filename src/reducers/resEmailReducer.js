import {
    RESTAURANT_EMAIL_ALL,
    RESTAURANT_EMAIL_ADD,
    RESTAURANT_EMAIL_UPDATE,
    RESTAURANT_EMAIL_REMOVE

} from '../actions/constantType';

export const Restaurant_Email = (state = [], action) => {
    switch (action.type) {
        case RESTAURANT_EMAIL_ALL:
            return action.payload
        case RESTAURANT_EMAIL_ADD:
            return [...state, action.payload]
        case RESTAURANT_EMAIL_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case RESTAURANT_EMAIL_REMOVE:
            return state.filter(item => !(item.id === action.payload.id))
        default:
            return state;
    }
}