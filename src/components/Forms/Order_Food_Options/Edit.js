import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'

const EditFoodOptions = (props) => {
    return (
        <div>
            <Form data={props.Order_Food_Option} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Order_Food_Option: state.Order_Foods_Options.find(item => item.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)