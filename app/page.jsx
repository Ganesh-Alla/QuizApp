import BlueLinks from "@/components/BlueLinks"
import { decrypt } from "@/utils/Cipher"
import { getSession,getDeadline } from '@/app/api/route'
import StartPage from "@/components/StartPage";
import QuizApp from "@/components/QuizApp";
import PopLogOut from "@/components/PopLogOut";
import Register from "@/components/Register";
import LoginCode from "@/components/LoginCode";

const Home = async() => {

  const session =await  getSession();
  const time = await getDeadline();

console.log(time);
console.log(session);
  if(session && !time && session !== "Logged"){
    return (
    <div className="w-full">
      <PopLogOut/>
      <StartPage/>
  </div>)
  }else if(session && time && session !== "Logged"){
    return (
    <div className="w-full">
    <PopLogOut/>
    <QuizApp/>
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
