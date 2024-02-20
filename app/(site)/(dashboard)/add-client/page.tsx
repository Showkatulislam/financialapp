import React from 'react';
import { AddClient } from './add-client';

const page = () => {
    return (
        <div className='h-full flex justify-center items-center'>
           <div className='max-w-5xl'>
                <AddClient/>
           </div>
        </div>
    );
};

export default page;