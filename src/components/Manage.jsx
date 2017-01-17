import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class Manage extends Base {
    render() {
        return (
            <div className='Manage'>
            	<h1>Business growth</h1>
            	<p>With years of experience in countless projects, we will guide you to take your business to the next level.

At MJ2 Global, we work with you to transform your projects, processes, strategies and ideas into assets

dedicated to growth your company. Our staff has the capabilities and experience to actually do it. We

are proud to help shape how leading companies structure and manage their business.</p>
				<FontAwesome
	                name='line-chart'
	                size={'lg'}
	                className='icon'
	            />
            </div>
            
        );
    }
}