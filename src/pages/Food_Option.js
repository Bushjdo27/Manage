import React, { Component } from 'react';
import { connect } from 'react-redux';
import AdminTable from '../components/AdminTable';
import AdminControl from '../components/AdminControl'
import Header from '../components/Header';
import SideNav from '../components/SideNav'
import { getFoodOption } from '../actions/foodOptionActions';
import CreateForm from '../components/Forms/Food_Options/Create'
import {pagination} from '../utils/index'

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
        this.props.dispatch(getFoodOption())
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
            const data = this.props.Food_Options.filter((item) => {
                return item.name.includes(search)
            });
            console.log(data)
            //this.setState(()=>({data})) Menu Item 1
            return data;
        }
        
        return pagination(this.props.Food_Options , currentPage , 5)
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
                                this.state.showCreate ? <CreateForm /> : <AdminTable next={this.handleNext} prev={this.handlePrev} type="Food_Option" titleTable={['name', "price", "Food ID", "updated"]} data={this.data()} />
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