import React, { Component } from 'react';
import { createRestaurantUser, updateRestaurantUser } from '../../../actions/restaurantUsersActions'
import { connect } from 'react-redux';
import { checkDataRequest } from '../../../utils'
import Spinner from '../../Spinner';
//checked
class CreateRestaurantUser extends Component {

    constructor(props) {
        super(props);

        this.state = {
            user_id: props.data ? parseInt(props.data.user_id, 10) : 0,
            restaurant_id: props.data ? parseInt(props.data.restaurant_id, 10) : 0,
            error: false,
            clickSumit: false,
        }
    }

    handleUserIDChange = (e) => {
        const element = e.target.value;
        const value = parseInt(element, 10)
        console.log(value)
        this.setState(() => ({ user_id: value }))
    }

    handleRestIdChange = (e) => {
        const element = e.target.value;
        const value = parseInt(element, 10)
        this.setState(() => ({ restaurant_id: value }))

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        const { user_id, restaurant_id } = this.state;
        console.log(this.state)
        const data = { user_id, restaurant_id };

        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            //this.props.dispatch(updateRestaurantUser(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
            if (!checkDataRequest(data)) {

                this.props.dispatch(updateRestaurantUser(this.props.data.id, data)).then(() => { this.props.back() })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }

        } else {
            this.props.dispatch(createRestaurantUser(this.state)).then(() => { this.props.hideCreate() })
            if (!checkDataRequest(data)) {

                this.props.dispatch(createRestaurantUser(data)).then(() => { this.props.hideCreate() })
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

    renderUserOptions = () => {
        if (this.props.Users.length > 0) {
            return this.props.Users.map((item, index) => {
                return <option key={index} value={item.id}>{item.email}</option>
            })
        }
    }
    render() {
        const { clickSumit, error } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>User <span style={{ color: 'red' }}>* :</span> </label>

                        <select className="input" onChange={this.handleUserIDChange}>
                            <option value="">Select User</option>
                            {this.renderUserOptions()}
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>

                        <select className="input" onChange={this.handleRestIdChange}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                    {error && <p className="error-label">You must enter all field have asterisk</p>}

                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Restaurant User' : 'Create Restaurant User'}</button>
                    }
                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants,
        Users: state.Users
    }
}


export default connect(mapStateToProps)(CreateRestaurantUser)

//<input className="input" onChange={this.handleUserIDChange} name="user_id" value={user_id} type="number" placeholder="User ID" />