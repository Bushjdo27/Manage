import React, { Component } from 'react';
import { createUser, updateUser } from '../../../actions/userActions'
import { connect } from 'react-redux';
import { checkDataRequest } from '../../../utils'
import Spinner from '../../Spinner';
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
            password: "",
            error: false,
            clickSumit: false,
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
        const {nickname , name , phone , address , role , restaurant_id , email , password} = this.state;
        const data = {nickname , name , phone , address , role , restaurant_id , email , password}
        this.setState(() => ({ clickSumit: true ,error:false}))
        if (this.props.data) {
            // this.props.dispatch(updateUser(this.props.data.id, data)).then(() => { this.props.history.goBack() })
            if(!checkDataRequest(data)){
                
                this.props.dispatch(updateUser(this.props.data.id, data)).then(() => { this.props.history.goBack() })
                //return
            }else{
                this.setState(()=>({clickSumit:false , error:true}))
            }
        } else {
            // this.props.dispatch(createUser(data)).then(() => { this.props.hideCreate() })
            if(!checkDataRequest(data)){
                
                this.props.dispatch(createUser(data)).then(() => { this.props.hideCreate() })
                //return
            }else{
                this.setState(()=>({clickSumit:false , error:true}))
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
    render() {
        const { nickname, name, phone, address, role, email, password, clickSumit ,error } = this.state;
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
                        <label>Role <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" name="resID" type="text" placeholder="Role" value={role} onChange={this.handleChangeRole} />
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
                    
                    {
                        clickSumit ? <Spinner /> : <button type="submit" >{this.props.data ? 'Edit User' : 'Create User'}</button>
                    }
                </form>
            </div>

        )
    }

}

const mapStateToProps = (state) =>{
    return {
        Restaurants: state.Restaurants
    }
}
export default connect(mapStateToProps)(CreateUser)