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
    deletePaymentInfos
} from '../utils';


export const getListPaymentInfo = async () => {
    let payload = await getListPaymentInfos();
    console.log(payload)
    return {
        type: PAYMENT_ALL,
        payload
    }
}

export const createPaymentInfo = async (data) => {
    let payload = await createPaymentInfos(data);

    return {
        type: PAYMENT_ADD,
        payload
    }
}

export const updatePaymentInfo = async (id, data) => {
    // chua change ben utils
    let payload = await updatePaymentInfos(id, data);

    return {
        type: PAYMENT_UPDATE,
        payload
    }
}

export const deletePaymentInfo = async (id) => {
    let payload = await deletePaymentInfos(id);

    return {
        type: PAYMENT_REMOVE,
        payload
    }
}