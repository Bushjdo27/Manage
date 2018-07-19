import {
    FOOD_OPTIONS_ALL,
    FOOD_OPTIONS_ADD,
    FOOD_OPTIONS_UPDATE,
    FOOD_OPTIONS_REMOVE

} from '../actions/constantType';

export const Food_Options = (state = [], action) => {
    switch (action.type) {
        case FOOD_OPTIONS_ALL:
            return action.payload
        case FOOD_OPTIONS_ADD:
            return [...state, action.payload]
        case FOOD_OPTIONS_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case FOOD_OPTIONS_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}