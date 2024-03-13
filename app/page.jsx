import BlueLinks from "@/components/BlueLinks"
import PageRoute from "@/components/PageRoute"
import { decrypt } from "@/utils/Decrypt"
import { getSession } from '@/app/api/route'
import StartPage from "@/components/StartPage";
import QuizApp from "@/components/QuizApp";
import PopLogOut from "@/components/PopLogOut";

const Home = async() => {

  const session =await  getSession();

  if(decrypt(session) === "Registered"){
    return (
    <div className="w-full">
      <PopLogOut/>
      <StartPage />
  </div>)
  }else if(session && decrypt(session) !== "Logged"){
    return (
    <div className="w-full">
    <PopLogOut/>
    <QuizApp/>
  </div>)
  }

  return (
    <div className="w-full">
      <BlueLinks/>
      <PageRoute />
    </div>
  )
}

export default Home
