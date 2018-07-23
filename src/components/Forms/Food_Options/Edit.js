import React from 'react';
import { connect } from 'react-redux';
import Form from './Create'

const EditFoodOptions = (props) => {
    return (
        <div>
            <Form data={props.Food_Option} />
        </div>
    )
}


const mapStateToProps = (state, props) => {
    return {
        Food_Option: state.Food_Options.find(item => parseInt(item.id === props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)