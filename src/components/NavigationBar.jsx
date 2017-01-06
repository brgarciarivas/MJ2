import React from 'react';

import Base from './Base';

export default class NavigationBar extends Base {
    render() {
        return (
            <div className='NavigationBar row'>
                <div className='logo'/>
                <div className='row section'>
                	<p>Home</p>
                	<p>Contact Us</p>
                </div>
            </div>
        );
    }
}