import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils'
import { EDIT_FOOD_OPTIONS } from '../../../actions/constantType'

class EditFoodOptions extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }
    getDataEdit = () => {
        const value = checkDataEdit(EDIT_FOOD_OPTIONS);
        if (this.props.Food_Option) {
            localStorage.setItem(EDIT_FOOD_OPTIONS, JSON.stringify(this.props.Food_Option))
            return this.props.Food_Option
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
        return (
            <div>
                <Header name="Food Option" sub="Edit Food Option Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        Food_Option: state.Food_Options.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)