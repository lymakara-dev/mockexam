import React from 'react';

type QuestionProps = {
  options: number[];
  correctedAns: number;
  chosenValue: number;
};

const Question: React.FC<QuestionProps> = ({ options, correctedAns, chosenValue }) => {
  enum ans { 'ក', 'ខ', 'គ', 'ឃ', 'ង', 'ច', 'ឆ' }

  return (
    <div className="flex gap-4 items-center px-4">
      {options.map((option, index) => (
        <label key={index} style={{ display: 'block', marginBottom: '8px' }}>
          <input
            type="radio"
            name={`question-${correctedAns}`} // Use a unique name for each question instance
            value={option}
            checked={chosenValue === option}  // Ensures correct radio button is selected
            readOnly
            style={{
              accentColor:
                option === correctedAns && option === chosenValue
                  ? 'green' // Correct answer and chosen value match (Green)
                  : option === correctedAns
                  ? 'green' // Correct answer (Green)
                  : option === chosenValue
                  ? 'red' // Chosen answer but incorrect (Red)
                  : 'initial', // Default (no color)
            }}
          />
          <span
            className="px-1"
            style={{
              color:
                option === correctedAns && option === chosenValue
                  ? 'green' // Correct answer and chosen value match (Green)
                  : option === correctedAns
                  ? 'green' // Correct answer (Green)
                  : option === chosenValue
                  ? 'red' // Chosen answer but incorrect (Red)
                  : 'black', // Default (no color)
            }}
          >
            {ans[index]}
          </span>
        </label>
      ))}
    </div>
  );
};

export default Question;
