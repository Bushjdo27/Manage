import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'

const EditCategories = (props) => {
    return (
        <div>
            <Form data={props.Category} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Category: state.Categories.find(item => parseInt(item.id === props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditCategories)