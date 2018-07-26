import React, { Component } from 'react';
import { connect } from 'react-redux';
import CreateForm from './Create';
import Header from '../../Header'

class EditRestaurant extends Component {
    render() {
        console.log(this.props.Restaurant)
        return (
            <div>
                <Header />
                <CreateForm res={this.props.Restaurant} />
            </div>
        )
    }
}

// const EditRestaurant = (props) => {
//     return (
//         <div>
//             <p>{props.match.params.id}</p>
//         </div>
//     )
// }

const mapStateToProps = (state, props) => {
    // console.log(props.match.params.id)
    // console.log(state.Restaurants)
    // const data = state.Restaurants.find(res => res.id === parseInt(props.match.params.id))
    // console.log(data)
    return {
        Restaurant: state.Restaurants.find(res => res.id === parseInt(props.match.params.id))
    }
}

export default connect(mapStateToProps)(EditRestaurant);