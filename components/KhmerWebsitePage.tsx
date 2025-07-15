import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { LampDemo } from "./Aceternity/lamp";
import { GlowingEffectDemo } from "./Aceternity/glowcard";

interface TestimonialProps {
  name: string;
  text: string;
  imageSrc: string;
}

const GoalCard: React.FC = () => {
  return (
    <div className='bg-white md:px-12 px-4 pt-12 md:pb-32 pb-8 rounded-2xl md:flex items-center mb-6 z-20 md:mx-40 mx-4 flex-col md:flex-row justify-between'>
      <div className='flex-1 '>
        <h2 className='md:text-5xl text-4xl font-semibold pb-5 text-primary mb-4 max-md:text-center'>អ្វីទៅជាប្រព័ន្ធ​ MES?</h2>
        <p className='text-gray-700 mb-2 max-md:text-center max-md:text-base'>
          <span className=" font-medium">Mock Exam System</span> គឺជាប្រព័ន្ធប្រឡងសាកល្បងដោយឥតគិតថ្លៃ
          ក្នុងន័យជួយដល់ប្អូនៗមានបំណងប្រលងចូលសាកលវិទ្យាល័យផ្សេងៗក្នុងរាជធានីភ្នំពេញ។ MES ជាបណ្តុំផ្ទុកឯកសារប្រលងចាស់ៗ និងអត្រាកំណែហើយប្អួនៗអាចសាកល្បងបានដោយឥតគិតថ្លៃ
          និងអាចប្រើប្រាស់បានគ្រប់ទីកន្លែងគ្រាន់តែមានអ៊ីនធឺណិត។
        </p>
      </div>
      <div className='hidden md:block md:h-full ml-8'>
        <Image
          src='/hero_images/logo-mobile.png' // Replace with the correct path to your logo
          alt='Logo icon'
          width={160}
          height={160}
          className="mx-14 rotate-12"
        />
      </div>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <div className='w-full bg-white p-8 rounded-3xl mb-6'>
      <h1 className='text-2xl font-bold text-center text-blue-700 mb-4'>
        អំពីយើង
      </h1>
      <p className='text-gray-700 text-center'>
        ប្រវត្តិនៃការបង្កើតរូបភាពសម្រាប់សិស្ស ៥ នៅសាកលវិទ្យាល័យ
        មុខវិជ្ជាវិស្វកម្ម ទូរគមនាគមន៍និងព័ត៌មាន (Information and Communication
        Engineering) ក្នុងការលំហាត់ផ្ទៃមុខអ្នកប្រើប្រាស់ ។
      </p>
    </div>
  );
};

const TestimonialCard: React.FC<TestimonialProps> = ({
  name,
  text,
  imageSrc,
}) => {
  return (
    <div className="bg-gray-50 p-6 rounded-2xl flex items-center">
      <div className="flex-1">
        <div className="flex items-center mb-4">
          <span className="text-4xl text-blue-700 mr-2">“</span>
          <p className="text-gray-600">{text}</p>
        </div>
        <h3 className="text-xl font-bold text-gray-700">{name}</h3>
      </div>
      <div className="ml-6">
        <Image
          src={imageSrc}
          alt={name}
          width={100}
          height={100}
          className="rounded-full object-cover"
        />
      </div>
    </div>
  );
};

const TestimonialsSection: React.FC = () => {
  const testimonials = [
    {
      name: "Ly Makara",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      imageSrc: "/testimonial_images/image.png",
    },
    {
      name: "Kheang OuyOrng",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      imageSrc: "/testimonial_images/Bong-Ouyorng.jpg",
    },
    {
      name: "Leang Serey Sophea",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      imageSrc: "/testimonial_images/Bong-Serey-Sophea.jpg",
    },
    {
      name: "Leng Kimtry",
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.",
      imageSrc: "/testimonial_images/Bong-Kimtry.jpg",
    },
  ];

  return (
    <div className=' bg-white md:mx-40 mx-4 rounded-2xl  md:p-12 p-6 my-6'>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* {testimonials.map((testimonial, index) => (
        <TestimonialCard
          key={index}
          name={testimonial.name}
          text={testimonial.text}
          imageSrc={testimonial.imageSrc}
        />
        ))} */}
      </div>
      <LampDemo/>
      <GlowingEffectDemo/>

    </div>
  );
};

const SpecialitySection: React.FC = () => {
  return (
    <div className=' grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 md:mx-40 mx-4 '>
      {/* Left Column */}
      <div className='bg-white md:p-8 p-6 md:px-12 rounded-2xl relative overflow-hidden'>
        <div className="flex items-end gap-4 md:gap-8 mb-6">
          <h2 className='md:text-5xl md:pb-6 text-4xl max-md:text-center w-full font-semibold text-primary'>លក្ខណៈពិសេស</h2>
        </div>
        <ul className='text-gray-700 mb-2 list-disc list-inside max-md:text-base'>
          <li>
            ប្រើប្រាស់ដោយ <span className="font-medium">ឥតគិតថ្លៃ</span> និងអាចប្រើប្រាស់បានគ្រប់ទីកន្លែង។
          </li>
          <li>
            គន្លឹះក្នុងការធ្វើលំហាត់ និង<span className="font-medium"> កម្មវិធីជំនួយ </span>ដើម្បីស្រាវជ្រាវ។
          </li>
          <li>
            ការរួមបញ្ចូល <span className="font-medium">បញ្ញាសម្បនិម្មិត</span> ក្នុងការដោះស្រាយលំហាត់។
          </li>
        </ul>
        {/* <Image
          src='/hero_images/LongMode.png'
          width={500}
          height={300}
          alt='Tablet view of application'
          className="absolute right-[10px] -bottom-[60px] md:right-20 opacity-10 md:-bottom-10 z-10"
        /> */}

      </div>

      {/* Right Column */}
      <div className='bg-white md:p-8 p-4 rounded-2xl w-full '>
        <h2 className='md:text-5xl w-full text-4xl max-md:text-center font-semibold text-primary mb-4 md:pb-6 py-4'>របៀបប្រើប្រាស់</h2>
        <div className='bg-gray-100 rounded-2xl p-4 mb-4 flex items-center justify-center h-80'>
          <div className='rounded-full bg-gray-300 p-4'>
            <div className='h-8 w-8 flex items-center justify-center'>
              <span className='text-gray-500'>▶</span>
            </div>
          </div>
        </div>
        <div className='mt-6 md:flex-row justify-between items-center p-4 flex flex-col'>
          <p className='text-gray-700 mb-2 text-nowrap max-md:text-base'>ឬចូលមើលតាមរយះ :</p>
          <div className='flex space-x-4'>
            <a href='#' className='text-2xl text-blue-600'>
              <FaFacebook />
            </a>
            <a href='#' className='text-2xl text-blue-500'>
              <FaTelegram />
            </a>
            <a href='#' className='text-2xl text-red-600'>
              <FaYoutube />
            </a>
            <a href='#' className='text-2xl text-pink-600'>
              <FaInstagram />
            </a>
            <a href='#' className='text-2xl text-black'>
              <FaTiktok />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main Page Component
const KhmerWebsitePage: React.FC = () => {
  return (
    <>
      <GoalCard />
      <SpecialitySection />
      <TestimonialsSection />
    </>
  );
};

export default KhmerWebsitePage;
