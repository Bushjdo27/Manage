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


export const getListRestaurantEmail = async () => {
    return async (dispatch) => {
        let payload = await getListRestaurantEmails();
        checkErrorResponse(payload, RESTAURANT_EMAIL_ALL, dispatch)
    }
}

export const createRestaurantEmail = async (data) => {
    return async (dispatch) => {
        let payload = await createRestaurantEmails(data);
        checkErrorResponse(payload, RESTAURANT_EMAIL_ADD, dispatch)
    }
}

export const updateRestaurantEmail = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateRestaurantEmails(id, data);
        checkErrorResponse(payload, RESTAURANT_EMAIL_UPDATE, dispatch)
    }
}

export const deleteRestaurantEmail = async (id) => {
    return async (dispatch) => {
        let payload = await deleteRestaurantEmails(id);
        checkErrorResponse(payload, RESTAURANT_EMAIL_REMOVE, dispatch)
    }
}