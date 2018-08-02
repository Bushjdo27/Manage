import React, { Component } from 'react';
import { createOrder } from '../../../actions/orderActions'
import { connect } from 'react-redux'
class CreateOrder extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: 0,
            user_id: 0,
            first_name: "",
            last_name: "",
            company_name: "",
            email: "",
            phone: "",
            address: "",

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        createOrder()
    }
    render() {
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Order' : 'Create Order'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateOrder)