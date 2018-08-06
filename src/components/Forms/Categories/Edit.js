import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header';
import { isLogin } from '../../../utils'

class EditCategories extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }
    render() {
        return (
            <div>
                <Header name="Category" sub="Edit Category Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.props.Category} />
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