import {
    RESTAURANT_ALL,

} from './constantType';

import * as utils from '../utils'


export const getRestaurants = async () => {
    let payload = await utils.getListRestaurant();
    //console.log(payload)

    return {
        type: RESTAURANT_ALL,
        payload
    }
}

/**
 * RESTAURANT_UPDATE,
    RESTAURANT_REMOVE,
    RESTAURANT_ADD
 */