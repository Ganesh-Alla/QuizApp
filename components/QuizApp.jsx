"use client"
import React, {  useCallback, useEffect, useRef, useState } from 'react';
import { Layout,theme,notification} from 'antd';
import Count from './Count';
import dynamic from 'next/dynamic';
const QuestionCard = dynamic(() =>
    import('@/components/QuestionCard'), {
        ssr: false,
    });
import { FirstYear } from '@/utils/FirstYear';
import { SecondYear } from '@/utils/SecondYear';
import { setDeadline, setSubmit } from '@/app/api/route';
import { disconnectDB } from '@/utils/db';
import Loading from '@/app/loading';
import Badge from './Badge';

const { Header, Content, Sider } = Layout;

const QuizApp = ({year}) => {

  const { token: { colorBgContainer, borderRadiusLG },} = theme.useToken();
let questions;
if(year == 1){
  questions= FirstYear;
}else{
  questions = SecondYear;
}

  const [index,setIndex] = useState(0);
  const [QuestionsArray, setQuestionsArray] = useState(null);
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [loading, setLoading] = useState(false);
  const [deadline, setdeadline] = useState(null);
  const [tabShiftCount, setTabShiftCount] = useState(0);
  const [selected, setSelected] = useState(1);

  const [selectedAnswerID, setSelectedAnswerID] = useState(() => {
    if (typeof localStorage !== 'undefined') {
      return localStorage.getItem(`question_1`) || null;
    }
    return null;
  });

  const getAnswersArray = () => {
    if (typeof localStorage !== 'undefined') {
      return JSON.parse(localStorage.getItem('answers')) || [];
    }
    return [];
  }
  const answers = getAnswersArray();


  useEffect(() => {
    function shuffleArray() {
      var array = [];
      for (var i = 0; i < questions.length; i++) {
        array.push(i);
      }
      for (var i = array.length - 1; i > 0; i--) {
        var j = Math.floor(Math.random() * (i + 1));
        var temp = array[i];
        array[i] = array[j];
        array[j] = temp;
      }
      typeof window !== "undefined" && localStorage.setItem(`questions`,array);
      return array;
    }

      if (typeof localStorage !== 'undefined') {
      const storedQuestionsArray = localStorage.getItem('questions');
      if (storedQuestionsArray) {
        setQuestionsArray(JSON.parse(storedQuestionsArray));
      } else {
        const shuffledArray = shuffleArray();
        localStorage.setItem('questions', JSON.stringify(shuffledArray));
        console.log("second")
      }
    }
  }, [questions.length]);


  useEffect(() => {
    if (QuestionsArray && QuestionsArray.length > 0) {
      setCurrentQuestion(QuestionsArray[0]);
      const setTime=async()=>{
        try {
          const response = await fetch('api/settime',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        if (response.ok) {
            console.log("data",data);
            setdeadline(data.deadline.toString())
            setDeadline(data.deadline.toString());
        } else {
            console.error(data.message);
            console.log('Enter Failed');
        }
        console.log('Message from server:', data.message);
        } catch (error) {
          console.error('Error:', error);
        }
        finally{
          disconnectDB();
        }
      }
      setTime();
    }
  }, [QuestionsArray]);

  console.log("answers",answers)
  console.log("Current",currentQuestion)

  const handleAnswerOptionClick = (selectedAnswerID) => {
    localStorage.setItem(`question_${questions[currentQuestion].id}`, selectedAnswerID);
    answers.push(index+1);
    console.log(index+1);
    localStorage.setItem("answers",JSON.stringify(answers));
    setSelectedAnswerID(selectedAnswerID);
};

const handleNextQuestion = () => {
  if (index < questions.length-1) {
    setIndex(index+1);
    setSelected(prevValue => prevValue + 1);
    const nextQuestion = QuestionsArray[index+1];
      setCurrentQuestion(nextQuestion);
      setSelectedAnswerID(localStorage.getItem(`question_${questions[nextQuestion].id}`) || null);
  }
};

const handlePrevQuestion = () => {
  if (index > 0) {
    setIndex(index-1);
    setSelected(prevValue => prevValue - 1);
    const prevQuestion = QuestionsArray[index-1];
      setCurrentQuestion(prevQuestion);
      setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
  }
};
const handleQuestion = (index) => {
  if (index >= 0 && index <=questions.length -1) {
    setIndex(index);
    setSelected(index+1);
    const prevQuestion = QuestionsArray[index];
    setCurrentQuestion(prevQuestion);
    setSelectedAnswerID(localStorage.getItem(`question_${questions[prevQuestion].id}`) || null);
  }
};

const handleScoreQuiz = useCallback(async () => {
  let finalScore = 0;
  questions.forEach((question) => {
    const storedAnswer = localStorage.getItem(`question_${question.id}`);
    if (storedAnswer === question.correctResponse) {
      finalScore += 1;
    }
  });
  try {
    const response = await fetch('api/setresult', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        finalScore
      }),
    });
    const data = await response.json();
    if (response.ok) {
      localStorage.clear()
      await setSubmit("Submit");
    } else {
      console.error(data.message);
      console.log('Enter Failed');
    }
    console.log('Message from server:', data.message);
  } catch (error) {
    console.error('Error:', error);
  }
}, [questions]);

useEffect(() => {
  const handleVisibilityChange = () => {
    if (document.visibilityState === 'hidden' && tabShiftCount < 3) {
      if (tabShiftCount === 2) {
        alert("Exam Finished due to tab shifts exceeding the limit");
        handleScoreQuiz();
      } else {
        setTabShiftCount(prevCount => {
          alert(`Don't Close the Tab(${prevCount + 1}/3)`);
          console.log(prevCount + 1);
          return prevCount + 1;
        });
      }
    }
  };
  document.addEventListener('visibilitychange', handleVisibilityChange);
  return () => {
    document.removeEventListener('visibilitychange', handleVisibilityChange);
  };
}, [tabShiftCount, handleScoreQuiz]);


if(loading || !questions[currentQuestion] || !deadline){
  return <Loading/>
}else{
  return (
    <Layout>
      <div className='fixed w-full top-14 z-50'>
    <Header
      style={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      <div className='flex justify-between text-white w-full'>
      <h1 className='font-bold'>QUIZ TIME</h1>
      <div className='flex items-center'>
    {deadline &&  <Count deadline={deadline} setLoading={setLoading} handleScoreQuiz={handleScoreQuiz} />}
        </div>
  </div>
    </Header>
    </div>
    <Layout
    style={{
      marginTop:56
    }}
    >
      <Sider
        width={300}
        style={{
          background: colorBgContainer,
        }}
      >
        <div className='flex flex-wrap gap-1 h-[82vh] overflow-y-auto'>
         {QuestionsArray && answers && QuestionsArray.map((num, index) => (
       <Badge key={index} num={index+1} selected={selected} answers={answers} handleQuestion={handleQuestion}/>
      ))}</div>
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
                {QuestionsArray && questions[currentQuestion] && <QuestionCard
                    quizLength={questions.length}
                    question={questions[currentQuestion]}
                    index={index}
                    selectedAnswerID={selectedAnswerID}
                    handleAnswerOptionClick={handleAnswerOptionClick}
                    handleNextQuestion={handleNextQuestion}
                    handlePrevQuestion={handlePrevQuestion}
                    handleScoreQuiz={handleScoreQuiz}
                    />
                }
        </Content>
      </Layout>
    </Layout>
  </Layout>
  )
}}

export default QuizApp