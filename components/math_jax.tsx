"use client";
import React from "react";
import { splitStringWithMath } from "@/utils/splitStringWithMath";
import { MathJaxProvider } from "mathjax3-react";

type MathJaxComponentProps = {
  text: string;
};
// const originalText =
//   "នេះគឺជាឧទាហរណ៍នៃវិធីសាស្ត្រនៃការបញ្ចូលសមីការគណនា៖ #[E = mc^2]# សមីការនេះមានន័យថា អនុគមន៍កម្លាំងគ្រួសការអុបទិចរបស់រ៉ែតមួយមានទំនាក់ទំនងជាមួយម៉ាសនិងល្បឿនភ្លើង។";
// const encodedText = encodeURIComponent(originalText);
// console.log(encodedText);

const MathJaxComponent: React.FC<MathJaxComponentProps> = ({ text }) => {
  // Optionally decode text if it's necessary (for encoded domain names, etc.)
  const decodedText = decodeURIComponent(text); // Decode only if the input requires it
  return (
    <div>
      <MathJaxProvider>{splitStringWithMath(decodedText)}</MathJaxProvider>
    </div>
  );
};

export default MathJaxComponent;
