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
    deleteRestaurantUsers
} from '../utils';


export const getListRestaurantUser = async () => {
    let payload = await getListRestaurantUsers();
    console.log(payload)
    return {
        type: RESTAURANT_USER_ALL,
        payload
    }
}

export const createRestaurantUser = async (data) => {
    let payload = await createRestaurantUsers(data);

    return {
        type: RESTAURANT_USER_ADD,
        payload
    }
}

export const updateRestaurantUser = async (id, data) => {
    let payload = await updateRestaurantUsers(id, data);

    return {
        type: RESTAURANT_USER_UPDATE,
        payload
    }
}

export const deleteRestaurantUser = async (id) => {
    let payload = await deleteRestaurantUsers(id);

    return {
        type: RESTAURANT_USER_REMOVE,
        payload
    }
}