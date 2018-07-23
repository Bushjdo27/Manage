import {
    USERS_ALL,
    USERS_ADD,
    USERS_UPDATE,
    USERS_REMOVE
} from './constantType';

import {
    getListUsers,
    createUsers,
    updateUsers,
    checkErrorResponse
} from '../utils';

//deleteRestaurantEmails
export const getListUser = async () => {
    return async (dispatch) => {
        let payload = await getListUsers();
        checkErrorResponse(payload, USERS_ALL, dispatch)
    }

}

export const createUser = async (data) => {
    return async (dispatch) => {
        let payload = await createUsers(data);
        checkErrorResponse(payload, USERS_ADD, dispatch)
    }
}

export const updateUser = async (id, data) => {
    return async (dispatch) => {
        let payload = await updateUsers(id, data);
        checkErrorResponse(payload, USERS_UPDATE, dispatch)
    }
}

// export const deleteRestaurantEmail = async (id) => {
//     let payload = await deleteRestaurantEmails(id);

//     return {
//         type: USERS_REMOVE,
//         payload
//     }
// }