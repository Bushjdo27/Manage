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
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const createRestaurant = (data) => {
    return async (dispatch) => {
        let payload = await createRestaurants(data);
        checkErrorResponse(payload, RESTAURANT_ADD, dispatch);
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const updateRestaurant = (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurants(id, data);
        //console.log(payload)
        checkErrorResponse(payload, RESTAURANT_UPDATE, dispatch)
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const deleteRestaurant = (id) => {

    return async (dispatch) => {
        let payload = await deleteRestaurants(id);
        //checkErrorResponse(payload, RESTAURANT_REMOVE, dispatch)
        if (payload.data.success) {
            dispatch({ type: RESTAURANT_REMOVE, payload: { id } })
        }

    }
}