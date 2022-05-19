import PropTypes from "prop-types";
import { motion, AnimatePresence } from "framer-motion";
import FeedbackItem from "./FeedbackItem";

const FeedbackList = ({ feedback, handleFeedback }) => {
  if (!feedback || feedback.length === 0) return <h1>No feedback</h1>;

  return (
    <div className="feetback-list">
      <AnimatePresence>
        {feedback.map((item) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, display: "none" }}
          >
            <FeedbackItem
              key={item.id}
              item={item}
              handleFeedback={handleFeedback}
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
};

FeedbackList.propTypes = {
  feedback: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      rating: PropTypes.number.isRequired,
    })
  ),
};

export default FeedbackList;
