import React, { Component } from 'react';
import { createCategories } from '../../../utils'

class CreateCategories extends Component {

    handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.elements.photo.files[0])
        //const fd = new FormData()
        // fd.append('image',e.target.elements.photo.files[0],"contact")
        // console.log(fd)
        createCategories(e.target.elements.photo.files[0])
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input name="name" type="text" placeholder="Category name" />
                <input name="type" type="text" placeholder="Category type" />
                <input name="resId" type="number" />
                <input name="photo" type="file" />
                <button type="submit" >Create Category</button>
            </form>
        )
    }

}


export default CreateCategories