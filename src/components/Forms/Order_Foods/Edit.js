import React from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'

const EditFoodOptions = (props) => {
    return (
        <div>
            <Header />
            <Form type="edit" data={props.Order_Food} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Order_Food: state.Order_Foods.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)