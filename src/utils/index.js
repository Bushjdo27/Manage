import axios from 'axios';

const corsURL = "https://cors-anywhere.herokuapp.com/";


// ================Restaurant =====================

export const getListRestaurants = async () => {
    console.log("fetching data")
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/restaurants`)
    //console.log(result.data);
    console.log(result.data)
    return result.data;
}

export const createRestaurants = async (data2) => {
    console.log('posting data')
    let data = {
        restaurant: {
            name: 'Bushjdo',
            facebook_url: '',
            youtube_url: '',
            instagram_url: '',
            restaurant_users_attributes: {
                0: {
                    role: 'super_admin',
                    user_id: 1
                }
            },
            address_attributes: {
                address: 'dai hoc can tho'
            },
            phone: '123456789',
            bg_photo_attributes: {
                photo: null
            },
            icon_attributes: {
                photo: null
            }
        }
    }
    const result = await Api('post', '/restaurants', data)
    console.log(result)
    return result.data;
}

export const updateRestaurants = async (id, data2 = {}) => {
    console.log(`/restaurants/${id}`);
    let data = {
        restaurant: {
            name: 'Bushjdo27',
            facebook_url: '',
            youtube_url: '',
            instagram_url: '',

            phone: '12345678999',

        }
    }

    try {
        const result = await Api('patch', `/restaurants/${id}`, data)
        console.log(result)
        return result.data;
    } catch (e) {
        console.log(e.getMessage)
    }

}


export const deleteRestaurants = async (id) => {
    console.log(id);
    console.log(`/restaurants/${id}`);
    const result = await Api('delete', `/restaurants/${id}`)
    console.log(result)
    return result.data
}


//====================== Categories Checked !===================

export const getListCategories = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/categories`)
    console.log(result.data)
    return result.data
}

export const createCategories = async (category) => {
    const { name, category_type, restaurant_id, files } = category
    let data = {
        category: {
            name,
            category_type,
            restaurant_id,
            photo_attributes: {
                photo: files
            }
        }
    }

    const result = await Api('post', '/categories', data)
    console.log(result);
    return result.data
}


export const updateCategories = async (id ,category) => {
    const { name, category_type, restaurant_id, files } = category
    let data = {
        category: {
            name,
            category_type,
            restaurant_id,
        }
    }

    const result = await Api('patch', `/categories/${id}`, data)
    console.log(result)
    return result.data
}


export const deleteCategories = async (id) => {
    const result = await Api('delete', `/categories/${id}`)
    console.log(result)
    return result.data; // success : true
}


//============= Foods Checked ==========================

export const getListFoods = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/foods`)
    console.log(result)
    return result.data;
}

export const createFoods = async (food) => {
    const { category_id, name, description, price, files } = food;
    let data = {
        food: {
            category_id,
            name,
            description,
            price,
            photo_attributes: {
                photo: files
            }
        }
    }

    const result = await Api('post', `/foods`, data);
    console.log(result)
    return result.data;
}


export const updateFoods = async (id, food) => {
    const { category_id, name, description, price, files } = food;
    let data = {
        food: {
            category_id,
            name,
            description,
            price,
            photo_attributes: {
                photo: files
            }
        }
    }

    const result = await Api('patch', `/foods/${id}`, data);
    console.log(result)
    return result.data;
}


export const deleteFoods = async (id) => {
    const result = await Api('delete', `/foods/${id}`);
    console.log(result)
    return result.data;
}


//====================== Food Options Checked ====================


export const getListFoodsOptions = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/food_options`)
    console.log(result)
}

export const createFoodOptions = async (food_options) => {
    const { food_id, name, price } = food_options
    let data = {
        food_option: {
            food_id,
            name,
            price,
        }
    }

    const result = await Api('post', `/food_options`, data);
    console.log(result)
    return result.data;
}


export const updateFoodOptions = async (id ,food_options) => {
    const { food_id, name, price } = food_options
    let data = {
        food_option: {
            food_id,
            name,
            price,
        }
    }

    const result = await Api('patch', `/food_options/${id}`, data);
    console.log(result)
    return result.data;
}


export const deleteFoodOptions = async (id) => {
    const result = await Api('delete', `/food_options/${id}`);
    console.log(result)
    return result.data;
}

//=================== Order Food Options Checked======================

export const getListOrdersFoodsOptions = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_food_options`)
    console.log(result)
    return result.data;
}



export const createOrderFoodOptions = async (order_food_option) => {
    const { food_option_id, order_food_id } = order_food_option
    const data = {
        order_food_option: {
            food_option_id,
            order_food_id
        }
    }
    const result = await Api('post', '/order_food_options', data);
    console.log(result)
    return result.data;
}

export const updateOrderFoodOptions = async (id, order_food_option) => {
    const { food_option_id, order_food_id } = order_food_option
    const data = {
        order_food_option: {
            food_option_id,
            order_food_id
        }
    }
    const result = await Api('patch', `/order_food_options/${id}`, data);
    console.log(result)
    return result.data;
}
export const deleteOrderFoodOptions = async (id) => {
    const result = await Api('delete', `/order_food_options/${id}`);
    console.log(result)
    return result.data;
}


//===================== Order Food Checked ============================


export const getListOrdersFoods = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/order_foods')
    console.log(result)
    return result.data;
}


export const createOrderFoods = async (order_food) => {
    const { order_id, food_id, amount } = order_food
    const data = {
        order_food: {
            order_id,
            food_id,
            amount
        }
    }
    const result = await Api('post', '/order_foods', data)
    console.log(result)
    return result.data;
}

export const updateOrderFoods = async (id, order_food) => {
    //phai giu lai Order_id  , neu ko se co loi
    const { order_id, food_id, amount } = order_food
    const data = {
        order_food: {
            order_id,
            food_id,
            amount
        }
    }
    const result = await Api('patch', `/order_foods/${id}`, data);
    console.log(result)
    return result.data;
}
export const deleteOrderFoods = async (id) => {
    const result = await Api('delete', `/order_foods/${id}`);
    console.log(result)
    return result.data;
}


//===================== payment infos  Error========================

export const getListPaymentInfos = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/payment_infos')
    console.log(result)
    return result.data;
}


export const createPaymentInfos = async (payment) => {
    const { generatable_type, payment_type, generatable } = payment
    console.log("im in create payment utils")
    const data = {
        payment_info: {
            generatable_type: "Restaurant",
            generatable_id: 1,
            payment_type: "card",
            generatable: {
                id: 1,
                name: "Monash University",
                phone: "(03) 95438889"
            },
            "card_account_attributes": {
                full_name: "phuc vo",
                number: 4111111111111111,
                expiry_month: 9,
                expiry_year: 2019,
                cvv: 123
            }
        }
    }


    const data2 = {
        "payment_info": {
            "generatable_type": "Restaurant",
            "generatable_id": 1,
            "payment_type": "paypal",
            "generatable": {
                "id": 1,
                "name": "Monash University",
                "phone": "(03) 95438889"
            },
            "paypal_account_attributes": {
                "paypal_email": "asd@gmail.com"
            }

        }
    }
    console.log('======================== Body request =================================')
    console.log(data)
    const result = await Api('post', '/payment_infos', data);
    console.log(result)
    return result.data;
}

/**
 * 
 * generatable_type: 'Restaurant',
            generatable_id: 1,
            payment_type: 'card',
            card_account_attributes: {
                full_name: 'phucvo',
                number: 4111111111111111,
                expiry_month: 9,
                expiry_year: 2019,
                cvv: 123
            },
            paypal_account_attributes: {
                paypal_email: 'asd@gmail.com'
            }



    ====== Paypal ====
    {
	"payment_info": {
			"generatable_type":"Restaurant",
            "generatable_id": 1,
            "payment_type": "paypal",
            "generatable":{
            	"id":1,
            	"name":"Monash University",
            	"phone":"(03) 95438889"
            },
            "paypal_account_attributes": {
                "paypal_email": "asd@gmail.com"
            }
            
		}
}
 */

export const updatePaymentInfos = async (id) => {
    //const {}
    const data = {
        payment_info: {
            "paypal_account_attributes": {
                "paypal_email": "bushjdo@gmail.com"
            }
        }
    }
    const result = await Api('patch', `/payment_infos/${id}`, data);
    console.log(result)
    return result.data;
}
export const deletePaymentInfos = async (id) => {
    const result = await Api('delete', `/payment_infos/${id}`);
    console.log(result)
    return result.data;
}

//===================== payment infos  Error========================


// ======================= Restaurant User Checked ====================



export const getListRestaurantUsers = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/restaurant_users')
    console.log(result)
    return result.data;
}

export const createRestaurantUsers = async (resUser) => {
    const { user_id, restaurant_id } = resUser
    const data = {
        restaurant_user: {
            user_id,
            restaurant_id
        }
    }
    const result = await Api('post', '/restaurant_users', data);
    console.log(result)
    return result.data;
}

export const updateRestaurantUsers = async (id, resUser) => {
    const { user_id, restaurant_id } = resUser
    const data = {
        restaurant_user: {
            user_id,
            restaurant_id
        }
    }
    const result = await Api('patch', `/restaurant_users/${id}`, data);
    console.log(result)
    return result.data;
}
export const deleteRestaurantUsers = async (id) => {
    const result = await Api('delete', `/restaurant_users/${id}`);
    console.log(result)
    return result.data;
}

//=================== Restaurant Emails Checked=================

export const getListRestaurantEmails = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/restaurant_emails')
    console.log(result)
    return result.data;
}
export const createRestaurantEmails = async (resEmail) => {
    const { email, restaurant_id } = resEmail
    const data = {
        restaurant_email: {
            email,
            restaurant_id
        }
    }
    const result = await Api('post', '/restaurant_emails', data);
    console.log(result)
    return result.data;
}

export const updateRestaurantEmails = async (id, resEmail) => {
    const { email, restaurant_id } = resEmail
    const data = {
        restaurant_email: {
            email,
            restaurant_id
        }
    }
    const result = await Api('patch', `/restaurant_emails/${id}`, data);
    console.log(result)
    return result.data;
}
export const deleteRestaurantEmails = async (id) => {
    const result = await Api('delete', `/restaurant_emails/${id}`);
    console.log(result)
    return result.data;
}

//====================== Users ========================
// Can chu y xem lai create
export const getListUsers = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/users')
    console.log(result)
    return result.data;
}

export const createUsers = async (user) => {
    const { nickname, name, phone, address, email, password } = user
    const data = {
        user: {
            nickname,
            name,
            phone,
            address_attributes: {
                address
            },
            email,
            password
        }
    }
    const result = await Api('post', '/users', data);
    console.log(result)
    return result.data;
}

export const updateUsers = async (id, user) => {
    const { nickname, name, phone, address, email, password } = user
    const data = {
        user: {
            nickname,
            name,
            phone,
            address_attributes: {
                id: 6,
                address
            },
            restaurant_users_attributes: {
                0: {
                    role: 'admin',
                    restaurant_id: 1
                }
            },
            email,
            password
        }
    }
    const result = await Api('patch', `/users/${id}`, data);
    console.log(result)
    return result.data;
}


//======================== Notifications Checked ========================

export const getListNotifications = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/notifications')
    console.log(result)
    return result.data;
}


export const createNotifications = async (notification) => {
    const { subject, message, photo, restaurant_id } = notification
    console.log(files)
    const data = {
        notification: {
            subject,
            message,
            photo_attributes: {
                photo
            },
            restaurant_id
        }
    }
    const result = await Api('post', '/notifications', data);
    console.log(result)
    return result.data;
}

export const updateNotifications = async (id, notification) => {
    const { subject, message, photo, restaurant_id, id } = notification
    const data = {
        notification: {
            subject,
            message,
            photo_attributes: {
                photo,
                id
            },
            restaurant_id
        }
    }
    const result = await Api('patch', `/notifications/${id}`, data);
    console.log(result)
    return result.data;
}
export const deleteNotifications = async (id) => {
    const result = await Api('delete', `/notifications/${id}`);
    console.log(result)
    return result.data;
}

const Api = async (method, url, data = {}) => {

    let headers = JSON.parse(localStorage.getItem('headers'));

    let result = {};
    let config = {
        url: url,
        baseURL: `${corsURL}http://tastebagdev.herokuapp.com/`,
        headers: {
            'Access-Token': 'wrG-7mYwnikTepGqrBh7WA',
            'Client': 'CxCRfMpvW0w-up--dK_NKA',
            'Expiry': 1532488988,
            'Token-Type': 'Bearer',
            'Uid': 'super_admin@example.com',
        },
        method: method,
        data: data
    }
    result = await axios(config);
    return result;

}

/**
 * 
 * headers: {
            'Access-Token': headers["access-token"],
            'Client': headers["client"],
            'Expiry': headers["expiry"],
            'Token-Type': 'Bearer',
            'Uid': 'super_admin@example.com',
        }
 * 
 * 
 * 
 * export const getAllComments = (id)=>{
    return async (dispatch)=>{
            const allComment = await Api('get',`/posts/${id}/comments`);
            dispatch({type: ALL_COMMENT , payload: allComment.data});
            return allComment.data;
    }
}
export const addComment = (comment)=>{
    return async (dispatch)=>{
        const addComment = await Api('post','/comments',comment);
        dispatch({type: ADD_COMMENT , payload:addComment.data});
        return addComment.data;
    }
}
 */