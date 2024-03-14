import { decrypt } from '@/utils/Cipher';
import PageLayout from './PageLayout';
import { getDeadline, getSession } from '@/app/api/route';

const QuizApp = async() => {
    const deadline = await getDeadline();
      return (
    <PageLayout deadline={deadline}/>
      );
};
export default QuizApp;