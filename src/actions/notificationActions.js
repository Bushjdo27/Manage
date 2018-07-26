import {
    NOTIFICATIONS_ALL,
    NOTIFICATIONS_ADD,
    NOTIFICATIONS_UPDATE,
    NOTIFICATIONS_REMOVE
} from './constantType';

import {
    getListNotifications,
    createNotifications,
    updateNotifications,
    deleteNotifications,
    checkErrorResponse
} from '../utils';

export const getListNotification = () => {
    return async (dispatch) => {
        let payload = await getListNotifications();
        checkErrorResponse(payload, NOTIFICATIONS_ALL, dispatch)
    }
}

export const createNotification = (data) => {
    return async (dispatch) => {
        let payload = await createNotifications(data);
        checkErrorResponse(payload, NOTIFICATIONS_ADD, dispatch)
    }
}

export const updateNotification = (id, data) => {
    return async (dispatch) => {
        let payload = await updateNotifications(id, data);
        checkErrorResponse(payload, NOTIFICATIONS_UPDATE, dispatch)
    }
}

export const deleteNotification = (id) => {
    return async (dispatch) => {
        let payload = await deleteNotifications(id);
        checkErrorResponse(payload, NOTIFICATIONS_REMOVE, dispatch)
    }
}