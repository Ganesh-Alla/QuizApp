"use client"
import React, { useState } from 'react'
import { Button,Space,Drawer } from 'antd';
import {  setValue } from '@/app/api/route';
import { disconnectDB } from '@/utils/db';

const StartPage = () => {
  const [open, setOpen] = useState(false);

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
    const handleClick = async()=>{
      enterLoading(0)
      // try {
      //   const response = await fetch('api/settime',{
      //     method: 'GET',
      //     headers: {
      //         'Content-Type': 'application/json',
      //     },
      // });
      // const data = await response.json();
      await setValue("value");
      setTimeout(() => {
        setLoadings((prevLoadings) => {
          const newLoadings = [...prevLoadings];
          newLoadings[0] = false;
          return newLoadings;
        });
      }, 6000);
      // if (response.ok) {
      //     console.log("data",data);
      // } else {
      //     console.error(data.message);
      //     console.log('Enter Failed');
      // }
      // console.log('Message from server:', data.message);
      // } catch (error) {

      //   console.error('Error:', error);
      // }
    };

  return (
    <div className='h-full'>
    <div className='h-full flex justify-center items-center'>
    <button type="button" onClick={showDrawer} className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Start The Exam</button>
    </div>
        <>
        <Drawer
        title="Instructions"
        placement="bottom"
        width={500}
        onClose={onClose}
        open={open}
        extra={
          <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button  type="primary" className='bg-[#0d47a1] text-white' loading={loadings[0]} onClick={handleClick}>
              Agree and Continue
            </Button>
          </Space>
        }
      >
        <p>Some contents...</p>
      </Drawer>
       </>
     </div>
  )
}

export default StartPage
