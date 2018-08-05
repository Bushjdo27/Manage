import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListUser } from '../actions/userActions';
import CreateForm from '../components/Forms/User/Create'
import { pagination, isLogin } from '../utils/index'

class UserPage extends Component {

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
            this.props.dispatch(getListUser())
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

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Users.filter((item) => {
                return item.email.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Users, currentPage, 5)
        //return this.props.Users
    }

    hideCreateForm = ()=>{
        this.setState(() => ({ showCreate: false }))
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
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"email"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Users.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="User" titleTable={['email', "password change", "updated"]} data={this.data()} />
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
        Users: state.Users
    }
}

export default connect(mapStateToProps)(UserPage)