import React, { Component } from 'react';
import { createFoodOptions } from '../../../utils';
//import {getFoodOption} from '../../../actions/foodOptionActions'
import { connect } from 'react-redux'
class CreateFoodOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            foodID: props.data ? props.data.food_id : 0,
            name: props.data ? props.data.name : "",
            price: props.data ? props.data.price : ""
        }
    }

    // 

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createFoodOptions()
    }
    render() {
        const { foodID, name, price } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Food ID : </label>
                        <input className="input" name="foodID" value={foodID} type="number" placeholder="Food ID" />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" name="name" value={name} type="text" placeholder="Name" />
                    </div>
                    <div className="form__group">
                        <label>Price : </label>
                        <input className="input" name="price" value={price} type="number" placeholder="price" />
                    </div>
                    <button type="submit" >{this.props.data ? 'Edit Foods Options' : 'Create Foods Options'}</button>
                </form>
            </div>

        )
    }

}



export default connect()(CreateFoodOptions);