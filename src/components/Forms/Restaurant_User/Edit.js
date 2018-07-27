import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
const EditFoodOptions = (props) => {
    return (
        <div>
            <Header />
            <Form type="edit" data={props.Restaurant_User} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Restaurant_User: state.Restaurant_Users.find(item => item.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)