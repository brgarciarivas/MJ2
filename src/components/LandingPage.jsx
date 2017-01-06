import React from 'react';

import Base from './Base';
import SplashPage from './SplashPage';
import Global from './Global';
import Qoute from './Qoute';
import Manage from './Manage';
import Growth from './Growth';
import StatBar from './StatBar';

export default class LandingPage extends Base {
    render() {
        return (
            <div className='LandingPage'>
            	<SplashPage/>
                <div className='sections'>
                	 <Global/>
                	 <Qoute/>
                	 <div className='team'/>
                	 <Manage/>
                	 <Growth/>
                	 <StatBar/>
                </div>
            </div>
        );
    }
}