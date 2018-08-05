import React from 'react';


const SpinnerDelete = () => {
    return (
        <div style={{ justifyContent: 'center', alignItems: 'center', display: 'flex', height: '32px' }}>
            <div className="lds-facebook">
                <div></div>
                <div></div>
                <div></div>
            </div>
        </div>
    )
}

export default SpinnerDelete