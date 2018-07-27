import React, { Component } from 'react';
import { createRestaurantUsers } from '../../../utils'
import { connect } from 'react-redux'
class CreateRestaurantUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: props.data ? props.data.user_id : 0,
            restaurant_id: props.data ? props.data.restaurant_id : 0
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createRestaurantUsers()
    }
    render() {
        const { user_id, restaurant_id } = this.state
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="user_id" value={user_id} type="number" placeholder="User ID" />
                <input name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Restaurant User</button>
            </form>
        )
    }

}


export default connect()(CreateRestaurantUser)