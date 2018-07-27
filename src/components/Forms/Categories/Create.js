import React, { Component } from 'react';
import { createCategories } from '../../../utils'
import { connect } from 'react-redux'
class CreateCategories extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.data ? props.data.name : "",
            category_type: props.data ? props.data.category_type : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0,
        }
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.photo.files[0])
        //const fd = new FormData()
        // fd.append('image',e.target.elements.photo.files[0],"contact")
        // console.log(fd)
        createCategories(e.target.elements.photo.files[0])
    }
    render() {
        const { name, category_type, restaurant_id } = this.state;
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" value={name} name="name" type="text" placeholder="Category name" />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" value={category_type} name="category_type" type="text" placeholder="Category Type" />
                    </div>
                    <div className="form__group">
                        <label>Restaurant ID : </label>
                        <input className="input" value={restaurant_id} name="restaurant_id" type="number" placeholder="Restaurant ID" />
                    </div>
                    <div>
                        <label>Photo: </label>
                        <input className="input" name="photo" type="file" />
                    </div>

                    <button type="submit" >Create Category</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateCategories)