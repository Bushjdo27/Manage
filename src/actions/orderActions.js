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



export const getListOrder = () => {
    return async (dispatch) => {
        let payload = await getListOrders();
        checkErrorResponse(payload, ORDER_ALL, dispatch);
        if (payload) {
            return payload.data
        }
        throw new Error();
    }
}

export const createOrder = (data) => {
    return async (dispatch) => {
        let payload = await createOrders(data);
        checkErrorResponse(payload, ORDER_ADD, dispatch)
    }
}

export const updateOrder = (id, data) => {
    return async (dispatch) => {
        let payload = await updateOrders(id, data);
        checkErrorResponse(payload, ORDER_UPDATE, dispatch)
    }
}

export const deleteOrder = (id) => {
    return async (dispatch) => {
        let payload = await deleteOrders(id);
        //checkErrorResponse(payload, ORDER_REMOVE, dispatch)
        if (payload.data.success) {
            dispatch({ type: ORDER_REMOVE, payload: { id } })
        }

    }
}