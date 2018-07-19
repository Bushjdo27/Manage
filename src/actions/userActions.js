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

} from '../utils';

//deleteRestaurantEmails
export const getListUser = async () => {
    let payload = await getListUsers();
    console.log(payload)
    return {
        type: USERS_ALL,
        payload
    }
}

export const createUser = async (data) => {
    let payload = await createUsers(data);

    return {
        type: USERS_ADD,
        payload
    }
}

export const updateUser = async (id, data) => {
    let payload = await updateUsers(id, data);

    return {
        type: USERS_UPDATE,
        payload
    }
}

// export const deleteRestaurantEmail = async (id) => {
//     let payload = await deleteRestaurantEmails(id);

//     return {
//         type: USERS_REMOVE,
//         payload
//     }
// }