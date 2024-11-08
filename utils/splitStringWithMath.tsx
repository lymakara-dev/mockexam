import { MathJaxHtml } from "mathjax3-react";

// Function to split the string and render MathJax where necessary
export const splitStringWithMath = (input: string) => {
    return input.split(/(#.*?#)/g).map((part, index) => {
      if (part.startsWith('#') && part.endsWith('#')) {
        const mathContent = part.slice(1, -1); // Remove the enclosing #
        return (
          <MathJaxHtml key={index} html={`\\(${mathContent}\\)`} />
        );
      }
      return <span key={index}>{part}</span>;
    });
  };