import React, { Component } from 'react';
//import { createFoodOptions } from '../../../utils';
import { createFoodOption, updateFoodOption } from '../../../actions/foodOptionActions'
import { connect } from 'react-redux';
import { checkDataRequest } from '../../../utils'

import Spinner from '../../Spinner';
//checked
class CreateFoodOptions extends Component {

    constructor(props) {
        super(props);
        this.state = {
            food_id: props.data ? parseInt(props.data.food_id, 10) : 0,
            name: props.data ? props.data.name : "",
            price: props.data ? props.data.price : "",
            error: false,
            clickSumit:false
        }
    }

    // 
    handleFoodIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ food_id: value }))
    }

    handleNameChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ name: value }))
    }

    handlePriceChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ price: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log(e.target.elements.photo.files[0])
        const {food_id , name , price} = this.state
        const data = {food_id , name ,price}
        this.setState(() => { this.setState(() => ({ clickSumit: true })) })
        if (this.props.data) {
            //this.props.dispatch(updateFoodOption(this.props.data.id, data)).then(() => { this.props.history.goBack() })
            if(!checkDataRequest(data)){
                
                this.props.dispatch(updateFoodOption(this.props.data.id, data)).then(() => { this.props.history.goBack() })
                //return
            }else{
                this.setState(()=>({clickSumit:false , error:true}))
            }
        } else {
            
            if(!checkDataRequest(data)){
                
                this.props.dispatch(createFoodOption(data)).then(() => { this.props.hideCreate() })
                //return
            }else{
                this.setState(()=>({clickSumit:false , error:true}))
            }
        }
    }
    render() {
        const { food_id, name, price, clickSumit ,error } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Food ID <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handleFoodIDChange} className="input" name="food_id" value={food_id} type="number" placeholder="Food ID" />
                    </div>
                    <div className="form__group">
                        <label>Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handleNameChange} className="input" name="name" value={name} type="text" placeholder="Name" />
                    </div>
                    <div className="form__group">
                        <label>Price <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handlePriceChange} className="input" name="price" value={price} type="number" placeholder="price" />
                    </div>
                    {error && <p className="error-label">You must enter all field have asterisk</p>}
                    
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Foods Options' : 'Create Foods Options'}</button>
                    }
                </form>
            </div>

        )
    }

}



export default connect()(CreateFoodOptions);