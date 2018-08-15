import React, { Component } from 'react';
import { ManageStorage } from '../utils'
import { GET, NEW, RESTAURANT_ALL, FOODS, RESTAURANTS, FOOD_ALL, ORDERS, ORDER_ALL , RESTAURANT_EMAILS , RESTAURANT_EMAIL_ALL} from '../actions/constantType';
import { connect } from 'react-redux';
import { getListRestaurant } from '../actions/resActions';
import { getFoods } from '../actions/foodActions';
import { getListOrder } from '../actions/orderActions';
import { getListRestaurantEmail } from '../actions/restaurantEmailActions'
import { isLogin } from '../utils'
class Header extends Component {


    componentDidMount() {
        if (isLogin()) {
            this.handleLoadRestaurants().then(this.handleLoadFoods).then(this.handleLoadOrder).then(this.handleLoadRestaurantEmail)
        }

    }


    handleLoadRestaurants = async () => {
        //const data = ManageStorage(RESTAURANTS, GET)
        if (ManageStorage(RESTAURANTS, GET)) {
            const payload = ManageStorage(RESTAURANTS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: RESTAURANT_ALL, payload })
        } else {
            //console.log("in else , prepare call api")
            this.props.dispatch(getListRestaurant()).then(data => {
                ManageStorage(RESTAURANTS, NEW, data)
            })
        }
    }

    handleLoadFoods = async () => {
        //console.log("Loading Data Food")
        //const data = ManageStorage(FOODS, GET)
        //console.log(data)
        if (ManageStorage(FOODS, GET)) {
            const payload = ManageStorage(FOODS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: FOOD_ALL, payload })
        } else {
            //console.log("in else , prepare call api")
            this.props.dispatch(getFoods()).then(data => {
                //console.log(data)
                ManageStorage(FOODS, NEW, data)
            })
        }
    }

    handleLoadOrder = async () => {
        if (ManageStorage(ORDERS, GET)) {
            const payload = ManageStorage(ORDERS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: ORDER_ALL, payload })
        } else {
            //console.log("in else , prepare call api")
            this.props.dispatch(getListOrder()).then(data => {
                //console.log(data)
                ManageStorage(ORDERS, NEW, data)
            })
        }
    }

    handleLoadRestaurantEmail = async ()=>{
        if (ManageStorage(RESTAURANT_EMAILS, GET)) {
            const payload = ManageStorage(RESTAURANT_EMAILS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: RESTAURANT_EMAIL_ALL, payload })
        } else {
            //console.log("in else , prepare call api")
            this.props.dispatch(getListRestaurantEmail()).then(data => {
                //console.log(data)
                ManageStorage(RESTAURANT_EMAILS, NEW, data)
            })
        }
    }


    render() {
        return (
            <header className="header">
                <h3 className="header__title">{this.props.name}</h3>
                <h5 className="header__subtitle">{this.props.sub ? this.props.sub : 'Change everything you want'}</h5>
            </header>
        )
    }
}


export default connect()(Header);