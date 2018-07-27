import React, { Component } from 'react';
import { createRestaurantEmails } from '../../../utils'
import { connect } from 'react-redux'
class CreateRestaurantEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.data ? props.data.email : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createRestaurantEmails()
    }
    render() {
        const { email, restaurant_id } = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="email" value={email} type="email" placeholder="Email" />
                <input name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Restaurant Email</button>
            </form>
        )
    }

}


export default connect()(CreateRestaurantEmail)