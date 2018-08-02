import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListNotification } from '../actions/notificationActions';
import CreateForm from '../components/Forms/Notifications/Create'
import {pagination} from '../utils/index'

class NotificationPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.dispatch(getListNotification())
    }
    handleNext = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage + 1 }))
    }

    handlePrev = () => {
        //console.log()
        this.setState((prevState) => ({ currentPage: prevState.currentPage - 1 }))
    }
    handleSearch = (search) => {
        console.log(search)
        this.setState(() => ({ search }))
    }

    data = () => {
        const { search } = this.state;
        if (search.length > 0) {
            const data = this.props.Notifications.filter((item) => {
                return item.name.includes(search)
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Notifications , currentPage , 5)
        //return this.props.Notifications
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable next={this.handleNext} prev={this.handlePrev} type="Notification" titleTable={['subject', "message", "restaurant id" ,"updated"]} data={this.data()} />
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
        Notifications: state.Notifications
    }
}

export default connect(mapStateToProps)(NotificationPage)