import {
    PAYMENT_ALL,
    PAYMENT_ADD,
    PAYMENT_UPDATE,
    PAYMENT_REMOVE
} from './constantType';

import {
    getListPaymentInfos,
    createPaymentInfos,
    updatePaymentInfos,
    deletePaymentInfos,
    checkErrorResponse
} from '../utils';


export const getListPaymentInfo = () => {
    return async (dispatch) => {
        let payload = await getListPaymentInfos();
        checkErrorResponse(payload, PAYMENT_ALL, dispatch)
    }
}

export const createPaymentInfo = (data) => {
    return async (dispatch) => {
        let payload = await createPaymentInfos(data);
        checkErrorResponse(payload, PAYMENT_ADD, dispatch)
    }
}

export const updatePaymentInfo = (id, data) => {
    // chua change ben utils
    return async (dispatch) => {
        let payload = await updatePaymentInfos(id, data);
        checkErrorResponse(payload, PAYMENT_UPDATE, dispatch)
    }
}

export const deletePaymentInfo = (id) => {
    return async (dispatch) => {
        let payload = await deletePaymentInfos(id);
        checkErrorResponse(payload, PAYMENT_REMOVE, dispatch)
    }
}