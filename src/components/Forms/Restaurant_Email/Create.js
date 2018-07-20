import React, { Component } from 'react';
import { createRestaurantEmails } from '../../../utils'

class CreateRestaurantEmail extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createRestaurantEmails()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="userID" type="email" placeholder="Email" />
                <input name="resID" type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Restaurant Email</button>
            </form>
        )
    }

}


export default CreateRestaurantEmail