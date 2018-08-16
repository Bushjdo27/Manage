import React, { Component } from 'react';
import { createUser, updateUser } from '../../../actions/userActions'
import { connect } from 'react-redux';
import { checkDataRequest, ManageStorage } from '../../../utils'
import { USER_RESTAURANT, UPDATE, CREATE } from '../../../actions/constantType'
import Spinner from '../../Spinner';
class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: props.data ? props.data.nickname : "",
            name: props.data ? props.data.name : "",
            phone: props.data ? props.data.phone : "",
            address: "",
            restaurant_id: 0,
            email: props.data ? props.data.email : "",
            password: "",
            error: false,
            clickSumit: false,
            isTaken: false
        }
    }

    handleChangeNickName = (e) => {
        const value = e.target.value;
        this.setState(() => ({ nickname: value }))
    }
    handleChangeName = (e) => {
        const value = e.target.value;
        this.setState(() => ({ name: value }))
    }
    handleChangePhone = (e) => {
        const value = e.target.value;
        this.setState(() => ({ phone: value }))
    }
    handleChangeAddress = (e) => {
        const value = e.target.value;
        this.setState(() => ({ address: value }))
    }
    handleChangeRestaurantID = (e) => {
        const value = e.target.value;
        this.setState(() => ({ restaurant_id: value }))
    }
    handleChangeEmail = (e) => {
        const value = e.target.value;
        this.setState(() => ({ email: value }))
    }
    handleChangePassword = (e) => {
        const value = e.target.value;
        this.setState(() => ({ password: value }))
    }

    handleSubmit = (e) => {
        e.preventDefault();
        //console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        const { nickname, name, phone, address, restaurant_id, email, password } = this.state;
        const data = { nickname, name, phone, address, restaurant_id: parseInt(restaurant_id, 10), email, password }
        this.setState(() => ({ clickSumit: true, error: false, isTaken: false }))
        if (this.props.data) {
            // this.props.dispatch(updateUser(this.props.data.id, data)).then(() => { this.props.history.goBack() })
            const updateData = { ...data, address_id: parseInt(this.props.data.address.id, 10), address: this.props.data.address.address }
            if (!checkDataRequest(updateData)) {
                if (!this.validateEmails()) {
                    this.props.dispatch(updateUser(this.props.data.id, updateData)).then((res) => {
                        ManageStorage(USER_RESTAURANT, UPDATE, res)
                        this.props.back()
                    })
                } else {
                    this.setState(() => ({ clickSumit: false, isTaken: true }))
                }

                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        } else {
            // this.props.dispatch(createUser(data)).then(() => { this.props.hideCreate() })
            if (!checkDataRequest(data)) {
                if (!this.validateEmails()) {
                    //console.log("email has been taken")
                    this.props.dispatch(createUser(data)).then((res) => {
                        ManageStorage(USER_RESTAURANT, CREATE, res)
                        this.props.hideCreate()
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
        const { nickname, name, phone, address, email, password, clickSumit, error, isTaken } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Nick Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Nick Name" value={nickname} onChange={this.handleChangeNickName} />
                    </div>
                    <div className="form__group">
                        <label>Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Name" value={name} onChange={this.handleChangeName} />
                    </div>
                    <div className="form__group">
                        <label>Phone <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Phone" value={phone} onChange={this.handleChangePhone} />
                    </div>
                    <div className="form__group">
                        <label>Address <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Address" value={address} onChange={this.handleChangeAddress} />
                    </div>

                    <div className="form__group">
                        <label>Restaurant <span style={{ color: 'red' }}>* :</span> </label>
                        <select className="input" onChange={this.handleChangeRestaurantID}>
                            <option value="">Select Restaurant</option>
                            {this.renderOptions()}
                        </select>
                    </div>
                    <div className="form__group">
                        <label>Email <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Email" value={email} onChange={this.handleChangeEmail} />
                    </div>
                    <div className="form__group">
                        <label>Password <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="password" placeholder="Password" value={password} onChange={this.handleChangePassword} />
                    </div>
                    {error && <p className="error-label">You must enter all field have asterisk</p>}
                    {isTaken && <p className="error-label">This email has been taken</p>}

                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit User' : 'Create User'}</button>
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
export default connect(mapStateToProps)(CreateUser)