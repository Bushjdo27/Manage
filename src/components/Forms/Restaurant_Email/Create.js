import React, { Component } from 'react';
import { createRestaurantEmail, updateRestaurantEmail } from '../../../actions/restaurantEmailActions'
import { connect } from 'react-redux';
import { checkDataRequest , ManageStorage} from '../../../utils'
import {RESTAURANT_EMAILS , UPDATE ,CREATE} from '../../../actions/constantType'
import Spinner from '../../Spinner';
//checked
class CreateRestaurantEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.data ? props.data.email : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0,
            error: false,
            clickSumit: false,
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
        const { email, restaurant_id } = this.state;
        const data = {
            email,
            restaurant_id
        }
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            //this.props.dispatch(updateRestaurantEmail(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
            if (!checkDataRequest(data)) {

                this.props.dispatch(updateRestaurantEmail(this.props.data.id, data)).then((res) => { 
                    ManageStorage(RESTAURANT_EMAILS, UPDATE, res)
                    this.props.back() 
                })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        } else {
            //this.props.dispatch(createRestaurantEmail(this.state)).then(() => { this.props.hideCreate() })
            if (!checkDataRequest(data)) {

                this.props.dispatch(createRestaurantEmail(data)).then((res) => { 
                    ManageStorage(RESTAURANT_EMAILS, CREATE, res)
                    this.props.hideCreate() 
                })
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
        const { email, clickSumit, error } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Email <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handlEmailChange} className="input" name="email" value={email} type="email" placeholder="Email" />
                    </div><div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>

                        <select className="input" onChange={this.handlResIDChange}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>

                    {error && <p className="error-label">You must enter all field have asterisk</p>}

                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Restaurant Email' : 'Create Restaurant Email'}</button>
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

export default connect(mapStateToProps)(CreateRestaurantEmail)