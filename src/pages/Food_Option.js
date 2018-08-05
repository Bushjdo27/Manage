import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getFoodOption } from '../actions/foodOptionActions';
import CreateForm from '../components/Forms/Food_Options/Create'
import { pagination, isLogin } from '../utils/index'

class FoodOptionPage extends Component {

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
            this.props.dispatch(getFoodOption())
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
    hideCreateForm = ()=>{
        this.setState(() => ({ showCreate: false }))
    }

    data = () => {
        const { search, currentPage } = this.state;
        if (search.length > 0) {
            const data = this.props.Food_Options.filter((item) => {
                return item.name.toLowerCase().includes(search.toLowerCase())
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }

        return pagination(this.props.Food_Options, currentPage, 5)
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
                            <AdminControl showCreate={this.renderCreateForm} back={this.handleBack} isShowBack={this.state.showCreate} query={this.handleSearch} searchFor={"name"} />
                            {
                                this.state.showCreate ? <CreateForm hideCreate={this.hideCreateForm} /> : <AdminTable canNext={this.state.currentPage === Math.ceil(this.props.Food_Options.length / 5)} canPrev={this.state.currentPage === 1} next={this.handleNext} prev={this.handlePrev} type="Food_Option" titleTable={['name', "price", "Food ID", "updated"]} data={this.data()} />
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
        Food_Options: state.Food_Options
    }
}

export default connect(mapStateToProps)(FoodOptionPage)