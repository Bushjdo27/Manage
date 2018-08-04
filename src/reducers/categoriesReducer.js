import {
    CATEGOREIS_ALL,
    CATEGOREIS_ADD,
    CATEGOREIS_UPDATE,
    CATEGOREIS_REMOVE

} from '../actions/constantType';

export const Categories = (state = [], action) => {
    switch (action.type) {
        case CATEGOREIS_ALL:
            return action.payload
        case CATEGOREIS_ADD:
            return [...state, action.payload]
        case CATEGOREIS_UPDATE:
            return state.map((item) => {
                if (item.id === action.payload.id) {
                    return action.payload
                }
                return item
            })
        case CATEGOREIS_REMOVE:
            return state.filter(item => !(item.id === action.payload.id))
        default:
            return state;
    }
}