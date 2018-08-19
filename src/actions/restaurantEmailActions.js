import {
    RESTAURANT_EMAIL_ALL,
    RESTAURANT_EMAIL_ADD,
    RESTAURANT_EMAIL_UPDATE,
    RESTAURANT_EMAIL_REMOVE
} from './constantType';

import {
    getListRestaurantEmails,
    createRestaurantEmails,
    updateRestaurantEmails,
    deleteRestaurantEmails,
    checkErrorResponse
} from '../utils';


export const getListRestaurantEmail = () => {
    return async (dispatch) => {
        let payload = await getListRestaurantEmails();
        checkErrorResponse(payload, RESTAURANT_EMAIL_ALL, dispatch);
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }
}

export const createRestaurantEmail = (data) => {
    return async (dispatch) => {
        let payload = await createRestaurantEmails(data);
        checkErrorResponse(payload, RESTAURANT_EMAIL_ADD, dispatch)
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }
}

export const updateRestaurantEmail = (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurantEmails(id, data);
        checkErrorResponse(payload, RESTAURANT_EMAIL_UPDATE, dispatch)
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }
}

export const deleteRestaurantEmail = (id) => {
    return async (dispatch) => {
        let payload = await deleteRestaurantEmails(id);
        //checkErrorResponse(payload, RESTAURANT_EMAIL_REMOVE, dispatch)
        if (payload.data.success) {
            dispatch({ type: RESTAURANT_EMAIL_REMOVE, payload: { id } })
        }

    }
}