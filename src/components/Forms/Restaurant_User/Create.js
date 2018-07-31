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
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>User ID : </label>
                        <input className="input" name="user_id" value={user_id} type="number" placeholder="User ID" />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                    </div>
                    <button type="submit" >{this.props.data ? 'Edit Restaurant User' : 'Create Restaurant User'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateRestaurantUser)