import React, { Component } from 'react';
import { createUser, updateUser } from '../../../actions/userActions'
import { connect } from 'react-redux'
class CreateUser extends Component {

    constructor(props) {
        super(props);
        this.state = {
            nickname: props.data ? props.data.nickname : "",
            name: props.data ? props.data.name : "",
            phone: props.data ? props.data.phone : "",
            address: "",
            role: "",
            restaurant_id: 0,
            email: props.data ? props.data.email : "",
            password: ""
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

    handleChangeRole = (e) => {
        const value = e.target.value;
        this.setState(() => ({ role: value }))
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
        console.log('in create payment')
        //console.log(e.target.elements.photo.files[0])
        if (this.props.data) {
            this.props.dispatch(updateUser(this.props.data.id, this.state)).then(() => { this.props.history.goBack() })
        } else {
            this.props.dispatch(createUser(this.state)).then(() => { this.props.hideCreate() })
        }
    }
    render() {
        const { nickname, name, phone, address, role, restaurant_id, email, password } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Nick Name : </label>
                        <input className="input" name="resID" type="text" placeholder="Restaurant ID" value={nickname} onChange={this.handleChangeNickName} />
                    </div>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" name="resID" type="text" placeholder="Name" value={name} onChange={this.handleChangeName} />
                    </div>
                    <div className="form__group">
                        <label>Phone : </label>
                        <input className="input" name="resID" type="text" placeholder="Phone" value={phone} onChange={this.handleChangePhone} />
                    </div>
                    <div className="form__group">
                        <label>Address : </label>
                        <input className="input" name="resID" type="text" placeholder="Address" value={address} onChange={this.handleChangeAddress} />
                    </div>
                    <div className="form__group">
                        <label>Role : </label>
                        <input className="input" name="resID" type="text" placeholder="Role" value={role} onChange={this.handleChangeRole} />
                    </div>
                    <div className="form__group">
                        <label>restaurant Id : </label>
                        <input className="input" name="resID" type="number" placeholder="Restaurant ID" value={restaurant_id} onChange={this.handleChangeRestaurantID} />
                    </div>
                    <div className="form__group">
                        <label>Email : </label>
                        <input className="input" name="resID" type="text" placeholder="Email" value={email} onChange={this.handleChangeEmail} />
                    </div>
                    <div className="form__group">
                        <label>Password : </label>
                        <input className="input" name="resID" type="password" placeholder="Password" value={password} onChange={this.handleChangePassword} />
                    </div>

                    <button type="submit" >{this.props.data ? 'Edit User' : 'Create User'}</button>
                </form>
            </div>

        )
    }

}


export default connect()(CreateUser)