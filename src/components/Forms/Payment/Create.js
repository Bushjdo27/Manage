import React, { Component } from 'react';
import { createPaymentInfos } from '../../../utils'
import { connect } from 'react-redux'
class CreatePayment extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        createPaymentInfos()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="resID" type="number" placeholder="Restaurant ID" />
                <button type="submit" >Create Payment</button>
            </form>
        )
    }

}


export default connect()(CreatePayment)