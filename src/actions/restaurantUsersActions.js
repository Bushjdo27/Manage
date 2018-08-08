import {
    RESTAURANT_USER_ALL,
    RESTAURANT_USER_ADD,
    RESTAURANT_USER_UPDATE,
    RESTAURANT_USER_REMOVE
} from './constantType';

import {
    getListRestaurantUsers,
    createRestaurantUsers,
    updateRestaurantUsers,
    deleteRestaurantUsers,
    checkErrorResponse
} from '../utils';


export const getListRestaurantUser = () => {
    return async (dispatch) => {
        let payload = await getListRestaurantUsers();
        checkErrorResponse(payload, RESTAURANT_USER_ALL, dispatch)
    }
}

export const createRestaurantUser = (data) => {
    return async (dispatch) => {
        let payload = await createRestaurantUsers(data);
        checkErrorResponse(payload, RESTAURANT_USER_ADD, dispatch)
    }
}

export const updateRestaurantUser = (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurantUsers(id, data);
        checkErrorResponse(payload, RESTAURANT_USER_UPDATE, dispatch)
    }
}

export const deleteRestaurantUser = (id) => {
    return async (dispatch) => {
        let payload = await deleteRestaurantUsers(id);
        //checkErrorResponse(payload, RESTAURANT_USER_REMOVE, dispatch)
        if (payload.data.success) {
            dispatch({ type: RESTAURANT_USER_REMOVE, payload: { id } })
        }

    }
}