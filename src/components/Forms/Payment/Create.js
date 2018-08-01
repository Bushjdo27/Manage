import React, { Component } from 'react';
//import { createPaymentInfos } from '../../../utils'
import { createPaymentInfo, updatePaymentInfo } from '../../../actions/paymentActions'
import { connect } from 'react-redux'
class CreatePayment extends Component {

    constructor(props) {
        super(props);
        this.state = {
            restaurant_id: props.data ? props.data.generatable_id : 0,
            payment_type: props.data ? props.data.payment_type : '',
            full_name: props.data ? props.data.card_account.full_name : '',
            card_number: 0,
            expiry_month: 0,
            expiry_year: 0,
            cvv: 0

        }
    }

    handleResIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))
    }
    handlePaymentTypeChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ payment_type: value }))
    }
    handleFullNameChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ full_name: value }))
    }
    handleCardNumberChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ card_number: value }))
    }
    handleExpMonthChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ expiry_month: value }))
    }
    handleExpYearChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ expiry_year: value }))
    }
    handleCVVChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ cvv: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        //createPaymentInfos()

        if (this.props.data) {
            this.props.dispatch(updatePaymentInfo(this.props.data.id, this.state))
        } else {
            this.props.dispatch(createPaymentInfo(this.state))
        }
    }
    render() {
        const { restaurant_id, payment_type, full_name, card_number, expiry_month, expiry_year, cvv } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input value={restaurant_id} onChange={this.handleResIDChange} className="input" name="resID" type="number" placeholder="Restaurant ID" />
                    </div>
                    <div className="form__group">
                        <label>Payment Type : </label>
                        <input value={payment_type} onChange={this.handlePaymentTypeChange} className="input" name="type" type="text" placeholder="Type: card or paypal" />
                    </div>
                    <div className="form__group">
                        <label>Full Name : </label>
                        <input value={full_name} onChange={this.handleFullNameChange} className="input" name="fullName" type="text" placeholder="Full Name" />
                    </div>
                    <div className="form__group">
                        <label>Card Number : </label>
                        <input value={card_number} onChange={this.handleCardNumberChange} className="input" name="card_number" type="number" placeholder="Restaurant ID" />
                    </div>
                    <div className="form__group">
                        <label>Expire Month : </label>
                        <input value={expiry_month} onChange={this.handleExpMonthChange} className="input" name="resID" type="number" placeholder="Expire Month" />
                    </div>
                    <div className="form__group">
                        <label>Expire Year : </label>
                        <input value={expiry_year} onChange={this.handleExpYearChange} className="input" name="resID" type="number" placeholder="Expire Year" />
                    </div>
                    <div className="form__group">
                        <label>CVV : </label>
                        <input value={cvv} onChange={this.handleCVVChange} className="input" name="resID" type="number" placeholder="CVV" />
                    </div>



                    <button type="submit" >{this.props.data ? 'Edit Payment' : 'Create Payment'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreatePayment)

/*

<div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" />
                    </div>

                    */