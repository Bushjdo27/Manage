import React, { Component } from 'react';
import { createRestaurantUsers } from '../../../utils'

class CreateRestaurantUser extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createRestaurantUsers()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="userID" type="number" placeholder="User ID" />
                <input name="resID" type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Restaurant User</button>
            </form>
        )
    }

}


export default CreateRestaurantUser