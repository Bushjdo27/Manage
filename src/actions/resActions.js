import {
    RESTAURANT_ALL,
    RESTAURANT_ADD,
    RESTAURANT_UPDATE,
    RESTAURANT_REMOVE
} from './constantType';

import {
    getListRestaurants,
    createRestaurants,
    updateRestaurants,
    deleteRestaurants
} from '../utils';

import { checkErrorResponse } from '../utils';

export const getListRestaurant = () => {
    return async (dispatch) => {
        let payload = await getListRestaurants();
        checkErrorResponse(payload, RESTAURANT_ALL, dispatch)
        return payload.data
    }
}

export const createRestaurant = (data) => {
    return async (dispatch) => {
        let payload = await createRestaurants(data);
        checkErrorResponse(payload, RESTAURANT_ADD, dispatch)
    }
}

export const updateRestaurant = (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurants(id, data);
        checkErrorResponse(payload, RESTAURANT_UPDATE, dispatch)
    }
}

export const deleteRestaurant = (id) => {

    return async (dispatch) => {
        let payload = await deleteRestaurants(id);
        //checkErrorResponse(payload, RESTAURANT_REMOVE, dispatch)
        dispatch({ type: RESTAURANT_REMOVE, payload: { id } })
    }
}