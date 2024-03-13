import React from 'react'
import LoginCode from './LoginCode'
import { getSession } from '@/app/api/route'
import Register from './Register'
import { decrypt } from '@/utils/Decrypt'

const PageRoute = async() => {
    const session =await  getSession();
    if(!session) return <LoginCode/>

    return (
         <div className='h-full '>
        <Register/>
        </div>);
}

export default PageRoute