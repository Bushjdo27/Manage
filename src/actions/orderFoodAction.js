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
    deleteOrderFoods,
    checkErrorResponse
} from '../utils';

export const getOrderFood = () => {
    return async (dispatch) => {
        let payload = await getListOrdersFoods();
        checkErrorResponse(payload, ORDER_FOOD_ALL, dispatch)
    }
}

export const createOrderFood = (data) => {
    return async (dispatch) => {
        let payload = await createOrderFoods(data);
        checkErrorResponse(payload, ORDER_FOOD_ADD, dispatch)
    }
}

export const updateOrderFood = (id, data) => {
    return async (dispatch) => {
        let payload = await updateOrderFoods(id, data);
        checkErrorResponse(payload, ORDER_FOOD_UPDATE, dispatch)
    }
}

export const deleteOrderFood = (id) => {
    return async (dispatch) => {
        let payload = await deleteOrderFoods(id);
        //checkErrorResponse(payload, ORDER_FOOD_REMOVE, dispatch)
        dispatch({ type: ORDER_FOOD_REMOVE, payload: { id } })
    }
}