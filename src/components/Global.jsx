import React from 'react';
import FontAwesome from 'react-fontawesome';

import Base from './Base';

export default class Global extends Base {
    render() {
        return (
            <div className='Global '>
      
            		<h1>Who We Are</h1>
            		<p>Full-service innovation centered company, commit to achieve our cleints full potential. By expanding their business locally and internationally through 3 main business fundamental. Sales and Market Development, Capacity Building and Business Process Improvement and Management Implementation.</p>
            		 <FontAwesome
                        name='user-circle'
                        size={'4x'}
                        className='icon'
                    />
            </div>
        );
    }
}