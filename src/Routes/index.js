import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from '../App';
import RestaurantPage from '../pages/Restaurant';
import EditRestaurant from '../components/Forms/Restaurant/Edit';
import CategoryPage from '../pages/Category';
import Food_OptionPage from '../pages/Food_Option';
import FoodPage from '../pages/Food';
import NotificationPage from '../pages/Notification';
import Order_Food_OptionPage from '../pages/Order_Food_Option';
import Order_Food from '../pages/Order_Food';
import OrderPage from '../pages/Order';
import PaymentPage from '../pages/Payment';
import Restaurant_EmailPage from '../pages/Restaurant_Email';
import Restaurant_UserPage from '../pages/Restaurant_User';
import UserPage from '../pages/User';


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
                    <Route exact path="/" component={RestaurantPage} />
                    <Route exact path="/restaurant/:id/" component={EditRestaurant} />
                    <Route exact path="/caterogy" component={CategoryPage} />

                    <Route exact path="/food_options" component={Food_OptionPage} />
                    <Route exact path="/foods" component={FoodPage} />
                    <Route exact path="/notification" component={NotificationPage} />

                    <Route exact path="/order" component={OrderPage} />
                    <Route exact path="/order_food" component={Order_Food} />
                    <Route exact path="/order_food_option" component={Order_Food_OptionPage} />
                    <Route exact path="/payment" component={PaymentPage} />
                    <Route exact path="/restaurant_emails" component={Restaurant_EmailPage} />
                    <Route exact path="/restaurant_users" component={Restaurant_UserPage} />
                    <Route exact path="/users" component={UserPage} />
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