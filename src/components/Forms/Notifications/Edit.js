import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'

const EditFoodOptions = (props) => {
    return (
        <div>
            <Form data={props.Notification} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Notification: state.Notifications.find(item => item.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)