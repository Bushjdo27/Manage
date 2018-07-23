import React, { Component } from 'react';
import { createFoodOptions } from '../../../utils';
//import {getFoodOption} from '../../../actions/foodOptionActions'
import {connect} from 'react-redux'
class CreateFoodOptions extends Component {

    constructor(props){
        super(props);
        this.state = {
            foodID: 0,
            name:"",
            price:""
        }
    }

    // 

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createFoodOptions()
    }
    render() {
        const {foodID , name , price} = this.state;
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="foodID" value={foodID} type="number" placeholder="Food ID" />
                <input name="name" value={name} type="text" placeholder="Name" />
                <input name="price" value={price} type="number" placeholder="price" />
                <button type="submit" >Create Foods Options</button>
            </form>
        )
    }

}

const mapStateToProps = (state , props) =>{
    return {
        
    }
}

export default connect()(CreateFoodOptions);