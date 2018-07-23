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
import { checkErrorResponse } from '../utils';

export const getOrderFoodOption = async (id) => {
    return async (dispatch) => {
        let payload = await getListOrdersFoodsOptions();
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_ALL, dispatch)
    }
}

export const createOrderFoodOption = async (data) => {
    return async (dispatch) => {
        let payload = await createOrderFoodOptions(data);
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_ADD, dispatch)
    }
}

export const updateOrderFoodOption = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateOrderFoodOptions(id, data);
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_UPDATE, dispatch)
    }
}

export const deleteOrderFoodOption = async (id) => {
    return async (dispatch) => {
        let payload = await deleteOrderFoodOptions(id);
        checkErrorResponse(payload, ORDER_FOOD_OPTIONS_REMOVE, dispatch)
    }
}