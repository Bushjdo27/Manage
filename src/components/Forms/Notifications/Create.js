import React, { Component } from 'react';
import { createNotifications } from '../../../utils'

class CreateNotification extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createNotifications(e.target.elements.photo.files[0])
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="subject" type="text" placeholder="Subject" />
                <input name="message" type="text" placeholder="Message" />
                <input name="photo" type="file" />
                <input name="resID" type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Notification</button>
            </form>
        )
    }

}


export default CreateNotification