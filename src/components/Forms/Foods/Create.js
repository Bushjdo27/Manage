import React, { Component } from 'react';
import { createFood, updateFood } from '../../../actions/foodActions'
import { connect } from 'react-redux';
import { checkDataRequest, ManageStorage } from '../../../utils'
import { FOODS, UPDATE, CREATE } from '../../../actions/constantType'

import Spinner from '../../Spinner';
// checked
class CreateFoods extends Component {

    constructor(props) {
        super(props)
        this.state = {
            category_id: props.data ? props.data.category_id : "",
            name: props.data ? props.data.name : "",
            description: props.data ? props.data.description : "",
            price: props.data ? props.data.price : 0,
            photo: "",
            error: false,
            clickSumit: false,
            reqFail: false
        }
    }

    handleCateIDChange = (e) => {
        console.log(e.target.value)
        const value = parseInt(e.target.value, 10);
        this.setState(() => ({ category_id: value , reqFail: false}))

    }
    handleNameChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ name: value , reqFail: false}))

    }
    handleDescriptionChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ description: value , reqFail: false}))

    }

    handlePriceChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ price: value , reqFail: false}))

    }

    renderOptions = () => {
        if (this.props.Foods.length > 0) {
            return this.props.Foods.map((item, index) => {
                return <option key={index} value={item.category_id}>{item.name}</option>
            })
        }
        //item.category.name
    }

    handleSubmit = (e) => {
        e.preventDefault();
        console.log("submiting...")
        //createFoods(e.target.elements.photo.files[0]);
        const { category_id, name, description, price } = this.state
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            const data = {
                category_id,
                name,
                description,
                price,
                files: e.target.elements.photo.files[0],
                id_photo: this.props.data.photo.id
            }

            if (!checkDataRequest(data)) {
                this.props.dispatch(updateFood(this.props.data.id, data)).then((res) => {
                    ManageStorage(FOODS, UPDATE, res)
                    this.props.back()
                }).catch(()=>{
                    this.setState(()=>({reqFail: true , clickSumit:false}))
                })
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }

        } else {
            const data = { category_id, name, description, price, files: e.target.elements.photo.files[0] }
            //this.props.dispatch(createFood(data)).then(() => { this.props.hideCreate() })

            if (!checkDataRequest(data)) {

                this.props.dispatch(createFood(data)).then((res) => {
                    ManageStorage(FOODS, CREATE, res)
                    this.props.hideCreate()
                }).catch(()=>{
                    this.setState(()=>({reqFail: true , clickSumit:false}))
                })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        }
    }
    render() {
        const { name, description, price, clickSumit, error ,reqFail} = this.state
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
                    {error && <p className="error-label">You must enter all field have asterisk</p>}
                    {reqFail && <p className="error-label">Something went wrong with server, please try later</p>}
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Foods' : 'Create Foods'}</button>
                    }
                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) => {
    return {
        Foods: state.Foods
    }
}

export default connect(mapStateToProps)(CreateFoods)
//<input onChange={this.handleCateIDChange} className="input" value={category_id} name="categoryID" type="number" placeholder="Category ID" />