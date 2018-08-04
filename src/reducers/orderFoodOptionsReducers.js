import {
    ORDER_FOOD_OPTIONS_ALL,
    ORDER_FOOD_OPTIONS_ADD,
    ORDER_FOOD_OPTIONS_UPDATE,
    ORDER_FOOD_OPTIONS_REMOVE

} from '../actions/constantType';

export const Order_Foods_Options = (state = [], action) => {
    switch (action.type) {
        case ORDER_FOOD_OPTIONS_ALL:
            return action.payload
        case ORDER_FOOD_OPTIONS_ADD:
            return [...state, action.payload]
        case ORDER_FOOD_OPTIONS_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case ORDER_FOOD_OPTIONS_REMOVE:
            return state.filter(item => !(item.id === action.payload.id))
        default:
            return state;
    }
}