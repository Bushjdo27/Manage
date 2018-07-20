import React, { Component } from 'react';
import { createFoodOptions } from '../../../utils'

class CreateFoodOptions extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createFoodOptions()
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="foodID" type="number" placeholder="Food ID" />
                <input name="name" type="text" placeholder="Name" />
                <input name="price" type="number" placeholder="price" />
                <button type="submit" >Create Foods Options</button>
            </form>
        )
    }

}


export default CreateFoodOptions