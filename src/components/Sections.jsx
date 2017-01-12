import React from 'react';

import Base from './Base';
import Global from './Global';
import Qoute from './Qoute';
import Manage from './Manage';
import Growth from './Growth';
import StatBar from './StatBar';

export default class Sections extends Base {
    render() {
        return (
            <div className='Sections'>
            	 <Global/>
            	 <Qoute/>
            	 <div className='team'/>
            	 <Manage/>
            	 <Growth/>
            	 <StatBar/>
            </div>
        );
    }
}