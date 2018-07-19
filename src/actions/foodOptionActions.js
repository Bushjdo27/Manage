import {
    FOOD_OPTIONS_ALL,
    FOOD_OPTIONS_ADD,
    FOOD_OPTIONS_UPDATE,
    FOOD_OPTIONS_REMOVE
} from './constantType';

import { getListFoodsOptions, createFoodOptions, updateFoodOptions, deleteFoodOptions } from '../utils';


export const getFoodOption = async (id) => {
    let payload = await getListFoodsOptions();
    console.log(payload)
    return {
        type: FOOD_OPTIONS_ALL,
        payload
    }
}

export const createFoodOption = async (data) => {
    let payload = await createFoodOptions(data);

    return {
        type: FOOD_OPTIONS_ADD,
        payload
    }
}

export const updateFoodOption = async (data) => {
    let payload = await updateFoodOptions(data);

    return {
        type: FOOD_OPTIONS_UPDATE,
        payload
    }
}

export const deleteFoodOption = async (id) => {
    let payload = await deleteFoodOptions(id);

    return {
        type: FOOD_OPTIONS_REMOVE,
        payload
    }
}