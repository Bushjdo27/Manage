import {
    FOOD_ALL,
    FOOD_ADD,
    FOOD_UPDATE,
    FOOD_REMOVE
} from './constantType';

import { getListFoods, createFoods, updateFoods, deleteFoods, checkErrorResponse } from '../utils';

export const getFoods = () => {
    return async (dispatch) => {
        let payload = await getListFoods();
        checkErrorResponse(payload, FOOD_ALL, dispatch)
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const createFood = (data) => {
    return async (dispatch) => {
        let payload = await createFoods(data);
        checkErrorResponse(payload, FOOD_ADD, dispatch)
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const updateFood = (id, data) => {
    return async (dispatch) => {
        let payload = await updateFoods(id, data);
        checkErrorResponse(payload, FOOD_UPDATE, dispatch)
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const deleteFood = (id) => {
    return async (dispatch) => {
        let payload = await deleteFoods(id);
        //checkErrorResponse(payload, FOOD_REMOVE, dispatch)
        if (payload.data.success) {
            dispatch({ type: FOOD_REMOVE, payload: { id } })
        }

    }
}