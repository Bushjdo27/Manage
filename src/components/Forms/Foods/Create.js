import React, { Component } from 'react';
import { createFoods } from '../../../utils'

class CreateFoods extends Component {

    constructor(props){
        this.state = {
            categoryID: "",
            name:"",
            description:"",
            price: 0,
            photo: null,

        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createFoods(e.target.elements.photo.files[0])
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="categoryID" type="number" placeholder="Category ID" />
                <input name="name" type="text" placeholder="Name" />
                <input name="description" type="text" placeholder="descriptions" />
                <input name="price" type="number" placeholder="price" />
                <input name="photo" type="file" />
                <button type="submit" >Create Foods</button>
            </form>
        )
    }

}


export default CreateFoods