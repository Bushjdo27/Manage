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
    deleteNotifications
} from '../utils';
import { checkErrorResponse } from '../utils';

export const getListNotification = async () => {
    return async (dispatch) => {
        let payload = await getListNotifications();
        checkErrorResponse(payload, NOTIFICATIONS_ALL, dispatch)
    }
}

export const createNotification = async (data) => {
    return async (dispatch) => {
        let payload = await createNotifications(data);
        checkErrorResponse(payload, NOTIFICATIONS_ADD, dispatch)
    }
}

export const updateNotification = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateNotifications(id, data);
        checkErrorResponse(payload, NOTIFICATIONS_UPDATE, dispatch)
    }
}

export const deleteNotification = async (id) => {
    return async (dispatch) => {
        let payload = await deleteNotifications(id);
        checkErrorResponse(payload, NOTIFICATIONS_REMOVE, dispatch)
    }
}