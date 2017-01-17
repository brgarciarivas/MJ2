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
                <div className='table'/>
            	<Qoute/>
            	<div className='team'/>
            	<Manage/>
                <Growth/>
                <div className='people'>
                    <h1>Our People</h1>
                    <p>We put people at the core of everything we do. Our people are the key to our success, and our
achievements are a result of their engagement and commitment. This enables us to continue to attract
and retain the most talented people and to deliver meaningful solutions to our customers.</p>
                </div>
            	{ 
            	   //<StatBar/>
                }
                
            </div>
        );
    }
}