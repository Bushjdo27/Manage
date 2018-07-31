import React, { Component } from 'react';
import { createPaymentInfos } from '../../../utils'
import { connect } from 'react-redux'
class CreatePayment extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        createPaymentInfos()
    }
    render() {
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Payment' : 'Create Payment'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreatePayment)