import { decrypt } from '@/utils/Decrypt';
import PageLayout from './PageLayout';
import { getSession } from '@/app/api/route';

const QuizApp = async() => {
    const session = await getSession();
      return (
    <PageLayout session={decrypt(session)}/>
      );
};
export default QuizApp;