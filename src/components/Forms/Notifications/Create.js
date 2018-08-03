import React, { Component } from 'react';
import { createNotification, updateNotification } from '../../../actions/notificationActions'
import { connect } from 'react-redux';

//error update
class CreateNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: props.data ? props.data.subject : '',
            message: props.data ? props.data.message : '',
            restaurant_id: props.data ? props.data.restaurant_id : 0

        }
    }

    handleSubjectChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ subject: value }))

    }
    handleMessageChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ message: value }))
    }
    handleResIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        //createNotifications(e.target.elements.photo.files[0])
        if (this.props.data) {
            this.props.dispatch(updateNotification(this.props.data.id, { ...this.state, photo: e.target.elements.photo.files[0] }))
        } else {
            this.props.dispatch(createNotification({ ...this.state, photo: e.target.elements.photo.files[0] }))
        }
    }
    render() {
        const { subject, message, restaurant_id } = this.state
        return (
            <div className={this.props.edit ? "container-form" : "container-form"}>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form__group">
                        <label>Subject : </label>
                        <input className="input" name="subject" type="text" placeholder="Subject" value={subject} onChange={this.handleSubjectChange} />
                    </div>

                    <div className="form__group">
                        <label>Message : </label>
                        <input className="input" name="message" type="text" placeholder="Message" value={message} onChange={this.handleMessageChange} />
                    </div>
                    <div className="form__group">
                        <label>Image  : </label>
                        <input className="input" name="photo" type="file" onChange={this.handlePhotoChange} />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="restaurant_id" type="number" placeholder="Restaurant ID" value={restaurant_id} onChange={this.handleResIDChange} />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Notification' : 'Create Notification'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateNotification)