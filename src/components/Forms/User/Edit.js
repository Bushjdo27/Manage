import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin } from '../../../utils'
const EditUser = (props) => {

    if (!isLogin) {
        this.props.history.push("/login")
    }

    return (
        <div>
            <Header name="User" sub="Edit User Page" />
            <Form back={this.props.history.goBack} type="edit" data={props.User} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        User: state.Users.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditUser)