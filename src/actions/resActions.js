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


export const getListRestaurant = async () => {
    let payload = await getListRestaurants();
    console.log(payload)
    return {
        type: RESTAURANT_ALL,
        payload
    }
}

export const createRestaurant = async (data) => {
    let payload = await createRestaurants(data);

    return {
        type: RESTAURANT_ADD,
        payload
    }
}

export const updateRestaurant = async (id ,data) => {
    let payload = await updateRestaurants(id ,data);

    return {
        type: RESTAURANT_UPDATE,
        payload
    }
}

export const deleteRestaurant = async (id) => {
    let payload = await deleteRestaurants(id);

    return {
        type: RESTAURANT_REMOVE,
        payload
    }
}