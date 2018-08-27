import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'
import { isLogin, checkDataEdit } from '../../../utils'
import { EDIT_RESTAURANTS } from '../../../actions/constantType'
class EditRestaurant extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }
    getDataEdit = () => {
        const value = checkDataEdit(EDIT_RESTAURANTS);
        if (this.props.Restaurant) {
            localStorage.setItem(EDIT_RESTAURANTS, JSON.stringify(this.props.Restaurant))
            return this.props.Restaurant
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
                <Header name="Restaurant" sub="Edit Restaurant Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.getDataEdit()} navigate={this.props.history.push} />
            </div>
        )
    }
}

const mapStateToProps = (state, props) => {
    return {
        Restaurant: state.Restaurants.find(res => res.id === parseInt(props.match.params.id, 10))
    }
}

export default connect(mapStateToProps)(EditRestaurant);