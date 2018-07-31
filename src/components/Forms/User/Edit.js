import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
const EditUser = (props) => {
    return (
        <div>
            <Header />
            <Form type="edit" data={props.User} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        User: state.Users.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditUser)