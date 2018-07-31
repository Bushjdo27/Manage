import React, { Component } from 'react'
//import Dropzone from 'react-dropzone'
import { connect } from 'react-redux'

class CreateRestaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.data ? props.data.name : "",
            fbUrl: props.data ? props.data.facebook_url : "",
            ytUrl: props.data ? props.data.youtube_url : "",
            instaUrl: props.data ? props.data.instagram_url : "",
            role: props.data ? props.data.instagram_url : "",
            userId: props.data ? props.data.instagram_url : 0,
            address: props.data ? props.data.address.address : "",
            phone: props.data ? props.data.phone : "",
            photo: props.data ? props.data.instagram_url : null,
            icon: props.data ? props.data.instagram_url : null
        }
    }

    handleNameChange = () => {
        console.log("Name changing..")
    }
    handleFBChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                fbUrl: value
            }
        })

    }
    handleYTChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                ytUrl: value
            }
        })
    }
    handleInstaChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                instaUrl: value
            }
        })
    }
    handleRoleChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                role: value
            }
        })
    }
    handleUserIDChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                userId: value
            }
        })
    }
    handleAddressChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                address: value
            }
        })
    }
    handlePhoneChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                phone: value
            }
        })
    }
    handlePhotoChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                photo: value
            }
        })
    }
    handleIconChange = (e) => {
        const value = e.target.value;
        this.setState(() => {
            return {
                icon: value
            }
        })
    }

    handleSubmit = (e) => {
        console.log("on click submit")
    }

    render() {
        const { name, fbUrl, ytUrl, instaUrl, role, userId, address, phone, photo, icon } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" type="text" name="name" value={name} onChange={this.handleNameChange} placeholder="Enter name" />
                    </div>

                    <div className="form__group">
                        <label>Facebook Url : </label>
                        <input className="input" type="text" name="fb" value={fbUrl} onChange={this.handleFBChange} placeholder="Facbook Url" />
                    </div>

                    <div className="form__group">
                        <label>Youtube Url : </label>
                        <input className="input" type="text" name="yt" value={ytUrl} onChange={this.handleYTChange} placeholder="Youtube Url" />
                    </div>

                    <div className="form__group">
                        <label>Instagram Url : </label>
                        <input className="input" type="text" name="insta" value={instaUrl} onChange={this.handleInstaChange} placeholder="Instagram Url" />
                    </div>

                    <div className="form__group">
                        <label>Role : </label>
                        <input className="input" type="text" name="role" value={role} onChange={this.handleRoleChange} placeholder="User Role" />
                    </div>

                    <div className="form__group">
                        <label>User ID : </label>
                        <input className="input" type="number" name="user_id" value={userId} onChange={this.handleUserIDChange} placeholder="User ID" />
                    </div>

                    <div className="form__group">
                        <label>Address : </label>
                        <input className="input" type="text" name="address" value={address} onChange={this.handleAddressChange} placeholder="Address" />
                    </div>

                    <div className="form__group">
                        <label>phone : </label>
                        <input className="input" type="text" name="phone" value={phone} onChange={this.handlePhoneChange} placeholder="Phone" />
                    </div>

                    <div className="form__group">
                        <label>photo : </label>
                        <input className="input" type="file" name="photo" onChange={this.handlePhotoChange} />
                    </div>

                    <div className="form__group">
                        <label>Icon : </label>
                        <input className="input" type="file" name="icon" onChange={this.handleIconChange} />
                    </div>
                    <button type="submit">{this.props.data ? 'Edit Restaurant' : 'Create Restaurant'}</button>

                </form>



            </div>

        )
    }
}

export default connect()(CreateRestaurant);

/*

<div>
                    <div className="dropzone">
                        <Dropzone
                            accept=".jpeg,.png"
                            onDrop={(accepted, rejected) => {
                                this.setState({ accepted, rejected });
                            }}
                        >
                            {({ isDragActive, isDragReject }) => {
                                if (isDragActive) {
                                    return 'All files will be accepted';
                                }
                                if (isDragReject) {
                                    return 'Some files will be rejected';
                                }
                                return 'Dropping some files here...';
                            }}
                        </Dropzone>
                    </div>
                    <div className="dropzone-content">
                        <h2>Accepted files</h2>
                        {this.state.accepted.length > 0 && <ul className="upload-file-list">
                            {
                                this.state.accepted.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                            }
                        </ul>
                        }
                        <h2>Rejected files</h2>
                        {this.state.rejected.length > 0 && <ul className="upload-file-list">
                            {
                                this.state.rejected.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                            }
                        </ul>
                        }
                    </div>
                </div>
*/