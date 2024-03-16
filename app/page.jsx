import BlueLinks from "@/components/BlueLinks"
import { getSession,getDeadline, getStartTime } from '@/app/api/route'
import StartPage from "@/components/StartPage";
import QuizApp from "@/components/QuizApp";
import PopLogOut from "@/components/PopLogOut";
import Register from "@/components/Register";
import LoginCode from "@/components/LoginCode";

const Home = async() => {

  const session =await  getSession();
  const deadline = await getDeadline();
 console.log("session:",session)
 console.log("deadline:",deadline)



  if(session && !deadline && session !== "Logged"){
    return (
    <div className="w-full">
      <PopLogOut/>
      <StartPage/>
  </div>)
  }else if(session && deadline && session !== "Logged"){
    return (
    <div className="w-full">
    <PopLogOut/>
    <QuizApp deadline={deadline}/>
  </div>)
  }

  return (
    <div className="w-full">
      <BlueLinks/>
{session==="Logged" && <Register/>}
{!session && <LoginCode/>}
    </div>
  )
}

export default Home
