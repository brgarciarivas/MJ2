import React from 'react';

import Base from './Base';
import SplashPage from './SplashPage';
import Sections from './Sections';

export default class LandingPage extends Base {
    render() {
        return (
            <div className='LandingPage'>
            	<SplashPage/>

                <Sections/>
            </div>
        );
    }
}