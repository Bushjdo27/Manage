import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create'
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils'
import { EDIT_NOTIFICATIONS } from '../../../actions/constantType'


class EditFoodOptions extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }

    getDataEdit = () => {
        const value = checkDataEdit(EDIT_NOTIFICATIONS);
        if (this.props.Notification) {
            localStorage.setItem(EDIT_NOTIFICATIONS, JSON.stringify(this.props.Notification))
            return this.props.Notification
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
                <Header name="Notification" sub="Edit Notification Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }

}


const mapStateToProps = (state, props) => {
    return {
        Notification: state.Notifications.find(item => item.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditFoodOptions)