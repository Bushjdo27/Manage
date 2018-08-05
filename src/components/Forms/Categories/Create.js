import React, { Component } from 'react';
import { createCategory, updateCategory } from '../../../actions/categoriesActions';
import { connect } from 'react-redux';
import Spinner from '../../Spinner'
//checked
class CreateCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.data ? props.data.name : "",
            category_type: props.data ? props.data.category_type : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0,
            loading: false,
            clickSumit: false
        }
    }

    handleChangeName = (e) => {
        const name = e.target.value;
        this.setState(() => ({ name }))
    }

    handleChangeType = (e) => {
        const category_type = e.target.value;
        this.setState(() => ({ category_type }))
    }

    handleChangeResId = (e) => {
        const restaurant_id = e.target.value;
        this.setState(() => ({ restaurant_id }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("Submiting..");
        const { name, category_type, restaurant_id } = this.state;
        if (this.props.data) {
            this.setState(() => { this.setState(() => ({ clickSumit: true })) })
            this.props.dispatch(updateCategory(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
        } else {
            const data = { name, category_type, restaurant_id, files: e.target.elements.photo.files[0] }
            //this.setState(() => { this.setState(() => ({ clickSumit: true })) })
            this.props.dispatch(createCategory(data)).then(() => { this.props.hideCreate() })
        }

    }
    render() {
        const { name, category_type, restaurant_id, clickSumit } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Name : </label>
                        <input onChange={this.handleChangeName} className="input" value={name} name="name" type="text" placeholder="Category name" />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input onChange={this.handleChangeType} className="input" value={category_type} name="category_type" type="text" placeholder="Category Type : only menu or catering" />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input onChange={this.handleChangeResId} className="input" value={restaurant_id} name="restaurant_id" type="number" placeholder="Restaurant ID" />
                    </div>

                    {!this.props.data &&
                        <div className="form__group">
                            <label>Photo: </label>
                            <input className="input" name="photo" type="file" />
                        </div>
                    }
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Category' : 'Create Category'}</button>
                    }

                </form>
            </div>

        )
    }

}


export default connect()(CreateCategories)