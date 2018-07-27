import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListRestaurantEmail } from '../actions/restaurantEmailActions';
import CreateForm from '../components/Forms/Restaurant_Email/Create'


class RestaurantEmailPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
        }
    }
    componentDidMount() {
        this.props.dispatch(getListRestaurantEmail())
    }

    renderCreateForm = () => {
        this.setState(() => ({ showCreate: true }))
    }
    handleBack = () => {
        this.setState(() => ({ showCreate: false }))
    }
    render() {
        return (
            <div>
                <Header />
                <div className="container">
                    <SideNav />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} />
                            {
                                this.state.showCreate ? <CreateForm /> : <AdminTable type="Restaurant_Email" titleTable={['email', "restaurant id", "updated"]} data={this.props.Restaurant_Email} />
                            }

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        Restaurant_Email: state.Restaurant_Email
    }
}

export default connect(mapStateToProps)(RestaurantEmailPage)