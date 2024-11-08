"use client"
import React from 'react';
import { MathJaxProvider, MathJaxHtml } from 'mathjax3-react';

// The original string with MathJax placeholders (#...#)
const originalString = "នេះគឺជាឧទាហរណ៍នៃវិធីសាស្ត្រនៃការបញ្ចូលសមីការគណនា៖ #\[E = mc^2\]# សមីការនេះមានន័យថា អនុគមន៍កម្លាំងគ្រួសការអុបទិចរបស់រ៉ែតមួយមានទំនាក់ទំនងជាមួយម៉ាសនិងល្បឿនភ្លើង។";


// Function to split the string and render MathJax where necessary
const splitStringWithMath = (input: string) => {
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

const MathJaxComponent = () => {
  return (
    <div>
      <MathJaxProvider>
        <div>
          {splitStringWithMath(originalString)}
        </div>
      </MathJaxProvider>
    </div>
  );
};

export default MathJaxComponent;
