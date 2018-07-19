import {
    ORDER_FOOD_OPTIONS_ALL,
    ORDER_FOOD_OPTIONS_ADD,
    ORDER_FOOD_OPTIONS_UPDATE,
    ORDER_FOOD_OPTIONS_REMOVE
} from './constantType';

import {
    getListOrdersFoodsOptions,
    createOrderFoodOptions,
    updateOrderFoodOptions,
    deleteOrderFoodOptions
} from '../utils';


export const getOrderFoodOption = async (id) => {
    let payload = await getListOrdersFoodsOptions();
    console.log(payload)
    return {
        type: ORDER_FOOD_OPTIONS_ALL,
        payload
    }
}

export const createOrderFoodOption = async (data) => {
    let payload = await createOrderFoodOptions(data);

    return {
        type: ORDER_FOOD_OPTIONS_ADD,
        payload
    }
}

export const updateOrderFoodOption = async (id, data) => {
    let payload = await updateOrderFoodOptions(id, data);

    return {
        type: ORDER_FOOD_OPTIONS_UPDATE,
        payload
    }
}

export const deleteOrderFoodOption = async (id) => {
    let payload = await deleteOrderFoodOptions(id);

    return {
        type: ORDER_FOOD_OPTIONS_REMOVE,
        payload
    }
}