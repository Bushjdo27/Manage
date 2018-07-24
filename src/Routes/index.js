import React, { Component } from 'react';
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
import App from '../App';
import RestaurantPage from '../pages/Restaurant';
import EditRestaurant from '../components/Forms/Restaurant/Edit';
import CategoryPage from '../pages/Category';
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
                    <Route exact path="/order" component={App} />
                    <Route exact path="/catering" component={App} />
                    <Route exact path="/login" component={App} />
                    <Route exact path="/restaurant/:res_name/" component={App} />
                    <Route exact path="/restaurant/:res_name/catering" component={App} />
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