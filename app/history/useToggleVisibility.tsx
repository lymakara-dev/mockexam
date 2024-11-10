import { useState } from 'react';

const useToggleVisibility = (initialState: boolean = false) => {
  const [isVisible, setIsVisible] = useState<boolean>(initialState);

  const toggleVisibility = () => {
    setIsVisible(prevState => !prevState);
  };

  return { isVisible, toggleVisibility };
};

export default useToggleVisibility;
