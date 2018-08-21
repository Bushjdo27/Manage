import axios from 'axios';
import { HEADERS, USER, CREATE, UPDATE, DELETE, GET, NEW, RESTAURANTS, FOODS, ORDERS, RESTAURANT_EMAILS, USER_RESTAURANT, LIST_ADMIN } from '../actions/constantType';
import moment from 'moment'
const corsURL = "https://cors-anywhere.herokuapp.com/";


// ================Restaurant =====================

export const getListRestaurants = async () => {
    //console.log("fetching data")
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/restaurants`)
    //console.log(result);
    console.log(result.data)
    return result;
}

export const createRestaurants = async (data) => {
    //console.log('posting data');
    //console.log(data)
    const { name, fbUrl, ytUrl, instaUrl, address, phone, photo, icon } = data
    let fd = new FormData();
    fd.append("restaurant[name]", name);
    fd.append("restaurant[facebook_url]", fbUrl);
    fd.append("restaurant[youtube_url]", ytUrl);
    fd.append("restaurant[instagram_url]", instaUrl);
    fd.append("restaurant[restaurant_users_attributes][0][role]", "super_admin");
    fd.append("restaurant[restaurant_users_attributes][0][user_id]", 1);
    fd.append("restaurant[address_attributes][address]", address);
    fd.append("restaurant[phone]", phone);
    fd.append("restaurant[bg_photo_attributes][photo]", photo);
    fd.append("restaurant[icon_attributes][photo]", icon);

    const result = await Api('post', '/restaurants', fd)
    //console.log(result)
    return result;
}

export const updateRestaurants = async (id, data = {}) => {
    //console.log(`/restaurants/${id}`);
    const { name, fbUrl, ytUrl, instaUrl, address, address_id, phone, photo, photo_id, icon, icon_id } = data
    const user = JSON.parse(localStorage.getItem(USER));
    let fd = new FormData();
    if (user) {
        const admin = createUserUpdate(user.id)
        fd.append("restaurant[name]", name);
        fd.append("restaurant[facebook_url]", fbUrl);
        fd.append("restaurant[youtube_url]", ytUrl);
        fd.append("restaurant[instagram_url]", instaUrl);
        fd.append("restaurant[restaurant_users_attributes][0][id]", admin.id);
        fd.append("restaurant[restaurant_users_attributes][0][role]", admin.role);
        fd.append("restaurant[restaurant_users_attributes][0][user_id]", admin.user_id);
        fd.append("restaurant[address_attributes][id]", address_id);
        fd.append("restaurant[address_attributes][address]", address);
        fd.append("restaurant[phone]", phone);
        fd.append("restaurant[bg_photo_attributes][id]", photo_id);
        fd.append("restaurant[bg_photo_attributes][photo]", photo);
        fd.append("restaurant[icon_attributes][id]", icon_id);
        fd.append("restaurant[icon_attributes][photo]", icon);
        try {
            const result = await Api('patch', `/restaurants/${id}`, fd)
            console.log(result)
            return result;
        } catch (e) {
            // console.log(e.getMessage)
        }
    }

}


export const deleteRestaurants = async (id) => {
    // console.log(id);
    // console.log(`/restaurants/${id}`);
    const result = await Api('delete', `/restaurants/${id}`)
    //console.log(result)
    return result
}


//====================== Categories Checked !===================

export const getListCategories = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/categories`)
    //console.log(result)
    return result
}

export const createCategories = async (category) => {
    const { name, category_type, restaurant_id, files } = category
    let fd = new FormData();
    fd.append('category[name]', name);
    fd.append('category[category_type]', category_type);
    fd.append('category[restaurant_id]', restaurant_id); //2
    fd.append('category[photo_attributes][photo]', files);

    //console.log("sending to api")
    const result = await Api('post', '/categories', fd)
    //console.log(result);
    return result
}


export const updateCategories = async (id, category) => {
    const { name, category_type, restaurant_id } = category;
    let fd = new FormData();
    fd.append('category[name]', name);
    fd.append('category[category_type]', category_type);
    fd.append('category[restaurant_id]', restaurant_id); //2


    const result = await Api('patch', `/categories/${id}`, fd)
    //console.log(result)
    return result
}


export const deleteCategories = async (id) => {
    const result = await Api('delete', `/categories/${id}`)
    //console.log(result)
    return result; // success : true
}


//============= Foods Checked ==========================

export const getListFoods = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/foods?all=true`)
    //console.log(result)
    return result;
}

export const createFoods = async (food) => {
    const { category_id, name, description, price, files } = food;
    let fd = new FormData();
    fd.append('food[category_id]', category_id);
    fd.append('food[name]', name);
    fd.append('food[description]', description); //2
    fd.append('food[price]', price);
    fd.append('food[photo_attributes][photo]', files);


    const result = await Api('post', `/foods`, fd);
    //console.log(result)
    return result;
}


export const updateFoods = async (id, food) => {
    const { category_id, name, description, price, files, id_photo } = food;
    let fd = new FormData();
    fd.append('food[category_id]', category_id);
    fd.append('food[name]', name);
    fd.append('food[description]', description); //2
    fd.append('food[price]', price);
    fd.append('food[photo_attributes][id]', id_photo);
    fd.append('food[photo_attributes][photo]', files);



    const result = await Api('patch', `/foods/${id}`, fd);
    //console.log(result)
    return result;
}


export const deleteFoods = async (id) => {
    const result = await Api('delete', `/foods/${id}`);
    //console.log(result)
    return result;
}


//====================== Food Options Checked ====================


export const getListFoodsOptions = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/food_options`)
    //console.log(result)
    return result
}

export const createFoodOptions = async (food_options) => {
    const { food_id, name, price } = food_options;
    let fd = new FormData();
    fd.append('food_option[food_id]', food_id);
    fd.append('food_option[name]', name);
    fd.append('food_option[price]', price);


    const result = await Api('post', `/food_options`, fd);
    //console.log(result)
    return result;
}


export const updateFoodOptions = async (id, food_options) => {
    const { food_id, name, price } = food_options;
    let fd = new FormData();
    fd.append('food_option[food_id]', food_id);
    fd.append('food_option[name]', name);
    fd.append('food_option[price]', price);


    const result = await Api('patch', `/food_options/${id}`, fd);
    //console.log(result)
    return result;
}


export const deleteFoodOptions = async (id) => {
    const result = await Api('delete', `/food_options/${id}`);
    //console.log(result)
    return result;
}


//==================== Order ==============================
export const getListOrders = async () => {

    const result = await Api('get', '/orders?all=true')
    //console.log(result)
    return result;
}



export const createOrders = async (order) => {
    let fd = new FormData();
    const {
        restaurant_id,
        user_id,
        first_name,
        last_name,
        company_name,
        email,
        phone,
        address,
        order_food,
        payment_type,
        full_name,
        number,
        expiry_month,
        expiry_year,
        cvv
    } = order;

    fd.append('order[restaurant_id]', restaurant_id);
    fd.append('order[user_id]', user_id);
    fd.append('order[first_name]', first_name);
    fd.append('order[last_name]', last_name);
    fd.append('order[company_name]', company_name);
    fd.append('order[email]', email);
    fd.append('order[phone]', phone);
    fd.append('order[address_attributes][address]', address);

    for (let i = 0; i < order_food.length; i++) {
        fd.append(`order[order_foods_attributes][${i}][food_id]`, order_food[i].food_id)
        fd.append(`order[order_foods_attributes][${i}][amount]`, order_food[i].amount)
        if (order_food[i].hasOwnProperty('food_option')) {
            fd.append(`order[order_foods_attributes][${i}][order_food_options_attributes][0][food_option_id]`, order_food[i].food_option.food_option_id);
        }
    }

    if (payment_type === 'paypal') {
        fd.append('order[payment_info_attributes][paypal_account_attributes][paypal_email]]', 'asd@gmail.com');
    } else {
        fd.append('order[payment_info_attributes][payment_type]', payment_type);
        fd.append('order[payment_info_attributes][card_account_attributes][full_name]', full_name);
        fd.append('order[payment_info_attributes][card_account_attributes][number]', number);
        fd.append('order[payment_info_attributes][card_account_attributes][expiry_month]', expiry_month);
        fd.append('order[payment_info_attributes][card_account_attributes][expiry_year]', expiry_year);
        fd.append('order[payment_info_attributes][card_account_attributes][cvv]', cvv);
    }
    const result = await Api('post', '/orders', fd);
    //console.log(result)
    return result;
}

export const updateOrders = async (id, order) => {
    let fd = new FormData();
    const {
        restaurant_id,
        user_id,
        first_name,
        last_name,
        company_name,
        email,
        phone,
        address,
        order_food,
        payment,
        card
    } = order;

    fd.append('order[restaurant_id]', restaurant_id);
    fd.append('order[user_id]', user_id);
    fd.append('order[first_name]', first_name);
    fd.append('order[last_name]', last_name);
    fd.append('order[company_name]', company_name);
    fd.append('order[email]', email);
    fd.append('order[phone]', phone);
    fd.append('order[address_attributes][id]', address.id);
    fd.append('order[address_attributes][address]', address.address);

    for (let i = 0; i < order_food.length; i++) {
        fd.append(`order[order_foods_attributes][${i}][id]`, order_food[i].id)
        fd.append(`order[order_foods_attributes][${i}][food_id]`, order_food[i].food_id)
        fd.append(`order[order_foods_attributes][${i}][amount]`, order_food[i].amount)
        if (order_food[i].hasOwnProperty('food_option')) {
            fd.append(`order[order_foods_attributes][${i}][order_food_options_attributes][0][id]`, order_food[i].food_option.id);
            fd.append(`order[order_foods_attributes][${i}][order_food_options_attributes][0][food_option_id]`, order_food[i].food_option.food_option_id);
        }
    }

    if (payment.type === 'paypal') {
        fd.append('order[payment_info_attributes][0][paypal_account_attributes][id]', 1)//ask again
        fd.append('order[payment_info_attributes][paypal_account_attributes][paypal_email]', 'asd@gmail.com');
    } else {
        fd.append('order[user_attributes][id]', 1); //ask again
        fd.append('order[payment_info_attributes][id]', 12); //ask again
        fd.append('order[payment_info_attributes][generatable_id]', 1); //ask again
        fd.append('order[payment_info_attributes][payment_type]', payment.type);
        fd.append('order[payment_info_attributes][card_account_attributes][id]', card.id);
        fd.append('order[payment_info_attributes][card_account_attributes][full_name]', card.full_name);
        fd.append('order[payment_info_attributes][card_account_attributes][number]', card.number);
        fd.append('order[payment_info_attributes][card_account_attributes][expiry_month]', card.expiry_month);
        fd.append('order[payment_info_attributes][card_account_attributes][expiry_year]', card.expiry_year);
        fd.append('order[payment_info_attributes][card_account_attributes][cvv]', card.cvv);
    }
    const result = await Api('patch', `/orders/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteOrders = async (id) => {
    const result = await Api('delete', `/orders/${id}`);
    //console.log(result)
    return result;
}


//=================== Order Food Options Checked======================

export const getListOrdersFoodsOptions = async () => {
    const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_food_options`)
    //console.log(result)
    return result;
}



export const createOrderFoodOptions = async (order_food_option) => {
    const { food_option_id, order_food_id } = order_food_option;
    let fd = new FormData();
    fd.append('order_food_option[food_option_id]', food_option_id);
    fd.append('order_food_option[order_food_id]', order_food_id);

    const result = await Api('post', '/order_food_options', fd);
    //console.log(result)
    return result;
}

export const updateOrderFoodOptions = async (id, order_food_option) => {
    const { food_option_id, order_food_id } = order_food_option;
    let fd = new FormData();
    fd.append('order_food_option[food_option_id]', food_option_id);
    fd.append('order_food_option[order_food_id]', order_food_id);

    const result = await Api('patch', `/order_food_options/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteOrderFoodOptions = async (id) => {
    const result = await Api('delete', `/order_food_options/${id}`);
    //console.log(result)
    return result;
}


//===================== Order Food Checked ============================


export const getListOrdersFoods = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/order_foods')
    //console.log(result)
    return result;
}


export const createOrderFoods = async (order_food) => {
    const { order_id, food_id, amount } = order_food
    let fd = new FormData();
    fd.append('order_food[order_id]', order_id);
    fd.append('order_food[food_id]', food_id);
    fd.append('order_food[amount]', amount);
    const result = await Api('post', '/order_foods', fd)
    //console.log(result)
    return result;
}

export const updateOrderFoods = async (id, order_food) => {
    //phai giu lai Order_id  , neu ko se co loi
    const { order_id, food_id, amount } = order_food;
    let fd = new FormData();
    fd.append('order_food[order_id]', order_id);
    fd.append('order_food[food_id]', food_id);
    fd.append('order_food[amount]', amount);

    const result = await Api('patch', `/order_foods/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteOrderFoods = async (id) => {
    const result = await Api('delete', `/order_foods/${id}`);
    //console.log(result)
    return result;
}


//===================== payment infos  Error========================

export const getListPaymentInfos = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/payment_infos')
    //console.log(result)
    return result;
}


export const createPaymentInfos = async (payment) => {
    const { restaurant_id, full_name, payment_type, card_number, expiry_month, expiry_year, cvv } = payment;
    const fd = new FormData();
    //console.log(payment)
    fd.append("payment_info[generatable_type]", "Restaurant");
    fd.append("payment_info[generatable_id]", restaurant_id);
    fd.append("payment_info[payment_type]", payment_type);
    fd.append("payment_info[card_account_attributes][full_name]", full_name);
    fd.append("payment_info[card_account_attributes][number]", card_number);
    fd.append("payment_info[card_account_attributes][expiry_month]", expiry_month);
    fd.append("payment_info[card_account_attributes][expiry_year]", expiry_year);
    fd.append("payment_info[card_account_attributes][cvv]", cvv);

    //console.log("im in create payment utils")

    const result = await Api('post', '/payment_infos', fd);
    //console.log(result)
    return result;
}


export const updatePaymentInfos = async (id, payment) => {
    //const {}
    //console.log(payment)
    const { card_id, full_name, payment_type } = payment;
    const restaurant_id = payment.restaurant_id
    const fd = new FormData();
    fd.append("payment_info[generatable_type]", "Restaurant");
    fd.append("payment_info[payment_type]", payment_type);
    fd.append("payment_info[card_account_attributes][id]", card_id);
    fd.append("payment_info[generatable_id]", restaurant_id);

    fd.append("payment_info[card_account_attributes][full_name]", full_name);
    //fd.append("payment_info[card_account_attributes][number]", null);
    // fd.append("payment_info[card_account_attributes][expiry_month]", expiry_month);
    // fd.append("payment_info[card_account_attributes][expiry_year]", expiry_year);
    // fd.append("payment_info[card_account_attributes][cvv]", cvv);
    // fd.append("payment_info[paypal_account_attributes][id]", 19);
    // fd.append("payment_info[paypal_account_attributes][paypal_email]", "asd@gmail.com");
    // // const data = {
    //     payment_info: {
    //         "paypal_account_attributes": {
    //             "paypal_email": "bushjdo@gmail.com"
    //         }
    //     }
    // }
    const result = await Api('patch', `/payment_infos/${id}`, fd);
    //console.log(result)
    return result;
}
export const deletePaymentInfos = async (id) => {
    const result = await Api('delete', `/payment_infos/${id}`);
    //console.log(result)
    return result;
}

//===================== payment infos  Error========================


// ======================= Restaurant User Checked ====================



export const getListRestaurantUsers = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/restaurant_users?all=true')
    console.log(result)
    return result;
}

export const createRestaurantUsers = async (resUser) => {
    const { user_id, restaurant_id } = resUser;
    console.log(resUser)
    const fd = new FormData();
    fd.append("restaurant_user[user_id]", user_id);
    fd.append("restaurant_user[restaurant_id]", restaurant_id);

    const result = await Api('post', '/restaurant_users', fd);
    console.log(result)
    return result;
}

export const updateRestaurantUsers = async (id, resUser) => {
    const { user_id, restaurant_id } = resUser;
    const fd = new FormData();
    fd.append("restaurant_user[user_id]", user_id);
    fd.append("restaurant_user[restaurant_id]", restaurant_id);

    const result = await Api('patch', `/restaurant_users/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteRestaurantUsers = async (id) => {
    const result = await Api('delete', `/restaurant_users/${id}`);
    //console.log(result)
    return result;
}

//=================== Restaurant Emails Checked=================

export const getListRestaurantEmails = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/restaurant_emails?all=true')
    //console.log(result)
    return result;
}
export const createRestaurantEmails = async (resEmail) => {
    const { email, restaurant_id } = resEmail
    const fd = new FormData();
    fd.append("restaurant_email[email]", email);
    fd.append("restaurant_email[restaurant_id]", restaurant_id);

    const result = await Api('post', '/restaurant_emails', fd);
    //console.log(result)
    return result;
}

export const updateRestaurantEmails = async (id, resEmail) => {
    const { email, restaurant_id } = resEmail
    const fd = new FormData();
    fd.append("restaurant_email[email]", email);
    fd.append("restaurant_email[restaurant_id]", restaurant_id);

    const result = await Api('patch', `/restaurant_emails/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteRestaurantEmails = async (id) => {
    const result = await Api('delete', `/restaurant_emails/${id}`);
    //console.log(result)
    return result;
}



//====================== Users ========================
// Can chu y xem lai create
export const getListUsers = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/users?all=true')
    //console.log(result)
    return result;
}

export const createUsers = async (user) => {
    const { nickname, name, phone, address, email, password, restaurant_id } = user;
    //console.log(user)
    //const resId = parseInt(restaurant_id, 10)
    const fd = new FormData();
    fd.append("user[nickname]", nickname);
    fd.append("user[name]", name);
    fd.append("user[phone]", phone);
    fd.append("user[address_attributes][address]", address);
    fd.append("user[restaurant_users_attributes][0][role]", "admin");
    fd.append("user[restaurant_users_attributes][0][restaurant_id]", restaurant_id);
    fd.append("user[email]", email);
    fd.append("user[password]", password);

    //console.log(fd)
    const result = await Api('post', '/users', fd);
    //console.log(result)
    return result;
}

export const updateUsers = async (id, user) => {
    //const { nickname, name, phone, address, address_id, email, password } = user;
    const { nickname, name, phone, address, address_id } = user;
    const fd = new FormData();
    fd.append("user[nickname]", nickname);
    fd.append("user[name]", name);
    fd.append("user[phone]", phone);
    fd.append("user[address_attributes][id]", address_id);
    fd.append("user[address_attributes][address]", address);

    const result = await Api('patch', `/users/${id}`, fd);
    //console.log(result)
    return result;
}


//======================== Notifications Checked ========================

export const getListNotifications = async () => {
    //const result = await axios.get(`${corsURL}http://tastebagdev.herokuapp.com/order_foods`);
    const result = await Api('get', '/notifications');

    //console.log(result)
    return result;
}


export const createNotifications = async (notification) => {
    const { subject, message, photo, restaurant_id } = notification
    //console.log(files)
    const fd = new FormData();
    fd.append("notification[subject]", subject)
    fd.append("notification[message]", message)
    fd.append("notification[photo_attributes][photo]", photo)
    fd.append("notification[restaurant_id]", restaurant_id)

    const result = await Api('post', '/notifications', fd);
    //console.log(result)
    return result;
}

export const updateNotifications = async (id, notification) => {
    const { subject, message, photo, photo_id, restaurant_id } = notification;
    //console.log(notification)
    let fd = new FormData();
    fd.append("notification[subject]", subject)
    fd.append("notification[message]", message)
    fd.append("notification[photo_attributes][id]", photo_id)
    fd.append("notification[photo_attributes][photo]", photo)
    fd.append("notification[restaurant_id]", restaurant_id)

    const result = await Api('patch', `/notifications/${id}`, fd);
    //console.log(result)
    return result;
}
export const deleteNotifications = async (id) => {
    const result = await Api('delete', `/notifications/${id}`);
    //console.log(result)
    return result;
}

export const isEmpty = (obj) => {
    for (let key in obj) {
        if (obj.hasOwnProperty(key))
            return false;
    }
    return true;
}

//==================== Login =======================

export const signIn = async (email, password) => {
    const result = await axios.post(`${corsURL}http://tastebagdev.herokuapp.com/auth/sign_in`, { email, password })
    //console.log(result)
    localStorage.setItem(HEADERS, JSON.stringify(result.headers))
    localStorage.setItem(USER, JSON.stringify(result.data.data))
    return result.data;
}

export const signOut = () => {
    localStorage.removeItem(USER)
    localStorage.removeItem(HEADERS)
    localStorage.removeItem(RESTAURANTS)
    localStorage.removeItem(FOODS)
    localStorage.removeItem(ORDERS)
    localStorage.removeItem(RESTAURANT_EMAILS)
    localStorage.removeItem(USER_RESTAURANT)
    localStorage.removeItem(LIST_ADMIN)
}


const Api = async (method, url, data = {}) => {

    let headers = JSON.parse(localStorage.getItem(HEADERS));
    //console.log(headers)
    let result = {};
    let config = {
        url: url,
        baseURL: `${corsURL}http://tastebagdev.herokuapp.com/`,
        headers: {
            'Access-Token': headers['access-token'],
            'Client': headers['client'],
            'Expiry': headers['expiry'],
            'Token-Type': headers['token-type'],
            'Uid': headers['uid'],
        },
        method: method,
        data: data
    }
    try {
        result = await axios(config);
        return result;
    } catch (e) {
        return null
    }


}
export const checkErrorResponse = (payload, type, dispatch) => {
    //console.log("im in checkError function")
    if (payload) {
        //console.log("payload not null")
        dispatch(
            {
                type,
                payload: payload.data
            }
        )
    }
    else {
        dispatch({ type: "Error" })
    }
}

export const pagination = (arr, page = 1, itemPerPage = 5) => {
    //render result of current page
    const start = (page - 1) * itemPerPage;
    const end = page * itemPerPage;
    if (arr.slice(start, end).length < 1) {
        let newPage = page - 1;
        let newStart = (newPage - 1) * itemPerPage;
        let newEnd = newPage + itemPerPage
        return arr.slice(newStart, newEnd)
    }
    return arr.slice(start, end)
}

export const isLogin = () => {
    const user = getUser();
    if (user != null) {
        return true
    } else {
        return false
    }
}

const getUser = () => {
    const user = localStorage.getItem(USER);
    //console.log(user);
    if (user != null) {
        return JSON.parse(user)
    } else {
        return null;
    }
}

// ======================== Perfomance ===================

const Manage = (method, lists, data = {}) => {
    //const lists = raw.data;
    switch (method) {
        case GET:
            return lists
        case CREATE:
            //lists.push(data)
            return [...lists, data]
        case UPDATE:
            return lists.map(item => {
                if (item.id === data.id) {
                    return data;
                }
                return item;
            })

        case DELETE:
            return lists.filter(item => item.id !== data.id)

        default:
            break;

    }
}

export const ManageStorage = (type, method = "new", data = {}) => {
    //console.log(type)
    const result = JSON.parse(localStorage.getItem(type))
    //console.log(result)
    if (result) {
        //console.log(result.data)
        const res = Manage(method, result.data, data)

        // if (needRenew(result.created_at)) {
        //     localStorage.setItem(type, JSON.stringify({ data: res, created_at: { hour: moment().hour(), day: moment().date(), month: moment().month() + 1, minute: moment().minute() } }))
        // }
        localStorage.setItem(type, JSON.stringify({ data: res, created_at: { hour: moment().hour(), day: moment().date(), month: moment().month() + 1, minute: moment().minute() } }))

        return res;
    } else {
        if (method === NEW) {
            localStorage.setItem(type, JSON.stringify({ data: data, created_at: { hour: moment().hour(), day: moment().date(), month: moment().month() + 1, minute: moment().minute() } }))
        }
        return false;
    }
}


export const needRenew = (data) => {

    const now = moment()
    const type_1 = (data.month < (now.month() + 1)) || (data.month === (now.month() + 1) && data.day < now.date());
    const type_2 = ((data.month === (now.month() + 1)) && data.day === now.date() && data.hour < now.hour());
    const type_3 = ((data.month === (now.month() + 1)) && data.day === now.date() && data.hour === now.hour() && ((now.minute() - data.minute) >= 20));
    if (type_1) {
        return true;
    }
    else if (type_2) {
        return true;
    }
    else if (type_3) {
        return true
    }
    else {
        return false;
    }
}

const checkType = (item) => {
    const type = typeof item;

    switch (type) {
        case 'string':
            return item.length > 0
        case 'number':
            return item > 0
        case 'object':
            //console.log(`files is : ${JSON.stringify(item)}`)
            return item instanceof File
        case 'undefined':
            return false;
        default:
            break;
    }
}

export const checkDataRequest = (obj) => {
    const arrKeys = Object.keys(obj);
    let haveError = false;

    for (let i = 0; i < arrKeys.length; i++) {
        if (!checkType(obj[arrKeys[i]])) {
            haveError = true;
            break;
        }
    }
    return haveError; // neu co loi se la true

}

export const havePermission = (id, type) => {
    const user = JSON.parse(localStorage.getItem(USER));
    const list = JSON.parse(localStorage.getItem(LIST_ADMIN))
    let result = -1;
    let permission = false;
    if (user && list) {

        switch (type) {
            case 'RESTAURANT':
                result = list.data.findIndex(item => item.restaurant_id === id && item.user_id === user.id)
                if (result > -1) {
                    permission = true
                } else {
                    permission = false
                }
                break;
            case 'USER_RES':
                const listRes = JSON.parse(localStorage.getItem(USER_RESTAURANT))
                result = listRes.data.findIndex(item => item.uid === user.uid && item.id === user.id)
                if (result > -1) {
                    console.log(result)
                    permission = true
                } else {
                    permission = false
                }
                break;
            default:
                break;
        }
    }
    console.log(permission)
    return permission;
}

const createUserUpdate = (id) => {
    const list = JSON.parse(localStorage.getItem(LIST_ADMIN))
    let user = {}
    if (list) {
        list.data.forEach((item) => {
            if (item.user_id === id) {
                user = {
                    user_id: item.user_id,
                    id: item.id,
                    role: item.role
                }
            }
        })
    }
    return user
}