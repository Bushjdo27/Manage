import {
    CATEGOREIS_ALL, CATEGOREIS_ADD, CATEGOREIS_UPDATE, CATEGOREIS_REMOVE
} from './constantType';

import {
    getListCategories,
    createCategories,
    updateCategories,
    deleteCategories
} from '../utils';

export const getCategories = async (id) => {
    console.log(id)
    let payload = await getListCategories();

    return {
        type: CATEGOREIS_ALL,
        payload
    }
}

export const createCategory = async (data) => {
    let payload = await createCategories(data);

    return {
        type: CATEGOREIS_ADD,
        payload
    }
}

export const updateCategory = async (data) => {
    let payload = await updateCategories(data);

    return {
        type: CATEGOREIS_UPDATE,
        payload
    }
}

export const deleteCategory = async (id) => {
    let payload = await deleteCategories(id);

    return {
        type: CATEGOREIS_REMOVE,
        payload
    }
}