"use client"
import React, { useState } from 'react'
import { Button,Space,Drawer } from 'antd';

const StartPage = () => {
  const [open, setOpen] = useState(false);

  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });
    setTimeout(() => {
      setLoadings((prevLoadings) => {
        const newLoadings = [...prevLoadings];
        newLoadings[index] = false;
        return newLoadings;
      });
    }, 6000);
  };

  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
    const handleQuiz = async()=>{
      enterLoading(0)
      try {
        const response = await fetch('api/gettime',{
          method: 'GET',
          headers: {
              'Content-Type': 'application/json',
          },
      });
      const data = await response.json();
      if (response.ok) {
          console.log('Deadline Set Successfully');
          window.location.reload()
      } else {
          error(data.message);
          console.log('Enter Failed');
      }
      console.log('Message from server:', data.message);
      } catch (error) {

        console.error('Error:', error);
      }

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
            <Button  type="primary" className='bg-[#0d47a1] text-white' loading={loadings[0]} onClick={handleQuiz}>
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
