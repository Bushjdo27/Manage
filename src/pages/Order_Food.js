import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getOrderFood } from '../actions/orderFoodAction';
import CreateForm from '../components/Forms/Order_Foods/Create'


class OrderFoodPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
        }
    }
    componentDidMount() {
        this.props.dispatch(getOrderFood())
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable type="Order_Food" titleTable={["Food ID", "amount", "price", "create"]} data={this.props.Order_Foods} />
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
        Order_Foods: state.Order_Foods
    }
}

export default connect(mapStateToProps)(OrderFoodPage)