'use client'
import { useState } from 'react';
import { RadioGroup , Radio } from '@nextui-org/react';
interface RadioOption {
  value: string;
  label: string;
}

const RadioGroupComponent = ({
  options,
  testquestion,
}: {
  options: RadioOption[];
  testquestion: number;
}) => {
  const [selectedValue, setSelectedValue] = useState<string>('');
  const [correctAnswer, setCorrectAnswer] = useState<number>(0);

  const handleChange = (value: string) => {
    setSelectedValue(value);

    const checkBox = parseInt(value);
    if (checkBox === testquestion) {
      setCorrectAnswer(correctAnswer + 1);
      console.log("Correct answer");
    } else {
      console.log("Not correct");
    }
  };

  return (
    <RadioGroup label="" onChange={(e) => handleChange(e.target.value)}>
      <div className="flex flex-col gap-4">
        {options.map((option, i) => (
          <div key={i} className="bg-white rounded-[10px] p-4">
            <Radio value={option.value} checked={selectedValue === option.value}>
              {option.label}
            </Radio>
          </div>
        ))}
      </div>
    </RadioGroup>
  );
};

// Usage example
const a = Array.from({ length : 5 }, (_, index) => ({
    value: (index + 1).toString(),
    label: `${index + 1}`,
  }));

export default function App() {
  return <RadioGroupComponent options={a} testquestion={3}/>;
}
