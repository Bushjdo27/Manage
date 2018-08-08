import React, { Component } from 'react';
import { ManageStorage } from '../utils'
import { GET, NEW, RESTAURANT_ALL, FOODS, RESTAURANTS, FOOD_ALL } from '../actions/constantType';
import { connect } from 'react-redux';
import { getListRestaurant } from '../actions/resActions';
import { getFoods } from '../actions/foodActions';
class Header extends Component {


    componentDidMount() {
        this.handleLoadRestaurants().then(this.handleLoadFoods)
    }


    handleLoadRestaurants = async () => {
        console.log("Loading Data Restaurant")
        const data = ManageStorage(RESTAURANTS, GET)
        console.log(data)
        if (ManageStorage(RESTAURANTS, GET)) {
            const payload = ManageStorage(RESTAURANTS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: RESTAURANT_ALL, payload })
        } else {
            console.log("in else , prepare call api")
            this.props.dispatch(getListRestaurant()).then(data => {
                ManageStorage(RESTAURANTS, NEW, data)
            })
        }
    }

    handleLoadFoods = async () => {
        console.log("Loading Data Food")
        const data = ManageStorage(FOODS, GET)
        console.log(data)
        if (ManageStorage(FOODS, GET)) {
            const payload = ManageStorage(FOODS, GET)
            //console.log("data come back from ")
            this.props.dispatch({ type: FOOD_ALL, payload })
        } else {
            console.log("in else , prepare call api")
            this.props.dispatch(getFoods()).then(data => {
                console.log(data)
                ManageStorage(FOODS, NEW, data)
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