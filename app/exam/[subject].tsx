// pages/exam/[subject].tsx
import { useRouter } from 'next/router';
import { useState } from 'react';

type Question = {
  question: string;
  options: string[];
  answer: string;
};

const questionsData: Record<string, Question[]> = {
  math: [
    { question: "What is 2+2?", options: ["3", "4", "5"], answer: "4" },
    { question: "What is 5+7?", options: ["11", "12", "13"], answer: "12" },
  ],
  science: [
    { question: "What is H2O?", options: ["Water", "Oxygen", "Hydrogen"], answer: "Water" },
    { question: "What is CO2?", options: ["Carbon", "Oxygen", "Carbon Dioxide"], answer: "Carbon Dioxide" },
  ],
  // Add more subjects and questions as needed
};

const SubjectPage: React.FC = () => {
  const router = useRouter();
  const { subject } = router.query as { subject: string };
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);

  const handleAnswer = (selectedAnswer: string) => {
    if (selectedAnswer === questionsData[subject][currentQuestion].answer) {
      setScore(score + 1);
    }
    setCurrentQuestion(currentQuestion + 1);
  };

  if (!questionsData[subject]) {
    return <p>Subject not found</p>;
  }

  if (currentQuestion >= questionsData[subject].length) {
    return <p>Your score: {score} / {questionsData[subject].length}</p>;
  }

  const { question, options } = questionsData[subject][currentQuestion];

  return (
    <div>
      <h1>{subject} Exam</h1>
      <p>Question {currentQuestion + 1}: {question}</p>
      <div>
        {options.map((option, index) => (
          <button key={index} onClick={() => handleAnswer(option)}>
            {option}
          </button>
        ))}
      </div>
    </div>
  );
};

export default SubjectPage;
