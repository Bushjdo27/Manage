import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { deleteRestaurant } from '../actions/resActions'
import { deleteCategory } from '../actions/categoriesActions'
import { deleteFood } from '../actions/foodActions'
import { deleteFoodOption } from '../actions/foodOptionActions'
import { deletePaymentInfo } from '../actions/paymentActions'
import { deleteRestaurantUser } from '../actions/restaurantUsersActions'
import { deleteRestaurantEmail } from '../actions/restaurantEmailActions'
import { deleteUser } from '../actions/userActions'
import { deleteNotification } from '../actions/notificationActions'
import { deleteOrderFood } from '../actions/orderFoodAction'
import { deleteOrder } from '../actions/orderActions'
import { connect } from 'react-redux'
class AdminTable extends Component {


    renderTableHead = () => {
        //this.props.titleTable
        return this.props.titleTable.map((item, index) => {
            return (
                <td key={index}>{item}</td>
            )
        })
    }

    typeRestaurant = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.address.address.substring(0, 50)}</td>
                        <td>{res.phone}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/restaurant/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeCategory = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.category_type}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>{res.photo.photo_url.substring(0, 50)}</td>
                        <td>
                            <Link to={`/caterogy/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeFood = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.description.substring(0, 50)}</td>
                        <td>{res.price}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/foods/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeFoodOptions = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.price}</td>
                        <td>{res.food_id}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/food_options/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }


    filterDataOrderFoods = (data) => {
        let result = [];
        data.forEach((item) => {
            for (let i = 0; i < item.order_foods.length; i++) {
                console.log(item.order_foods[i])
                result.push({ data: item.order_foods[i] })
            }
        })

        return result

    }
    filterDataOrderFoodOptions = (data) => {
        let result = [];
        data.forEach((item) => {


            item.order_foods.forEach((option) => {
                for (let j = 0; j < option.order_food_options.length; j++) {
                    console.log(option.order_food_options[j])
                    result.push({ data: option.order_food_options[j] })
                }

            })
        })

        return result

    }


    typeOrder = () => {
        if (this.props.data.length > 0) {
            const foods = this.filterDataOrderFoods(this.props.data)
            const options = this.filterDataOrderFoodOptions(this.props.data)
            return this.props.data.map((res, index) => {
                return (
                    <tr key={res.id}>
                        <td>{res.email}</td>
                        <td>{`${res.first_name} ,${res.last_name}`}</td>
                        <td>
                            <div style={{ textAlign: 'left' }}>
                                <p>
                                    <strong>Phone : </strong>
                                    <span>{res.phone}</span>
                                </p>
                                <p>
                                    <strong>Address : </strong>
                                    <span>{res.address.address}</span>
                                </p>

                            </div>


                        </td>
                        <td>
                            <p>
                                <strong>Amount : </strong>
                                <span>{foods[index] && foods[index].data.amount}</span>
                            </p>
                            <p>
                                <strong>Price : </strong>
                                <span>{foods[index] && foods[index].data.price}</span>
                            </p>
                            <p>
                                <strong>Food : </strong>
                                <span>{foods[index] && foods[index].data.food_id}</span>
                            </p>
                        </td>

                        <td>
                            {options.length > 0 ?
                                <div>
                                    <p>
                                        <strong>Name : </strong>
                                        <span>{options[index] && options[index].data.food_option_id}</span>
                                    </p>
                                    <p>
                                        <strong>Price : </strong>
                                        <span>{options[index] && options[index].data.price}</span>
                                    </p>
                                </div>


                                : <p>No Options</p>}

                        </td>


                        <td>{res.total_price}</td>
                        <td>
                            <Link to={`/order_foods/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }


    typeOrderFoods = () => {
        if (this.props.data.length > 0) {

            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.food_id}</td>
                        <td>{res.amount}</td>
                        <td>{res.price}</td>
                        <td>{res.created_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/order_foods/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeOrderFoodOptions = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.price}</td>
                        <td>{res.food_id}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/order_food_option/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typePayments = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.generatable.name}</td>
                        <td>{res.payment_type}</td>
                        <td>{res.card_account.full_name}</td>
                        <td>{res.card_account.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/payment/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeRestaurantUsers = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.user_id}</td>
                        <td>{res.role}</td>
                        <td>{res.restaurant_id}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/restaurant_users/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeRestaurantEmails = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.email}</td>
                        <td>{res.restaurant_id}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/restaurant_emails/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeUsers = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.email}</td>
                        <td>{res.allow_password_change ? "True" : "False"}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/users/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }

    typeNotifications = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.subject}</td>
                        <td>{res.message.substring(0, 50)}...</td>
                        <td>{res.restaurant_id}</td>
                        <td>{res.updated_at.substring(0, 50)}</td>
                        <td>
                            <Link to={`/notification/${res.id}/`}>
                                Edit
                            </Link>
                        </td>
                        <td onClick={() => { this.handleRemove(res.id) }}>Delete</td>
                    </tr>
                )
            })
        }
    }
    renderTableBody = () => {
        //this.props.data
        const { type } = this.props;

        switch (type) {
            case 'Restaurant':
                return this.typeRestaurant()
            case 'Category':
                return this.typeCategory()

            case 'Food':
                return this.typeFood()

            case 'Food_Option':
                return this.typeFoodOptions()
            case 'Payment':
                return this.typePayments()
            case 'Restaurant_User':
                return this.typeRestaurantUsers()
            case 'Restaurant_Email':
                return this.typeRestaurantEmails()

            case 'User':
                return this.typeUsers()
            case 'Notification':
                return this.typeNotifications()
            case 'Order_Food':
                return this.typeOrderFoods()
            case 'Order':
                return this.typeOrder()
            default:
                return []

        }
    }

    handleRemove = (id) => {
        const { type } = this.props;

        switch (type) {
            case 'Restaurant':
                this.props.dispatch(deleteRestaurant(id))
                break;
            case 'Category':
                this.props.dispatch(deleteCategory(id))
                break;

            case 'Food':
                this.props.dispatch(deleteFood(id))
                break;
            case 'Food_Option':
                this.props.dispatch(deleteFoodOption(id))
                break;
            case 'Payment':
                this.props.dispatch(deletePaymentInfo(id))
                break;
            case 'Restaurant_User':
                this.props.dispatch(deleteRestaurantUser(id))
                break;
            case 'Restaurant_Email':
                this.props.dispatch(deleteRestaurantEmail(id))
                break;
            case 'User':
                this.props.dispatch(deleteUser(id))
                break;
            case 'Notification':
                this.props.dispatch(deleteNotification(id))
                break;
            case 'Order_Food':
                this.props.dispatch(deleteOrderFood(id))
                break;
            case 'Order':
                this.props.dispatch(deleteOrder(id))
                break;
            default:
                return []

        }
    }
    render() {
        console.log(this.props.canPrev);
        console.log(this.props.canNext)
        return (
            <div className="admin__data">
                <table>
                    <thead>
                        <tr>
                            {this.renderTableHead()}
                            <td colSpan="2">Control</td>
                        </tr>
                    </thead>
                    <tfoot>
                        <tr>
                            <td colSpan="6">Copyright Taste Baguette</td>
                        </tr>
                    </tfoot>
                    <tbody>
                        {this.renderTableBody()}
                    </tbody>
                </table>

                <div className="admin__data__control">
                    <button disabled={this.props.canPrev} className="admin__data__control--button" onClick={this.props.prev}>Prev</button>
                    <button disabled={this.props.canNext} className="admin__data__control--button" onClick={this.props.next}>Next</button>
                </div>
            </div>
        )
    }
}


export default connect()(AdminTable);