'use client'
import React, { useState } from 'react';

interface History {
  questionID: number;
  answerChosed: number;
}

const QuizComponent: React.FC = () => {
  const [userHistory, setUserHistory] = useState<History[]>([]);

  const addHistory = (questionID: number, answerChosed: number) => {
    const newHistory: History = { questionID, answerChosed };
    setUserHistory((prevHistory) => [...prevHistory, newHistory]);
  };

  const handleAnswerClick = (questionID: number, answerChosed: number) => {
    addHistory(questionID, answerChosed);
  };

  // Function to convert the history array to a single comma-separated string
  const historyToString = (): string => {
    return userHistory
      .map((history) => `Q${history.questionID}:A${history.answerChosed}`)
      .join(', ');
  };

  return (
    <div>
      <h2>Quiz</h2>
      <div>
        <p>Question 1: What is the capital of France?</p>
        <button onClick={() => handleAnswerClick(1, 5)}>Paris</button>
        <button onClick={() => handleAnswerClick(1, 3)}>London</button>
        <button onClick={() => handleAnswerClick(1, 1)}>Berlin</button>
      </div>

      {/* Display user history */}
      <h3>Answer History</h3>
      <ul>
        {userHistory.map((history, index) => (
          <li key={index}>
            Question {history.questionID}: Answer Chosen {history.answerChosed}
          </li>
        ))}
      </ul>

      {/* Display the comma-separated string */}
      <h3>History as String</h3>
      <p>{historyToString()}</p>
    </div>
  );
};

export default QuizComponent;
