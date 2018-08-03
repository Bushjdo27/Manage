import React, { Component } from 'react';
import { createFood, updateFood } from '../../../actions/foodActions'
import { connect } from 'react-redux';

// van de voi update
class CreateFoods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category_id: props.data ? props.data.category_id : "",
            name: props.data ? props.data.name : "",
            description: props.data ? props.data.description : "",
            price: props.data ? props.data.price : 0,
            photo: ""
        }
    }

    handleCateIDChange = (e) => {
        console.log(e.target.value)
        const value = e.target.value;
        this.setState(() => ({ category_id: value }))

    }
    handleNameChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ name: value }))

    }
    handleDescriptionChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ description: value }))

    }

    handlePriceChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ price: value }))

    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submiting...")
        //createFoods(e.target.elements.photo.files[0]);
        const { category_id, name, description, price } = this.state
        if (this.props.data) {
            this.props.dispatch(updateFood(this.props.data.id, { ...this.state, files: e.target.elements.photo.files[0], id_photo: this.props.data.photo.id }))
        } else {
            const data = { category_id, name, description, price, files: e.target.elements.photo.files[0] }
            this.props.dispatch(createFood(data))
        }
    }
    render() {
        const { category_id, name, description, price } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Category ID : </label>
                        <select className="input" onChange={this.handleCateIDChange}>
                            <option value="">Select Category</option>
                            <option value={1}>Bushjdo Category</option>
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input onChange={this.handleNameChange} className="input" value={name} name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="form__group">
                        <label>Description : </label>
                        <input onChange={this.handleDescriptionChange} className="input" value={description} name="description" type="text" placeholder="descriptions" />
                    </div>
                    <div className="form__group">
                        <label>Price : </label>
                        <input onChange={this.handlePriceChange} className="input" value={price} name="price" type="number" placeholder="price" />
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
//<input onChange={this.handleCateIDChange} className="input" value={category_id} name="categoryID" type="number" placeholder="Category ID" />