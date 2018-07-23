import React, { Component } from 'react'
import Dropzone from 'react-dropzone'


class CreateRestaurant extends Component {

    constructor() {
        super();
        this.state = {
            name: "",
            accepted: [],
            rejected: []
        }
    }

    handleNameChange = () => {
        console.log("Name changing..")
    }

    handleSubmit = (e) => {
        console.log("on click submit")
    }

    render() {
        return (
            <div>
                <form className="form" onSubmit={this.handleSubmit}>
                    <div className="form__group">
                        <label>Name : </label>
                        <input className="input" type="text" name="name" onChange={this.handleNameChange} placeholder="Enter name" />
                    </div>

                </form>

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

            </div>

        )
    }
}

export default CreateRestaurant;