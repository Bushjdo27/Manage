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
        this.setState(() => ({ clickSumit: true ,error:false}))
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
    renderOptions = () => {
        if (this.props.data_food.length > 0) {
            return this.props.Foods.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
            })
        }
    }
    render() {
        const { name, price, clickSumit ,error } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Food <span style={{ color: 'red' }}>* :</span> </label>
                        

                        <select className="input" onChange={this.handleFoodIDChange}>
                            <option value="">Select Food</option>
                            {this.renderOptions()}
                        </select>
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

const mapStateToProps = (state) =>{
    return {
        Foods: state.Foods
    }
}


export default connect(mapStateToProps)(CreateFoodOptions);