import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListNotification } from '../actions/notificationActions';
import CreateForm from '../components/Forms/Notifications/Create'
import { pagination, isLogin } from '../utils/index'

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

        if (isLogin()) {
            this.props.dispatch(getListNotification())
        } else {
            this.props.history.push('/login')
        }
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
    hideCreateForm = () => {
        this.setState(() => ({ showCreate: false }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Notifications.filter((item) => {
                return item.message.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Notifications, currentPage, 5)
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
                <Header name="Notification" />
                <div className="container">
                    <SideNav redirect={() => { this.props.history.push('/login') }} />
                    <div className="content">
                        <div className="admin">
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"message"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage >= Math.ceil(this.props.Notifications.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Notification" titleTable={['subject', "message", "restaurant id", "updated"]} data={this.data()} />
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