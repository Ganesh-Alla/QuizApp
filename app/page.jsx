import BlueLinks from "@/components/BlueLinks"
import { getSession,getDeadline, getStartTime, getSubmit, getValue } from '@/app/api/route'
import StartPage from "@/components/StartPage";
import QuizApp from "@/components/QuizApp";
import PopLogOut from "@/components/PopLogOut";
import Register from "@/components/Register";
import LoginCode from "@/components/LoginCode";
import Submit from "@/components/Submit";
import Loading from "./loading";

const Home = async() => {

  const session =await  getSession();
  const deadline = await getDeadline();
  const value = await getValue();
  const isSubmit = await getSubmit();
 console.log("session:",session)
 console.log("value:",value)
 console.log("deadline:",deadline)
 console.log("timeleft:",Date.now()- deadline)

if(isSubmit){
return(
  <div className="w-full">
    <PopLogOut/>
    <Submit/></div>
)
}
  else if(session && !value && session !== "Logged"){
    return (
    <div className="w-full">
      <PopLogOut/>
      <StartPage/>
  </div>)
  }else if(session && value && session !== "Logged"){
    return (
    <div className="w-full">
    <PopLogOut/>
   <QuizApp />
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
