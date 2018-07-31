import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
const EditOrder = (props) => {
    return (
        <div>
            <Header />
            <Form type="edit" data={props.Order} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Order: state.Orders.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditOrder)