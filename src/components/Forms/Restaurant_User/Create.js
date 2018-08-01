import React, { Component } from 'react';
import { createRestaurantUser, updateRestaurantUser } from '../../../actions/restaurantUsersActions'
import { connect } from 'react-redux'
class CreateRestaurantUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: props.data ? parseInt(props.data.user_id, 10) : 0,
            restaurant_id: props.data ? parseInt(props.data.restaurant_id, 10) : 0
        }
    }

    handleUserIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ user_id: value }))
    }

    handleRestIdChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        if (this.props.data) {
            this.props.dispatch(updateRestaurantUser(this.props.data.id, this.state))
        } else {
            this.props.dispatch(createRestaurantUser(this.state))
        }
    }
    render() {
        const { user_id, restaurant_id } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>User ID : </label>
                        <input className="input" onChange={this.handleUserIDChange} name="user_id" value={user_id} type="number" placeholder="User ID" />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" onChange={this.handleRestIdChange} name="restaurant_id" value={restaurant_id} type="number" placeholder="Restaurant ID" />
                    </div>
                    <button type="submit" >{this.props.data ? 'Edit Restaurant User' : 'Create Restaurant User'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateRestaurantUser)