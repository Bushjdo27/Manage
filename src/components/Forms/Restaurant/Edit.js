import React, { Component } from 'react';
import { connect } from 'react-redux';
import Form from './Create';
import Header from '../../Header'

class EditRestaurant extends Component {
    render() {
        return (
            <div>
                <Header />
                <Form type="edit" data={this.props.Restaurant} back={this.props.history.goBack} />
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