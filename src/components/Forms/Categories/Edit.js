import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'

class EditCategories extends Component {
    render() {
        return (
            <div>
                <Header />
                <Form type="edit" data={this.props.Category} />
            </div>
        )
    }
}


const mapStateToProps = (state, props) => {
    return {
        Category: state.Categories.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditCategories)