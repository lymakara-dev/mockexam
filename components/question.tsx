import { Image } from "@nextui-org/image";
import { Button, Radio, RadioGroup } from "@nextui-org/react";
import React from "react";

interface QuestionIdProps {
  param: string;
}

const ExamQuestion: React.FC<QuestionIdProps> = ({ param }) => {
  // const router = useRouter();

  // const handleClick = () => {
  //   router.push("/exam");
  // };
  return (
    <div className="flex flex-col gap-6 bg-[#F1F5F9] p-8">
      <p className="font-medium text-[#0F172A] text-2xl not-italic">
        សំនួរ {param}
      </p>
      <Image src="/images/question.png" radius="none" />
      <p className="font-medium text-[#0F172A] text-2xl not-italic">ចំម្លើយ</p>
      <RadioGroup label="">
        <div className="flex flex-col gap-4">
          <div className="bg-white rounded-[10px] p-4">
            <Radio value="answer1">ក. 2f’’ + 3f’ + f = 0</Radio>
          </div>
          <div className="bg-white rounded-[10px] p-4">
            <Radio value="answer2">ខ. 2f’ - 3f’' + f = 0</Radio>
          </div>
          <div className="bg-white rounded-[10px] p-4">
            <Radio value="answer3">គ. 2f’’ - 3f’ + f = 0</Radio>
          </div>
          <div className="bg-white rounded-[10px] p-4">
            <Radio value="answer4">ឃ. f’’ - 3f’ + 2f = 0</Radio>
          </div>
          <div className="bg-white rounded-[10px] p-4">
            <Radio value="answer5">ង. ផ្សេងទៀត</Radio>
          </div>
        </div>
      </RadioGroup>
      <div className="flex flex-row justify-between">
        <p className="text-[#94A3B8] text-xl font-normal not-italic">
          រយះពេលនៅសល់ :
        </p>
        <p className="text-[#53E635] text-xl font-normal not-italic">
          01:59:26
        </p>
      </div>
      <Button className="w-[164px] h-[40px] self-end" color="primary">
        បន្ទាប់
      </Button>
    </div>
  );
};

export default ExamQuestion;
