import {
    ORDER_FOOD_ALL,
    ORDER_FOOD_ADD,
    ORDER_FOOD_UPDATE,
    ORDER_FOOD_REMOVE
} from './constantType';

import {
    getListOrdersFoods,
    createOrderFoods,
    updateOrderFoods,
    deleteOrderFoods
} from '../utils';


export const getOrderFood = async () => {
    let payload = await getListOrdersFoods();
    console.log(payload)
    return {
        type: ORDER_FOOD_ALL,
        payload
    }
}

export const createOrderFood = async (data) => {
    let payload = await createOrderFoods(data);

    return {
        type: ORDER_FOOD_ADD,
        payload
    }
}

export const updateOrderFood = async (id, data) => {
    let payload = await updateOrderFoods(id, data);

    return {
        type: ORDER_FOOD_UPDATE,
        payload
    }
}

export const deleteOrderFood = async (id) => {
    let payload = await deleteOrderFoods(id);

    return {
        type: ORDER_FOOD_REMOVE,
        payload
    }
}