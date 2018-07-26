import React, { Component } from 'react'
//import Dropzone from 'react-dropzone'


class CreateRestaurant extends Component {

    constructor() {
        super();
        this.state = {


        }
        /*
        name: this.props.res ? res.name : "",
            fbUrl: this.props.res ? res.facebook_url : "",
            ytUrl: this.props.res ? res.youtube_url : "",
            instaUrl: this.props.res ? res.instagram_url : "",
            role: this.props.res ? res.instagram_url : "",
            userId: this.props.res ? res.instagram_url: 0,
            address: this.props.res ?res.instagram_url : "",
            phone: this.props.res ? res.instagram_url : "",
            photo:this.props.res ? res.instagram_url : null,
            icon: this.props.res ? res.instagram_url : null
        
        */
    }

    handleNameChange = () => {
        console.log("Name changing..")
    }
    handleFBChange = (e) => {
        const value = e.target.value;

    }
    handleYTChange = (e) => {
        const value = e.target.value;
    }
    handleInstaChange = (e) => {
        const value = e.target.value;
    }
    handleRoleChange = (e) => {
        const value = e.target.value;
    }
    handleUserIDChange = (e) => {
        const value = e.target.value;
    }
    handleAddressChange = (e) => {
        const value = e.target.value;
    }
    handlePhoneChange = (e) => {
        const value = e.target.value;
    }
    handlePhotoChange = (e) => {
        const value = e.target.value;
    }
    handleIconChange = (e) => {
        const value = e.target.value;
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
                        <input className="input" type="file" name="photo" value={photo} onChange={this.handlePhotoChange} />
                    </div>

                    <div className="form__group">
                        <label>Icon : </label>
                        <input className="input" type="file" name="icon" value={icon} onChange={this.handleIconChange} />
                    </div>

                </form>



            </div>

        )
    }
}

export default CreateRestaurant;

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