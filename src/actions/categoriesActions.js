import {
    CATEGOREIS_ALL, CATEGOREIS_ADD, CATEGOREIS_UPDATE, CATEGOREIS_REMOVE
} from './constantType';

import { checkErrorResponse } from '../utils'
import {
    getListCategories,
    createCategories,
    updateCategories,
    deleteCategories
} from '../utils';

export const getCategories = () => {
    return async (dispatch) => {
        let payload = await getListCategories();
        checkErrorResponse(payload, CATEGOREIS_ALL, dispatch)
    }
}


export const createCategory = (data) => {
    console.log("in create category")
    return async (dispatch) => {
        console.log('prepare call utils....')
        let payload = await createCategories(data);
        console.log("got payload")
        checkErrorResponse(payload, CATEGOREIS_ADD, dispatch)
    }
}

export const updateCategory = (id, data) => {
    return async (dispatch) => {
        let payload = await updateCategories(id, data);
        checkErrorResponse(payload, CATEGOREIS_UPDATE, dispatch)
    }
}

export const deleteCategory = (id) => {
    return async (dispatch) => {
        let payload = await deleteCategories(id);
        checkErrorResponse(payload, CATEGOREIS_REMOVE, dispatch)
    }
}