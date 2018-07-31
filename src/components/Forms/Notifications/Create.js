import React, { Component } from 'react';
import { createNotifications } from '../../../utils'
import { connect } from 'react-redux'
class CreateNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: props.data ? props.data.subject : '',
            message: props.data ? props.data.message : '',
            resID: props.data ? props.data.restaurant_id : ''

        }
    }

    handleSubjectChange = () => {

    }
    handleMessageChange = () => {

    }
    handleResIDChange = (e) => {

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createNotifications(e.target.elements.photo.files[0])
    }
    render() {
        const { subject, message, resID } = this.state
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
                        <input className="input" input name="photo" type="file" onChange={this.handlePhotoChange} />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" value={resID} onChange={this.handleResIDChange} />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Notification' : 'Create Notification'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateNotification)