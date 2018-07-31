import React, { Component } from 'react';
import { createFoods } from '../../../utils'
import { connect } from 'react-redux'
class CreateFoods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            categoryID: props.data ? props.data.category_id : "",
            name: props.data ? props.data.name : "",
            description: props.data ? props.data.description : "",
            price: props.data ? props.data.price : 0,
            photo: ""
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        createFoods(e.target.elements.photo.files[0])
    }
    render() {
        const { categoryID, name, description, price } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Category ID : </label>
                        <input className="input" value={categoryID} name="categoryID" type="number" placeholder="Category ID" />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" value={name} name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="form__group">
                        <label>Description : </label>
                        <input className="input" value={description} name="description" type="text" placeholder="descriptions" />
                    </div>
                    <div className="form__group">
                        <label>Price : </label>
                        <input className="input" value={price} name="price" type="number" placeholder="price" />
                    </div>
                    <div className="form__group">
                        <label>Photo : </label>
                        <input className="input" name="photo" type="file" />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Foods' : 'Create Foods'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateFoods)