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
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Email : </label>
                        <input className="input" name="email" value={email} type="email" placeholder="Email" />
                    </div><div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                    </div>


                    <button type="submit" >{this.props.data ? 'Edit Restaurant Email' : 'Create Restaurant Email'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateRestaurantEmail)