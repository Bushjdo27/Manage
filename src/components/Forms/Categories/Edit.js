import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header';
import { isLogin, checkDataEdit } from '../../../utils';
import { EDIT_CATEGORIES } from '../../../actions/constantType'

class EditCategories extends Component {



    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }

    }

    getDataEdit = () => {
        const value = checkDataEdit(EDIT_CATEGORIES);
        if (this.props.Category) {
            localStorage.setItem(EDIT_CATEGORIES, JSON.stringify(this.props.Category))
            return this.props.Category
        } else if (value) {
            if (value.id === parseInt(this.props.match.params.id, 10)) {
                return value
            }
            return null;
        } else {
            //this.props.history.push("/caterogy")
            return null
        }
    }
    render() {
        //console.log(this.state.category)
        const data = this.getDataEdit()
        return (
            <div>
                <Header name="Category" sub="Edit Category Page" />
                <Form back={this.props.history.goBack} type="edit" data={data} navigate={this.props.history.push} />
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