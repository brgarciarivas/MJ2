import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class Growth extends Base {
    render() {
        return (
            <div className='Growth'>
            	<h1>Management Consulting</h1>
            	<p>We help organizations improve planning, performance, operations and execution through the
					analysis of organizational problems.We have developed a reputation of confidence and trust among our clients. 
					Working with all levels of the organization — from executives striving to meet stakeholder expectations to
					business line management focused on implementing process change that directly impacts an
					organization’s success.
				</p>
				<FontAwesome
                    name='handshake-o'
                    size={'4x'}
                    className='icon'
                />
            </div>
        );
    }
}