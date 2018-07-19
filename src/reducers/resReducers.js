import {
    RESTAURANT_ALL,
    RESTAURANT_ADD,
    RESTAURANT_UPDATE,
    RESTAURANT_REMOVE

} from '../actions/constantType';

export const Restaurants = (state = [], action) => {
    switch (action.type) {
        case RESTAURANT_ALL:
            return action.payload
        case RESTAURANT_ADD:
            return [...state, action.payload]
        case RESTAURANT_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case RESTAURANT_REMOVE:
            return state.filter(item => item.id === action.payload.id)
        default:
            return state;
    }
}
/**
RESTAURANT_UPDATE,
    RESTAURANT_REMOVE,
    RESTAURANT_ADD

     */