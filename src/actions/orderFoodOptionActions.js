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
    deleteOrderFoodOptions,
    checkErrorResponse
} from '../utils';

export const getOrderFoodOption = () => {
    return async (dispatch) => {
        let payload = await getListOrdersFoodsOptions();
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_ALL, dispatch)
    }
}

export const createOrderFoodOption = (data) => {
    return async (dispatch) => {
        let payload = await createOrderFoodOptions(data);
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_ADD, dispatch)
    }
}

export const updateOrderFoodOption = (id, data) => {
    return async (dispatch) => {
        let payload = await updateOrderFoodOptions(id, data);
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_UPDATE, dispatch)
    }
}

export const deleteOrderFoodOption = (id) => {
    return async (dispatch) => {
        let payload = await deleteOrderFoodOptions(id);
        //checkErrorResponse(payload, ORDER_FOOD_OPTIONS_REMOVE, dispatch)
        dispatch({ type: ORDER_FOOD_OPTIONS_REMOVE, payload: { id } })
    }
}