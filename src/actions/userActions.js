import {
    USERS_ALL,
    USERS_ADD,
    USERS_UPDATE,

} from './constantType';
//USERS_REMOVE
import {
    getListUsers,
    createUsers,
    updateUsers,
    checkErrorResponse
} from '../utils';

//deleteRestaurantEmails
export const getListUser = () => {
    return async (dispatch) => {
        let payload = await getListUsers();
        checkErrorResponse(payload, USERS_ALL, dispatch)
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }

}

export const createUser = (data) => {
    return async (dispatch) => {
        let payload = await createUsers(data);
        checkErrorResponse(payload, USERS_ADD, dispatch)
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }
}

export const updateUser = (id, data) => {
    return async (dispatch) => {
        let payload = await updateUsers(id, data);
        checkErrorResponse(payload, USERS_UPDATE, dispatch)
        if (payload.data) {
            return payload.data
        }
        throw Error()
    }
}

export const deleteUser = (id) => {
    return async (dispatch) => {

    }
}