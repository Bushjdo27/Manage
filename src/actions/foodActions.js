import {
    FOOD_ALL,
    FOOD_ADD,
    FOOD_UPDATE,
    FOOD_REMOVE
} from './constantType';

import { getListFoods, createFoods, updateFoods, deleteFoods } from '../utils';
import { checkErrorResponse } from '../utils';

export const getFoods = async (id) => {
    return async (dispatch) => {
        let payload = await getListFoods();
        checkErrorResponse(payload, FOOD_ALL, dispatch)
    }
}

export const createFood = async (data) => {
    return async (dispatch) => {
        let payload = await createFoods(data);
        checkErrorResponse(payload, FOOD_ADD, dispatch)
    }
}

export const updateFood = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateFoods(id, data);
        checkErrorResponse(payload, FOOD_UPDATE, dispatch)
    }
}

export const deleteFood = async (id) => {
    return async (dispatch) => {
        let payload = await deleteFoods(id);
        checkErrorResponse(payload, FOOD_REMOVE, dispatch)
    }
}