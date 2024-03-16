"use client"
import React, {  useEffect, useRef, useState } from 'react';
import { Layout,theme,notification} from 'antd';
import Count from './Count';
import dynamic from 'next/dynamic';
const QuestionCard = dynamic(() =>
    import('@/components/QuestionCard'), {
        ssr: false,
    });
import questions from '@/utils/questionsData';
import { setDeadline, setSubmit } from '@/app/api/route';
import { disconnectDB } from '@/utils/db';
import Loading from '@/app/loading';

const { Header, Content, Sider } = Layout;

const QuizApp = () => {
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
  const [loading, setLoading] = useState(false);
  const [deadline, setdeadline] = useState(null);
  const [loadings, setLoadings] = useState([]);
  const enterLoading = (index) => {
    setLoadings((prevLoadings) => {
      const newLoadings = [...prevLoadings];
      newLoadings[index] = true;
      return newLoadings;
    });

  };

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

      const fetchTime=async()=>{
        enterLoading(0)
        try {
          const response = await fetch('api/gettime',{
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        const data = await response.json();
        setTimeout(() => {
          setLoadings((prevLoadings) => {
            const newLoadings = [...prevLoadings];
            newLoadings[0] = false;
            return newLoadings;
          });
        }, 6000);
        if (response.ok) {
            console.log("data",data);
            setdeadline(data.deadline.toString())
             await setDeadline(data.deadline.toString());
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
      fetchTime();
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

const handleScoreQuiz = async() => {
  let finalScore = 0;
  questions.forEach((question) => {
      const storedAnswer = localStorage.getItem(`question_${question.id}`);
      if (storedAnswer === question.correctResponse) {
          finalScore += 1;
      }
  });
  setScore(finalScore);
  try {
    const response = await fetch('api/setresult',{
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
    await setSubmit("Submit");
} else {
    console.error(data.message);
    console.log('Enter Failed');
}
console.log('Message from server:', data.message);
} catch (error) {

  console.error('Error:', error);
}
};
if(loading){
  return <Loading/>
}

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
    {deadline &&  <Count deadline={deadline} setLoading={setLoading} handleScoreQuiz={handleScoreQuiz} />}
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
}

export default QuizApp