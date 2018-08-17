import React, { Component } from 'react'
//import Dropzone from 'react-dropzone'
import { connect } from 'react-redux';
import { createRestaurant, updateRestaurant } from '../../../actions/resActions'
import { checkDataRequest, ManageStorage } from '../../../utils';
import { RESTAURANTS, UPDATE, CREATE } from '../../../actions/constantType'
import Spinner from '../../Spinner';

class CreateRestaurant extends Component {

    constructor(props) {
        super(props);
        this.state = {
            name: props.data ? props.data.name : "",
            fbUrl: props.data ? props.data.facebook_url : "",
            ytUrl: props.data ? props.data.youtube_url : "",
            instaUrl: props.data ? props.data.instagram_url : "",
            address: props.data ? props.data.address.address : "",
            phone: props.data ? props.data.phone : "",
            error: false,
            clickSumit: false,
        }
    }

    handleNameChange = (e) => {
        console.log("Name changing..")
        const value = e.target.value;
        this.setState(() => {
            return {
                name: value
            }
        })
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
        const type = typeof e.target.value;
        console.log(type)
        const value = e.target.value;
        this.setState(() => {
            return {
                icon: value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault();
        const type = typeof e.target.elements.photo.files[0];
        const { name, fbUrl, ytUrl, instaUrl, address, phone } = this.state;
        console.log(type !== null)
        console.log(type)
        this.setState(() => ({ clickSumit: true, error: false }))
        if (this.props.data) {
            const data = {
                name,
                fbUrl,
                ytUrl,
                instaUrl,
                address,
                phone,
                photo: e.target.elements.photo.files[0],
                icon: e.target.elements.icon.files[0],
                address_id: this.props.data.address.id,
                photo_id: this.props.data.bg_photo.id,
                icon_id: this.props.data.icon.id
            }
            if (!checkDataRequest(data)) {
                console.log(data)
                this.props.dispatch(updateRestaurant(this.props.data.id, data)).then((res) => {
                    ManageStorage(RESTAURANTS, UPDATE, res)
                    this.props.back()
                })
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }

        } else {
            //this.props.dispatch(createRestaurant({ ...this.state, photo: e.target.elements.photo.files[0], icon: e.target.elements.icon.files[0] })).then(() => { this.props.hideCreate() })
            console.log("Creating")
            const data = {
                name,
                fbUrl,
                ytUrl,
                instaUrl,
                address,
                phone,
                photo: e.target.elements.photo.files[0],
                icon: e.target.elements.icon.files[0]
            }
            if (!checkDataRequest(data)) {
                console.log("requesting")
                this.props.dispatch(createRestaurant(data)).then((res) => {
                    ManageStorage(RESTAURANTS, CREATE, res)
                    this.props.hideCreate()
                })
                //return
            } else {
                this.setState(() => ({ clickSumit: false, error: true }))
            }
        }
    }

    render() {
        const { name, fbUrl, ytUrl, instaUrl, address, phone, clickSumit, error } = this.state;
        return (
            <div className="container-form">
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Name <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="name" value={name} onChange={this.handleNameChange} placeholder="Enter name" />
                    </div>

                    <div className="form__group">
                        <label>Facebook Url <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="fb" value={fbUrl} onChange={this.handleFBChange} placeholder="Facbook Url" />
                    </div>

                    <div className="form__group">
                        <label>Youtube Url <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="yt" value={ytUrl} onChange={this.handleYTChange} placeholder="Youtube Url" />
                    </div>

                    <div className="form__group">
                        <label>Instagram Url <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="insta" value={instaUrl} onChange={this.handleInstaChange} placeholder="Instagram Url" />
                    </div>

                    <div className="form__group">
                        <label>Address <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="address" value={address} onChange={this.handleAddressChange} placeholder="Address" />
                    </div>

                    <div className="form__group">
                        <label>phone <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="text" name="phone" value={phone} onChange={this.handlePhoneChange} placeholder="Phone" />
                    </div>

                    <div className="form__group">
                        <label>photo <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="file" name="photo" onChange={this.handlePhotoChange} />
                    </div>

                    <div className="form__group">
                        <label>Icon <span style={{ color: 'red' }}>* :</span> </label>
                        <input className="input" type="file" name="icon" onChange={this.handleIconChange} />
                    </div>
                    {error && <p className="error-label">You must enter all field have asterisk</p>}

                    {
                        clickSumit ? <Spinner /> : <button type="submit">{this.props.data ? 'Edit Restaurant' : 'Create Restaurant'}</button>
                    }

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