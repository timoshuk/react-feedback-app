import { useState } from "react";
import { BrowserRouter as Rourter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutLink from "./components/AboutLink";

import AboutPage from "./pages/AboutPage";

import { feetbackData } from "./data/feedbackData";

const App = () => {
  const [feedback, setFeetback] = useState(feetbackData);

  const deleteFeetback = (id) => {
    if (window.confirm("Are you sure you want to delete?")) {
      setFeetback(feedback.filter((item) => item.id !== id));
    }
  };

  const addFeedback = (newFeedback) => {
    setFeetback((fb) => [newFeedback, ...fb]);
  };

  const Main = () => {
    return (
      <div>
        <FeedbackForm handleAdd={addFeedback} />
        <FeedbackStats feedback={feedback} />
        <FeedbackList feedback={feedback} handleFeedback={deleteFeetback} />
        <AboutLink />
      </div>
    );
  };

  return (
    <Rourter>
      <Header />
      <div className="container">
        <Routes>
          <Route exact path="/" element={<Main />} />
          <Route path="about" element={<AboutPage />} />
        </Routes>
      </div>
    </Rourter>
  );
};

export default App;
