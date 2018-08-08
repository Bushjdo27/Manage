import React, { Component } from 'react';
import { createFood, updateFood } from '../../../actions/foodActions'
import { connect } from 'react-redux';

// checked
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
        const value = parseInt(e.target.value, 10);
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

    renderOptions = () => {
        if (this.props.data_food.length > 0) {
            return this.props.data_food.map((item, index) => {
                return <option key={index} value={item.category_id}>{item.category.name}</option>
            })
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submiting...")
        //createFoods(e.target.elements.photo.files[0]);
        const { category_id, name, description, price } = this.state
        if (this.props.data) {
            this.props.dispatch(updateFood(this.props.data.id, { ...this.state, files: e.target.elements.photo.files[0], id_photo: this.props.data.photo.id })).then(() => { this.props.history.goBack() })
        } else {
            const data = { category_id, name, description, price, files: e.target.elements.photo.files[0] }
            this.props.dispatch(createFood(data)).then(() => { this.props.hideCreate() })
        }
    }
    render() {
        const { name, description, price } = this.state
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Category <span style={{ color: 'red' }}>* :</span> </label>
                        <select className="input" onChange={this.handleCateIDChange}>
                            <option value="">Select Category</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handleNameChange} className="input" value={name} name="name" type="text" placeholder="Name" />
                    </div>
                    <div className="form__group">
                        <label>Description <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handleDescriptionChange} className="input" value={description} name="description" type="text" placeholder="descriptions" />
                    </div>
                    <div className="form__group">
                        <label>Price <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handlePriceChange} className="input" value={price} name="price" type="number" placeholder="price" />
                    </div>
                    <div className="form__group">
                        <label>Photo <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="photo" type="file" />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit Foods' : 'Create Foods'}</button>
                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        data_food: state.Foods
    }
}

export default connect(mapStateToProps)(CreateFoods)
//<input onChange={this.handleCateIDChange} className="input" value={category_id} name="categoryID" type="number" placeholder="Category ID" />