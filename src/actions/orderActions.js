import {
    ORDER_ALL,
    ORDER_ADD,
    ORDER_UPDATE,
    ORDER_REMOVE
} from './constantType';
import {
    getListOrders,
    createOrders,
    updateOrders,
    deleteOrders,
    checkErrorResponse
} from '../utils';



export const getListOrder = async () => {
    return async (dispatch) => {
        let payload = await getListOrders();
        checkErrorResponse(payload, ORDER_ALL, dispatch)
    }
}

export const createOrder = async (data) => {
    return async (dispatch) => {
        let payload = await createOrders(data);
        checkErrorResponse(payload, ORDER_ADD, dispatch)
    }
}

export const updateOrder = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateOrders(id, data);
        checkErrorResponse(payload, ORDER_UPDATE, dispatch)
    }
}

export const deleteOrder = async (id) => {
    return async (dispatch) => {
        let payload = await deleteOrders(id);
        checkErrorResponse(payload, ORDER_REMOVE, dispatch)
    }
}