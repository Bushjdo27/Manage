import React, { Component } from 'react';
import { createNotification, updateNotification } from '../../../actions/notificationActions'
import { connect } from 'react-redux';
import { checkDataRequest } from '../../../utils';

import Spinner from '../../Spinner';
//error update
class CreateNotification extends Component {

    constructor(props) {
        super(props);
        this.state = {
            subject: props.data ? props.data.subject : '',
            message: props.data ? props.data.message : '',
            restaurant_id: props.data ? props.data.restaurant_id : 0,
            error: false,
            clickSumit: false,

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
        const { subject, message, restaurant_id } = this.state;
        const data = {
            subject,
            message,
            restaurant_id: parseInt(restaurant_id , 10),
            photo: e.target.elements.photo.files[0]
        }
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            if (!checkDataRequest(data)) {
                this.props.dispatch(updateNotification(this.props.data.id, {...data , photo_id: this.props.data.photo.id})).then(() => { this.props.back() })
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }

        } else {


            if (!checkDataRequest(data)) {

                this.props.dispatch(createNotification(data)).then(() => { this.props.hideCreate() })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        }
    }
    renderOptions = () => {
        if (this.props.Restaurants.length > 0) {
            return this.props.Restaurants.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
            })
        }
    }
    render() {
        const { subject, message, clickSumit, error } = this.state
        return (
            <div className={this.props.edit ? "container-form" : "container-form"}>
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form__group">
                        <label>Subject <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="subject" type="text" placeholder="Subject" value={subject} onChange={this.handleSubjectChange} />
                    </div>

                    <div className="form__group">
                        <label>Message <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="message" type="text" placeholder="Message" value={message} onChange={this.handleMessageChange} />
                    </div>
                    <div className="form__group">
                        <label>Image  <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="photo" type="file" onChange={this.handlePhotoChange} />
                    </div>
                    <div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>

                        <select className="input" onChange={this.handleResIDChange}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                    {error && <p className="error-label">You must enter all field have asterisk</p>}

                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Notification' : 'Create Notification'}</button>
                    }
                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants
    }
}


export default connect(mapStateToProps)(CreateNotification)