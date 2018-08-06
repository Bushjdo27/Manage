import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from '../App';
import Auth from '../pages/Auth'
import RestaurantPage from '../pages/Restaurant';
import EditRestaurant from '../components/Forms/Restaurant/Edit';

import CategoryPage from '../pages/Category';
import EditCategories from '../components/Forms/Categories/Edit';

import Food_OptionPage from '../pages/Food_Option';
import EditFoodOptions from '../components/Forms/Food_Options/Edit';

import FoodPage from '../pages/Food';
import EditFoods from '../components/Forms/Foods/Edit';

import NotificationPage from '../pages/Notification';
import EditNotifications from '../components/Forms/Notifications/Edit';


import OrderPage from '../pages/Order';
import EditOrder from '../components/Forms/Order/Edit';

import PaymentPage from '../pages/Payment';
import EditPayment from '../components/Forms/Payment/Edit';

import Restaurant_EmailPage from '../pages/Restaurant_Email';
import EditRestaurantEmail from '../components/Forms/Restaurant_Email/Edit';

import Restaurant_UserPage from '../pages/Restaurant_User';
import EditRestaurantUser from '../components/Forms/Restaurant_User/Edit';
import UserPage from '../pages/User';
import EditUser from '../components/Forms/User/Edit';

// import Order_Food_OptionPage from '../pages/Order_Food_Option';
// import EditOrderFoodOptions from '../components/Forms/Order_Food_Options/Edit';

// import Order_Food from '../pages/Order_Food';
// import EditOrderFoods from '../components/Forms/Order_Foods/Edit';


// import AboutPage from '../pages/AboutPage';
// import ContactPage from '../pages/ContactPage';
// import OrderDetails from '../pages/OrderDetails'
// import CateringMenuPage from '../pages/CateringMenuPage'
// import CateringPage from '../pages/CateringPage'
// import Auth from '../pages/Auth'
// import background404 from '../Assets/Images/404.png';
class AppRoute extends Component {
    render() {
        return (
            <BrowserRouter>
                <Switch>
                    <Route exact path="/login" component={Auth} />
                    <Route exact path="/" component={RestaurantPage} />
                    <Route exact path="/restaurant/:id/" component={EditRestaurant} />
                    <Route exact path="/caterogy" component={CategoryPage} />
                    <Route exact path="/caterogy/:id/" component={EditCategories} />

                    <Route exact path="/food_options" component={Food_OptionPage} />
                    <Route exact path="/food_options/:id/" component={EditFoodOptions} />

                    <Route exact path="/foods" component={FoodPage} />
                    <Route exact path="/foods/:id/" component={EditFoods} />

                    <Route exact path="/notification" component={NotificationPage} />
                    <Route exact path="/notification/:id" component={EditNotifications} />

                    <Route exact path="/order" component={OrderPage} />
                    <Route exact path="/payment" component={PaymentPage} />
                    <Route exact path="/payment/:id/" component={EditPayment} />

                    <Route exact path="/restaurant_emails" component={Restaurant_EmailPage} />
                    <Route exact path="/restaurant_emails/:id/" component={EditRestaurantEmail} />

                    <Route exact path="/restaurant_users" component={Restaurant_UserPage} />
                    <Route exact path="/restaurant_users/:id/" component={EditRestaurantUser} />

                    <Route exact path="/users" component={UserPage} />
                    <Route exact path="/users/:id/" component={EditUser} />
                    <Route exact path="/login" component={App} />
                    <Route render={() => {
                        return (
                            <section style={
                                {
                                    height: '28rem',

                                    backgroundPosition: 'right',
                                    backgroundRepeat: 'no-repeat',
                                    textAlign: 'center',
                                    marginTop: '4rem'
                                }}>
                                <h3 className="heading-secondary">We are working now</h3>
                                <Link className="btn btn--primary" to="/"> Back to Home</Link>
                            </section>
                        )
                    }} />
                </Switch>
            </BrowserRouter>
        )
    }
}

export default AppRoute;

//backgroundImage: 'url(' + background404 + ')',

/*

<Route exact path="/order_food" component={Order_Food} />
<Route exact path="/order_food/:id/" component={EditOrderFoods} />

<Route exact path="/order_food_option" component={Order_Food_OptionPage} />
<Route exact path="/order_food_option/:id/" component={EditOrderFoodOptions} />
<Route exact path="/order/:id/" component={EditOrder} />

*/