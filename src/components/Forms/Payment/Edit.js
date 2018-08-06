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
            <Header name="Payment" sub="Edit Payment Page" />
            <Form back={this.props.history.goBack} type="edit" data={props.Payment} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Payment: state.Payments.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)