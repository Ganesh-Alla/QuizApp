"use client"
import React, {  useEffect, useRef, useState } from 'react';
import { Layout,theme} from 'antd';
import Count from './Count';
import dynamic from 'next/dynamic';
const QuestionCard = dynamic(() =>
    import('@/components/QuestionCard'), {
        ssr: false,
    });
import questions from '@/utils/questionsData';

const { Header, Content, Sider } = Layout;


const QuizApp = ({deadline}) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedAnswerID, setSelectedAnswerID] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(`question_1`) || null;
    }
    return null;
  });

  const [score, setScore] = useState(0);

  const [index,setIndex] = useState(0);
  const [QuestionsArray, setQuestionsArray] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);

  function shuffleArray(array) {
    for (var i = array.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      var temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    typeof window !== "undefined" && localStorage.setItem(`questions`,array);
    return array;
  }

  const generateNumbersArray =()=>{
 var numbersArray = [];
  for (var i = 0; i < questions.length; i++) {
    numbersArray.push(i);
  }
  setQuestionsArray(numbersArray);
  return numbersArray;

  }


  useEffect(() => {

      if (typeof localStorage !== 'undefined') {
      const storedQuestionsArray = localStorage.getItem('questions');
      if (storedQuestionsArray) {
        setQuestionsArray(JSON.parse(storedQuestionsArray));
      } else {
        const shuffledArray = shuffleArray(generateNumbersArray());
        localStorage.setItem('questions', JSON.stringify(shuffledArray));
        console.log("second")
      }
    }
  }, []);


  useEffect(() => {
    if (QuestionsArray && QuestionsArray.length > 0) {
      setCurrentQuestion(QuestionsArray[0]);
    }
  }, [QuestionsArray]);
  console.log("Questions",QuestionsArray)
  console.log("Current",currentQuestion)


  const handleAnswerOptionClick = (selectedAnswerID) => {
    localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswerID);
    setSelectedAnswerID(selectedAnswerID);
};

const handleNextQuestion = () => {
  if (index < questions.length-1) {
    setIndex(index+1);
    const nextQuestion = QuestionsArray[index+1];
      setCurrentQuestion(nextQuestion);
      setSelectedAnswerID(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
  }
};

const handlePrevQuestion = () => {
  if (index > 0) {
    setIndex(index-1);
    const prevQuestion = QuestionsArray[index-1];
      setCurrentQuestion(prevQuestion);
      setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
  }
};

const handleScoreQuiz = () => {
  let finalScore = 0;
  questions.forEach((question) => {
      const storedAnswer = localStorage.getItem(`question_${question.id}`);
      if (storedAnswer === question.correctResponse) {
          finalScore += 1;
      }
  });
  setScore(finalScore);
};



  return (
    <Layout>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='flex justify-between text-white w-full'>
      <div >QUIZ TIME</div>
      <div className='flex items-center'>
      <Count time={deadline}  />
        </div>
  </div>
    </Header>
    <Layout>
      <Sider
        width={200}
        style={{
          background: colorBgContainer,
        }}
      >
        Score:{score}
      </Sider>
      <Layout
        style={{
          padding: '0 24px 24px',
        }}
      >
        <Content
          style={{
            padding: 24,
            margin: 0,
            minHeight: 280,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
                {  <QuestionCard
                    quizLength={questions.length}
                    question={questions[currentQuestion]}
                    index={index}
                    selectedAnswerID={selectedAnswerID}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleScoreQuiz={handleScoreQuiz}
                    />}
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}

export default QuizApp