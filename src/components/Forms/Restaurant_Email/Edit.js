import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils'
import { EDIT_RESTAURANTS_EMAILS } from '../../../actions/constantType'

class EditFoodOptions extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }

    getDataEdit = () => {
        const value = checkDataEdit(EDIT_RESTAURANTS_EMAILS);
        if (this.props.Restaurant_Email) {
            localStorage.setItem(EDIT_RESTAURANTS_EMAILS, JSON.stringify(this.props.Restaurant_Email))
            return this.props.Restaurant_Email
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
                <Header name="Restaurant Email" sub="Edit Restaurant Email Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        Restaurant_Email: state.Restaurant_Email.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)