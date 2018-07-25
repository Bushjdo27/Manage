import { combineReducers } from 'redux';
import { Restaurants } from './resReducers';
import { Restaurant_Email } from './resEmailReducer';
import { Restaurant_Users } from './resUserReducers'
import { Payments } from './paymentReducers';
import { Foods } from './foodReducers';
import { Auth } from './authReducer';
import { Users } from './usersReducers';
import { Notifications } from './notificationsReducers';
import { Food_Options } from './foodOptionsReducers';
import { Categories } from './categoriesReducer';
import { Order_Foods } from './orderFoodsReducers';
import { Order_Foods_Options } from './orderFoodOptionsReducers';
import { Orders } from './orderReducers'


export default combineReducers({
    Restaurants,
    Restaurant_Email,
    Restaurant_Users,
    Payments,
    Food_Options,
    Notifications,
    Foods,
    Auth,
    Users,
    Categories,
    Orders,
    Order_Foods,
    Order_Foods_Options
})