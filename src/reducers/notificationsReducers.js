import {
    NOTIFICATIONS_ALL,
    NOTIFICATIONS_ADD,
    NOTIFICATIONS_UPDATE,
    NOTIFICATIONS_REMOVE

} from '../actions/constantType';

export const Notifications = (state = [], action) => {
    switch (action.type) {
        case NOTIFICATIONS_ALL:
            return action.payload
        case NOTIFICATIONS_ADD:
            return [...state, action.payload]
        case NOTIFICATIONS_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case NOTIFICATIONS_REMOVE:
            return state.filter(item => !(item.id === action.payload.id))
        default:
            return state;
    }
}