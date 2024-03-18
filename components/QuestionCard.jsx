"use client"
import React from 'react';
import { Radio, Space } from 'antd'
import { FloatButton,Modal } from 'antd';
import {  LogoutOutlined,ExclamationCircleOutlined } from '@ant-design/icons'

const QuestionCard = ({
    quizLength,
    question,
    index,
    selectedAnswerID,
    handleAnswerOptionClick,
    handleNextQuestion,
    handlePrevQuestion,
    handleScoreQuiz
}) => {

  const [modal, contextHolder] = Modal.useModal();
  const confirm = () => {
    modal.confirm({
      title: 'Confirm',
      icon: <ExclamationCircleOutlined />,
      content: 'Are You Sure Want to Submit??',
      okText: 'Confirm',
      cancelText: 'Cancel',
      async onOk(){
        localStorage.clear();
        handleScoreQuiz();
      },
      okButtonProps:{
        type:"default",
        danger:true
      }
    });}



    return (
      <div className="flex justify-center h-full select-none">
            <div className='relative w-full  p-4 bg-white border border-gray-200 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-bold leading-none text-gray-900'>
                    Question {index+1}
                     of {quizLength}
                    </h2>
          {contextHolder}
                    <button type="button" onClick={confirm} className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Submit</button>
                </div>
                <div className="flow-root">
                    <hr className=" border-gray-200 sm:mx-auto dark:border-gray-300" />
                    <div className='px-4'>
                        <p className="my-6 font-thin text-lg text-black">
                          {question.questionText}
                          </p>
                        <hr className="mb-2 border-gray-200 sm:mx-auto dark:border-gray-300 lg:mb-2" />
                        <Radio.Group onChange={(e) => handleAnswerOptionClick(e.target.value)} value={selectedAnswerID}>
  <Space direction="vertical">
    {question.answerOptions.map((answerOption) => (
      <Radio
        key={answerOption.answerID}
        value={answerOption.answerID}
        className={
          selectedAnswerID === answerOption.answerID
            ? 'ant-radio-checked'
            : ''
        }
      >
        {answerOption.answerText}
      </Radio>
    ))}
  </Space>
</Radio.Group>
                    </div>
                </div>
                <div className='absolute bottom-0 right-0 flex justify-end items-end p-4'>
                     { index>0 &&<button
                            onClick={handlePrevQuestion}
                            type='button'
                            className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mr-6 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                            Prev
                            </button>}
                           { index < quizLength-1 && <button
                            onClick={handleNextQuestion}
                            type='button'
                            className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                            Next
                            </button>}
                            {/* <button
                            onClick={handleScoreQuiz}
                            type='button'
                            className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                            Submit
                            </button> */}
                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
