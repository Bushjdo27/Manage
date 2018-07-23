import React, { Component } from 'react';
import { createOrderFoodOptions } from '../../../utils'

class CreateOrderFoodOptions extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createOrderFoodOptions()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="foodOptionID" type="number" placeholder="Food ID" />
                <input name="orderFoodID" type="text" placeholder="Name" />
                <button type="submit" >Create Order Foods Options</button>
            </form>
        )
    }

}


export default CreateOrderFoodOptions