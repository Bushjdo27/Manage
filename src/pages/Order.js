import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListOrder } from '../actions/orderActions';
import CreateForm from '../components/Forms/Restaurant/Create'

// lam viec voi action

class OrderPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
        }
    }
    componentDidMount() {
        this.props.dispatch(getListOrder())
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable type="Order" titleTable={['name', "type", "updated", "photo"]} data={this.props.Categories} />
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
        Categories: state.Categories
    }
}

export default connect(mapStateToProps)(OrderPage)