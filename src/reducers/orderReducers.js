import {
    ORDER_ALL,
    ORDER_ADD,
    ORDER_UPDATE,
    ORDER_REMOVE
} from '../actions/constantType';



export const Orders = (state = [], action) => {
    switch (action.type) {
        case ORDER_ALL:
            return action.payload
        case ORDER_ADD:
            return [...state, action.payload]
        case ORDER_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case ORDER_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}