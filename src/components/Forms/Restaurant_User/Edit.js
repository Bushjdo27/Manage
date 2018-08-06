import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin } from '../../../utils'
const EditFoodOptions = (props) => {

    if (!isLogin) {
        this.props.history.push("/login")
    }

    return (
        <div>
            <Header name="Restaurant User" sub="Edit Restaurant User Page" />
            <Form back={this.props.history.goBack} type="edit" data={props.Restaurant_User} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Restaurant_User: state.Restaurant_Users.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)