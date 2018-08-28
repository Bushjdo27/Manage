import React, { Component } from 'react';
import { createRestaurantEmail, updateRestaurantEmail } from '../../../actions/restaurantEmailActions'
import { connect } from 'react-redux';
import { checkDataRequest, ManageStorage, removetDataEdit } from '../../../utils'
import { RESTAURANT_EMAILS, UPDATE, CREATE, EDIT_RESTAURANTS_EMAILS } from '../../../actions/constantType'
import Spinner from '../../Spinner';
//checked
class CreateRestaurantEmail extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: props.data ? props.data.email : "",
            restaurant_id: props.data ? props.data.restaurant_id : 0,
            error: false,
            clickSumit: false,
            isTaken: false,
            reqFail: false
        }
    }

    componentDidMount() {
        if (this.props.type === "edit" && !this.props.data) {
            this.props.navigate("/restaurant_emails")
        }
    }

    handlEmailChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ email: value }))
    }

    handlResIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))
    }
    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('in create RestaurantUser')
        //console.log(e.target.elements.photo.files[0])
        const { email, restaurant_id } = this.state;
        const data = {
            email,
            restaurant_id
        }
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            //this.props.dispatch(updateRestaurantEmail(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
            if (!checkDataRequest(data)) {


                if (!this.validateEmails()) {
                    //console.log("email has been taken")

                    this.props.dispatch(updateRestaurantEmail(this.props.data.id, data)).then((res) => {
                        ManageStorage(RESTAURANT_EMAILS, UPDATE, res)
                        removetDataEdit(EDIT_RESTAURANTS_EMAILS)
                        this.props.back()
                    }).catch(() => {
                        this.setState(() => ({ reqFail: true, clickSumit: false }))
                    })
                } else {
                    this.setState(() => ({ clickSumit: false, isTaken: true }))
                }
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        } else {
            //this.props.dispatch(createRestaurantEmail(this.state)).then(() => { this.props.hideCreate() })
            if (!checkDataRequest(data)) {


                if (!this.validateEmails()) {
                    //console.log("email has been taken")

                    this.props.dispatch(createRestaurantEmail(data)).then((res) => {
                        ManageStorage(RESTAURANT_EMAILS, CREATE, res)
                        this.props.hideCreate()
                    }).catch(() => {
                        this.setState(() => ({ reqFail: true, clickSumit: false }))
                    })
                } else {
                    this.setState(() => ({ clickSumit: false, isTaken: true }))
                }
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        }
    }

    renderOptions = () => {
        if (this.props.Restaurants.length > 0) {
            return this.props.Restaurants.map((item, index) => {
                return <option key={index} value={item.id}>{item.name}</option>
            })
        }
    }
    validateEmails = () => {
        const { Emails, Users } = this.props;
        const { email } = this.state;
        const listEmails = []
        if (Emails.length > 0 && Users.length > 0) {
            Users.forEach((item) => {
                listEmails.push(item.email)
            })
            Emails.forEach((item) => {
                listEmails.push(item.email)
            })
            // console.log(listEmails)
            // console.log(email)
            const find = listEmails.findIndex((item) => item === email)
            if (find > -1) {
                return true
            }
            return false;

        }
    }
    render() {
        const { email, clickSumit, error, isTaken, reqFail } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Email <span style={{ color: 'red' }}>* :</span> </label>
                        <input onChange={this.handlEmailChange} className="input" name="email" value={email} type="email" placeholder="Email" />
                    </div><div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>

                        <select className="input" onChange={this.handlResIDChange}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>

                    {error && <p className="error-label">You must enter all field have asterisk</p>}
                    {isTaken && <p className="error-label">This email has been taken</p>}
                    {reqFail && <p className="error-label">Something went wrong with server, please try later</p>}
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit Restaurant Email' : 'Create Restaurant Email'}</button>
                    }
                </form>
            </div>

        )
    }

}


const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants,
        Emails: state.Restaurant_Email,
        Users: state.Users
    }
}

export default connect(mapStateToProps)(CreateRestaurantEmail)