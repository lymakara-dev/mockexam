import React, { useState } from "react";

const CheckboxGroup: React.FC = () => {
  const [selected, setSelected] = useState<string | null>(null);

  const handleCheckboxChange = (value: string) => {
    setSelected(selected === value ? null : value); // Allow deselecting
  };

  return (
    <div>
      {["Option 1", "Option 2", "Option 3", "Option 4", "Option 5"].map(
        (option, index) => (
          <div key={index}>
            <input
              type="checkbox"
              id={`checkbox-${index}`}
              checked={selected === option}
              onChange={() => handleCheckboxChange(option)}
            />
            <label htmlFor={`checkbox-${index}`}>{option}</label>
          </div>
        )
      )}
    </div>
  );
};

export default CheckboxGroup;
