import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getListPaymentInfo } from '../actions/paymentActions';
import CreateForm from '../components/Forms/Payment/Create'
import { pagination } from '../utils/index'

class PaymentPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            showCreate: false,
            search: "",
            currentPage: 1,
        }
    }
    componentDidMount() {
        this.props.dispatch(getListPaymentInfo())
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
            const data = this.props.Payments.filter((item) => {
                return item.generatable.name.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        return pagination(this.props.Payments, currentPage, 5)
        //return this.props.Payments
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
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"restaurant"} />
                            {
                                this.state.showCreate ? <CreateForm /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Payments.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Payment" titleTable={['Restaurant', "type", "card name", "updated"]} data={this.data()} />
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
        Payments: state.Payments
    }
}

export default connect(mapStateToProps)(PaymentPage)