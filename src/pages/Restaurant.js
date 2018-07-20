import React, { Component } from 'react';
import { connect } from 'react-redux';
import SimpleTable from '../components/SimpleTable'
import { getListRestaurant } from '../actions/resActions'
class RestaurantPage extends Component {
    componentDidMount() {
        console.log("Calling didMount")
        getListRestaurant().then(result => {
            console.log(result)
            this.props.dispatch(result)
        })
    }
    render() {
        return (
            <div>
                <SimpleTable data={this.props.Restaurants} />
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Restaurants: state.Restaurants
    }
}

export default connect(mapStateToProps)(RestaurantPage)