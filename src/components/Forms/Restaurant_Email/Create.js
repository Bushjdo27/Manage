import React, { Component } from 'react';
import { createRestaurantEmail, updateRestaurantEmail } from '../../../actions/restaurantEmailActions'
import { connect } from 'react-redux'
class CreateRestaurantEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.data ? props.data.email : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0
        }
    }

    handlEmailChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ email: value }))
    }

    handlResIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        if (this.props.data) {
            this.props.dispatch(updateRestaurantEmail(this.props.data.id, this.state))
        } else {
            this.props.dispatch(createRestaurantEmail(this.state))
        }
    }
    render() {
        const { email, restaurant_id } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Email : </label>
                        <input onChange={this.handlEmailChange} className="input" name="email" value={email} type="email" placeholder="Email" />
                    </div><div className="form__group">
                        <label>Restaurant ID : </label>
                        <input onChange={this.handlResIDChange} className="input" name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                    </div>


                    <button type="submit" >{this.props.data ? 'Edit Restaurant Email' : 'Create Restaurant Email'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateRestaurantEmail)