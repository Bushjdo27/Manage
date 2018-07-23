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
    }
}

export const createRestaurant = async (data) => {
    return async (dispatch) => {
        let payload = await createRestaurants();
        checkErrorResponse(payload, RESTAURANT_ADD, dispatch)
    }
}

export const updateRestaurant = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurants(id, data);
        checkErrorResponse(payload, RESTAURANT_ADD, dispatch)
    }
}

export const deleteRestaurant = async (id) => {

    return async (dispatch) => {
        let payload = await deleteRestaurants(id);
        checkErrorResponse(payload, RESTAURANT_ADD, dispatch)
    }
}