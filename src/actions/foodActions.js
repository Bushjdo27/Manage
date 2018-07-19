import {
    FOOD_ALL,
    FOOD_ADD,
    FOOD_UPDATE,
    FOOD_REMOVE
} from './constantType';

import { getListFoods, createFoods, updateFoods, deleteFoods } from '../utils';


export const getFoods = async (id) => {
    let payload = await getListFoods();
    console.log(payload)
    return {
        type: FOOD_ALL,
        payload
    }
}

export const createFood = async (data) => {
    let payload = await createFoods(data);

    return {
        type: FOOD_ADD,
        payload
    }
}

export const updateFood = async (id , data) => {
    let payload = await updateFoods(id , data);

    return {
        type: FOOD_UPDATE,
        payload
    }
}

export const deleteFood = async (id) => {
    let payload = await deleteFoods(id);

    return {
        type: FOOD_REMOVE,
        payload
    }
}