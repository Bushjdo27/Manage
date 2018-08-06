import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'
import { isLogin } from '../../../utils'
class EditRestaurant extends Component {

    componentDidMount() {
        if (!isLogin) {
            this.props.history.push("/login")
        }
    }
    render() {
        return (
            <div>
                <Header name="Restaurant" sub="Edit Restaurant Page" />
                <Form back={this.props.history.goBack} type="edit" data={this.props.Restaurant} back={this.props.history.goBack} />
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