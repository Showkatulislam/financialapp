import Image from 'next/image';
import React from 'react';
import logo from '@/public/logo.svg'
import { initailUser } from '@/lib/intial-user';
const page = async() => {    
    const Iam =await initailUser();
    return (
        <div className='h-full flex justify-center items-center'>
            <div className='flex flex-col items-center'>
            <Image src={logo} alt='logo'/>
            <h1 className='mt-5 lg:text-7xl md:text-3xl font-bold'>Welcome Finance Go</h1>
            </div>
        </div>
    );
};

export default page;