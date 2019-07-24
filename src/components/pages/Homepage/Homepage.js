import React from 'react';
import './Homepage.scss';
import Directory from '../Directory/Directory';

const Homepage = () => {
    return (
        <div className='homepage'>
            <h1 className='logo'><i className="fa fa-circle"></i> Visible Dot</h1>
               <Directory />         
        </div>
    )
}

export default Homepage

