import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
const EditFoodOptions = (props) => {
    return (
        <div>
            <Header />
            <Form type="edit" data={props.Payment} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Payment: state.Payments.find(item => item.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)