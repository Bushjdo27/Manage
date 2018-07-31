import React, { Component } from 'react';
import { createOrderFoodOptions } from '../../../utils'
import { connect } from 'react-redux'
class CreateOrderFoodOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createOrderFoodOptions()
    }
    render() {
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Food ID : </label>
                        <input className="input" name="foodOptionID" type="number" placeholder="Food ID" />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" name="orderFoodID" type="text" placeholder="Name" />
                    </div>
                    <button type="submit" >{this.props.data ? 'Edit Order Foods Options' : 'Create Order Foods Options'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateOrderFoodOptions)