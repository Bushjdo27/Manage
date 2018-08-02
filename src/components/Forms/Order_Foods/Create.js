import React, { Component } from 'react';
import { createOrderFood, updateOrderFood } from '../../../actions/orderFoodAction'
import { connect } from 'react-redux'
class CreateOrderFood extends Component {

    constructor(props) {
        super(props);
        this.state = {
            order_id: props.data ? props.data.order_id : 0,
            food_id: props.data ? props.data.food_id : 0,
            amount: props.data ? props.data.amount : 0
        }
    }

    handleOrderIdChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ order_id: value }))
    }

    handleFoodIdChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ food_id: value }))
    }

    handleAmountChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ amount: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('in create order food')
        //console.log(e.target.elements.photo.files[0])
        //createOrderFoods()
        if (this.props.data) {
            this.props.dispatch(updateOrderFood(this.props.data.id, this.state))
        } else {
            this.props.dispatch(createOrderFood(this.state))
        }
    }
    render() {
        const { order_id, food_id, amount } = this.state
        return (
            <div className="container-form">
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form__group">
                        <label>Order ID : </label>
                        <input className="input" name="orderId" type="text" placeholder="Order ID" value={order_id} onChange={this.handleOrderIdChange} />
                    </div>
                    <div className="form__group">
                        <label>Food ID : </label>
                        <input className="input" name="foodID" type="number" placeholder="Food ID" value={food_id} onChange={this.handleFoodIdChange} />
                    </div>
                    <div className="form__group">
                        <label>Amount : </label>
                        <input className="input" name="amount" type="number" placeholder="Amount" value={amount} onChange={this.handleAmountChange} />
                    </div>
                    <button type="submit" >{this.props.data ? 'Edit Order Foods' : 'Create Order Foods'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateOrderFood)