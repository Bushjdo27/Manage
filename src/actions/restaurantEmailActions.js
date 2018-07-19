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
    deleteRestaurantEmails
} from '../utils';


export const getListRestaurantEmail = async () => {
    let payload = await getListRestaurantEmails();
    console.log(payload)
    return {
        type: RESTAURANT_EMAIL_ALL,
        payload
    }
}

export const createRestaurantEmail = async (data) => {
    let payload = await createRestaurantEmails(data);

    return {
        type: RESTAURANT_EMAIL_ADD,
        payload
    }
}

export const updateRestaurantEmail = async (id, data) => {
    let payload = await updateRestaurantEmails(id, data);

    return {
        type: RESTAURANT_EMAIL_UPDATE,
        payload
    }
}

export const deleteRestaurantEmail = async (id) => {
    let payload = await deleteRestaurantEmails(id);

    return {
        type: RESTAURANT_EMAIL_REMOVE,
        payload
    }
}