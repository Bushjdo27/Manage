import React, { Component } from 'react'
import Dropzone from 'react-dropzone'


class CreateRestaurant extends Component {

    render() {
        return (
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
        )
    }
}

export default CreateRestaurant;