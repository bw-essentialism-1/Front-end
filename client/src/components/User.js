import React from 'react';

function User({ details }) {
    if(!details) {
        return <h3>Working to Fetch your User&apos;s details</h3>
    }
    return (
        <div className='user'>
            <span>{details.first_name} is Logged in!</span>
        </div>
    )
};

export default User;