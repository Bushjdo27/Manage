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


export const getListNotification = async () => {
    let payload = await getListNotifications();
    console.log(payload)
    return {
        type: NOTIFICATIONS_ALL,
        payload
    }
}

export const createNotification = async (data) => {
    let payload = await createNotifications(data);

    return {
        type: NOTIFICATIONS_ADD,
        payload
    }
}

export const updateNotification = async (id, data) => {
    let payload = await updateNotifications(id, data);

    return {
        type: NOTIFICATIONS_UPDATE,
        payload
    }
}

export const deleteNotification = async (id) => {
    let payload = await deleteNotifications(id);

    return {
        type: NOTIFICATIONS_REMOVE,
        payload
    }
}