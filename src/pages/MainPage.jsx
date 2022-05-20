import FeedbackList from "../components/FeedbackList";
import FeedbackStats from "../components/FeedbackStats";
import FeedbackForm from "../components/FeedbackForm";
import AboutLink from "../components/AboutLink";

import { FeedbackProvider } from "../context/FeedbackContext";

const MainPage = () => {
  return (
    <FeedbackProvider>
      <div>
        <FeedbackForm />
        <FeedbackStats />
        <FeedbackList />
        <AboutLink />
      </div>
    </FeedbackProvider>
  );
};

export default MainPage;
