import {
    FOOD_OPTIONS_ALL,
    FOOD_OPTIONS_ADD,
    FOOD_OPTIONS_UPDATE,
    FOOD_OPTIONS_REMOVE
} from './constantType';

import { getListFoodsOptions, createFoodOptions, updateFoodOptions, deleteFoodOptions, checkErrorResponse } from '../utils';


export const getFoodOption = () => {
    return async (dispatch) => {
        let payload = await getListFoodsOptions();
        checkErrorResponse(payload, FOOD_OPTIONS_ALL, dispatch)
    }
}

export const createFoodOption = (data) => {
    return async (dispatch) => {
        let payload = await createFoodOptions(data);
        checkErrorResponse(payload, FOOD_OPTIONS_ADD, dispatch)
    }
}

export const updateFoodOption = (id, data) => {
    return async (dispatch) => {
        let payload = await updateFoodOptions(id, data);
        checkErrorResponse(payload, FOOD_OPTIONS_UPDATE, dispatch)
    }
}

export const deleteFoodOption = (id) => {
    return async (dispatch) => {
        let payload = await deleteFoodOptions(id);
        checkErrorResponse(payload, FOOD_OPTIONS_REMOVE, dispatch)
    }
}