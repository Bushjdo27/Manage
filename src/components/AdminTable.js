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
                        <td>{res.address.address}</td>
                        <td>{res.phone}</td>
                        <td>{res.updated_at}</td>
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
                        <td>{res.updated_at}</td>
                        <td>{res.photo.photo_url}</td>
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
                        <td>{res.description}</td>
                        <td>{res.price}</td>
                        <td>{res.updated_at}</td>
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
                        <td>{res.updated_at}</td>
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

    typeOrderFoodOptions = () => {
        if (this.props.data.length > 0) {
            return this.props.data.map((res) => {
                return (
                    <tr key={res.id}>
                        <td>{res.name}</td>
                        <td>{res.price}</td>
                        <td>{res.food_id}</td>
                        <td>{res.updated_at}</td>
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
                        <td>{res.card_account.updated_at}</td>
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
                        <td>{res.updated_at}</td>
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
                        <td>{res.updated_at}</td>
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
                        <td>{res.updated_at}</td>
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
                        <td>{res.updated_at}</td>
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
            default:
                return []

        }
    }
    render() {
        console.log(this.props.data)
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
            </div>
        )
    }
}


export default connect()(AdminTable);