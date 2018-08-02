import React, { Component } from 'react';

class AdminControl extends Component {

    handleCreate = () => {
        this.props.showCreate()
    }
    goBack = () => {
        this.props.back();
    }
    render() {
        return (
            <div className="admin__control">
                <div className="admin__control__text">
                    {this.props.isShowBack ?
                        <span onClick={this.goBack}>Go Back</span>
                        :
                        <div>
                            <span onClick={this.handleCreate}>Create</span>
                        </div>

                    }
                </div>
                {!this.props.isShowBack &&
                    <div className="admin__control__search">
                        <input type="text" placeholder="Search for title" onChange={(e) => { this.props.query(e.target.value) }} />

                    </div>
                }
            </div>
        )
    }
}


export default AdminControl;