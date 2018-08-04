import React from 'react';

const Spinner = () => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
            <div className="lds-roller">
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>

    )
}

export default Spinner;