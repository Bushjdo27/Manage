import React, { Component } from 'react';
import { createNotifications } from '../../../utils'

class CreateNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: '',
            message:'',
            resID:''

        }
    }

    handleSubjectChange = ()=>{

    }
    handleMessageChange = ()=>{
        
    }
    handleResIDChange = ()=>{
        
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        createNotifications(e.target.elements.photo.files[0])
    }
    render() {
        const {subject,message,resID} = this.state
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
                        <input className="input" input name="photo" type="file"  onChange={this.handlePhotoChange} />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" value={resID} onChange={this.handleResIDChange} />
                    </div>
                
                    <button type="submit" >Create Notification</button>
                </form>
            </div>
            
        )
    }

}


export default CreateNotification