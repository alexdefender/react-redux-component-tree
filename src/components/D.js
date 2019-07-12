import React from 'react';
import E from './E';
import J from './J';

const D = () => {
    console.log('D');
    return (
        <div className='row-3'>
            <div className='btn-d'>
                <button>D</button>
            </div>
            <E />
            <J />
        </div>
    );
};

export default D;
