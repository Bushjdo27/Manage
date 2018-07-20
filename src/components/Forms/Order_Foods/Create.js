import React, { Component } from 'react';
import { createOrderFoods } from '../../../utils'

class CreateOrderFood extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log('in create order food')
        //console.log(e.target.elements.photo.files[0])
        createOrderFoods()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>

                <input name="orderId" type="text" placeholder="Order ID" />
                <input name="foodID" type="number" placeholder="Food ID" />
                <input name="amount" type="number" placeholder="amount" />
                <button type="submit" >Create Order Foods</button>
            </form>
        )
    }

}


export default CreateOrderFood