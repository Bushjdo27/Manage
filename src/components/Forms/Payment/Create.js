import React, { Component } from 'react';
//import { createPaymentInfos } from '../../../utils'
import { createPaymentInfo, updatePaymentInfo } from '../../../actions/paymentActions'
import { connect } from 'react-redux'
import { checkDataRequest } from '../../../utils'
import Spinner from '../../Spinner';
//checked
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
            cvv: 0,
            error: false,
            clickSumit: false,

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
        const { restaurant_id, payment_type, full_name, card_number, expiry_month, expiry_year, cvv } = this.state;
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            const data = {
                restaurant_id: parseInt(restaurant_id , 10),
                payment_type,
                full_name,

                card_id: this.props.data.card_account.id
            }
            if (!checkDataRequest(data)) {
                console.log("preparing update...")
                this.props.dispatch(updatePaymentInfo(this.props.data.id, data)).then(() => { this.props.back() })
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }

        } else {

            const data = {
                restaurant_id: parseInt(restaurant_id , 10),
                payment_type,
                full_name,
                card_number: parseInt(card_number, 10),
                expiry_month: parseInt(expiry_month, 10),
                expiry_year: parseInt(expiry_year, 10),
                cvv: parseInt(cvv, 10),
            }
            if (!checkDataRequest(data)) {
                this.props.dispatch(createPaymentInfo(data)).then(() => { this.props.hideCreate() })
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
        const { payment_type, full_name, card_number, expiry_month, expiry_year, cvv, clickSumit, error } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>


                        <select className="input" onChange={this.handleResIDChange}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Payment Type <span style={{ color: 'red' }}>* :</span> </label>
                        <input value={payment_type} onChange={this.handlePaymentTypeChange} className="input" name="type" type="text" placeholder="Type: card or paypal" />
                    </div>
                    <div className="form__group">
                        <label>Full Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input value={full_name} onChange={this.handleFullNameChange} className="input" name="fullName" type="text" placeholder="Full Name" />
                    </div>
                    {!this.props.data &&
                        <div style={{ width: "100%" }}>
                            <div className="form__group">
                                <label>Card Number <span style={{ color: 'red' }}>* :</span> </label>
                                <input value={card_number} onChange={this.handleCardNumberChange} className="input" name="card_number" type="number" placeholder="Restaurant ID" />
                            </div>
                            <div className="form__group">
                                <label>Expire Month <span style={{ color: 'red' }}>* :</span> </label>
                                <input value={expiry_month} onChange={this.handleExpMonthChange} className="input" name="resID" type="number" placeholder="Expire Month" />
                            </div>
                            <div className="form__group">
                                <label>Expire Year <span style={{ color: 'red' }}>* :</span> </label>
                                <input value={expiry_year} onChange={this.handleExpYearChange} className="input" name="resID" type="number" placeholder="Expire Year" />
                            </div>
                            <div className="form__group">
                                <label>CVV <span style={{ color: 'red' }}>* :</span> </label>
                                <input value={cvv} onChange={this.handleCVVChange} className="input" name="resID" type="number" placeholder="CVV" />
                            </div>
                        </div>
                    }

                    {error && <p className="error-label">You must enter all field have asterisk</p>}


                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Payment' : 'Create Payment'}</button>
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


export default connect(mapStateToProps)(CreatePayment)

/*

<div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" />
                    </div>

                    */