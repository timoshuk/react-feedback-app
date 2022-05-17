import { useState } from "react";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import { feetbackData } from "./data/feedbackData";

const App = () => {
  const [feedback, setFeetback] = useState(feetbackData);

  return (
    <>
      <Header />
      <div className="container">
        <FeedbackList feedback={feedback} />
      </div>
    </>
  );
};

export default App;
