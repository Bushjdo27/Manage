import {
    FOOD_ALL,
    FOOD_ADD,
    FOOD_UPDATE,
    FOOD_REMOVE
} from '../actions/constantType'

export const Foods = (state = [], action) => {
    switch (action.type) {
        case FOOD_ALL:
            return action.payload
        case FOOD_ADD:
            return [...state, action.payload]
        case FOOD_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case FOOD_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}