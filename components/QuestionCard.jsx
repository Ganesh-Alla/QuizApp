"use client"
import React from 'react';
import { Radio, Space } from 'antd'

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


    return (
        <div className="flex justify-center">
            <div className='w-full max-w-3xl p-4 bg-white border border-gray-200 rounded-md shadow sm:p-8 dark:bg-gray-800 dark:border-gray-700'>
                <div className='flex items-center justify-between mb-2'>
                    <h2 className='text-xl font-bold leading-none text-gray-900 dark:text-white'>
                    Question {index+1}
                     {/* {question.id} */}
                     of {quizLength}
                    </h2>
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

                <div className='flex justify-center pt-4'>
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
                            <button
                            onClick={handleScoreQuiz}
                            type='button'
                            className='text-white bg-sky-700 hover:bg-sky-800 font-medium rounded-full text-sm px-5 py-2.5 mb-2 dark:bg-sky-600 dark:hover:bg-sky-700 focus:outline-none'
                            >
                            Submit
                            </button>

                </div>
            </div>
        </div>
    );
};

export default QuestionCard;
