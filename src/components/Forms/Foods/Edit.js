import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils';
import { EDIT_FOODS } from '../../../actions/constantType'


class EditFoodOptions extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }

    getDataEdit = () => {
        const value = checkDataEdit(EDIT_FOODS);
        if (this.props.Food) {
            localStorage.setItem(EDIT_FOODS, JSON.stringify(this.props.Food))
            return this.props.Food
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
                <Header name="Food" sub="Edit Food Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        Food: state.Foods.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)