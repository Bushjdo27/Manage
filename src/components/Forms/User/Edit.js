import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils'
import { EDIT_USERS } from '../../../actions/constantType'


class EditUser extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }

    getDataEdit = () => {
        const value = checkDataEdit(EDIT_USERS);
        if (this.props.User) {
            localStorage.setItem(EDIT_USERS, JSON.stringify(this.props.User))
            return this.props.User
        } else if (value) {
            if (value.id === parseInt(this.props.match.params.id, 10)) {
                return value
            }
            return null;
        } else {
            //this.props.history.push("/caterogy")
            return null
        }
    }

    render() {
        return (
            <div>
                <Header name="User" sub="Edit User Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }


}


const mapStateToProps = (state, props) => {
    return {
        User: state.Users.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditUser)