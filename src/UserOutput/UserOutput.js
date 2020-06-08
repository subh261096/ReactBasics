import React from 'react';
import './UserOutput.css'

const UserOutput = (props) => {
    return (
        <div className="UserOutput">
            <p>UserName: {props.userName}</p>
            <p>Again random text</p>
        </div>
    );
}

export default UserOutput;
