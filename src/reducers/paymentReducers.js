import {
    PAYMENT_ALL,
    PAYMENT_ADD,
    PAYMENT_UPDATE,
    PAYMENT_REMOVE

} from '../actions/constantType';

export const Payments = (state = [], action) => {
    switch (action.type) {
        case PAYMENT_ALL:
            return action.payload
        case PAYMENT_ADD:
            return [...state, action.payload]
        case PAYMENT_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case PAYMENT_REMOVE:
            return state.filter(item => !(item.id === action.payload.id))
        default:
            return state;
    }
}