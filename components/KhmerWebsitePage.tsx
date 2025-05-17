import React from "react";
import Image from "next/image";
import {
  FaFacebook,
  FaTelegram,
  FaYoutube,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";

// Types for testimonial data
interface TestimonialProps {
  name: string;
  text: string;
  imageSrc: string;
}

const GoalCard: React.FC = () => {
  return (
    <div className='bg-white shadow-xl p-12 rounded-3xl flex items-center mb-6 z-20'>
      <div className='flex-1'>
        <h2 className='text-4xl font-bold text-primary mb-4'>អ្វីទៅជាប្រព័ន្ធ​ MES?</h2>
        <p className='text-gray-700 mb-2'>
          <span className="font-bold text-primary">Mock Exam System</span> គឺជាប្រព័ន្ធប្រឡងសាកល្បងដោយឥតគិតថ្លៃ
          ក្នុងន័យជួយដល់ប្អូនៗមានបំណងប្រលងចូលសាកលវិទ្យាល័យផ្សេងៗក្នុងរាជធានីភ្នំពេញ។
        </p>
        <p className='text-gray-700'>
          <span className="text-primary font-bold">MES</span> ជាបណ្តុំផ្ទុកឯកសារប្រលងចាស់ៗ និងអត្រាកំណែហើយប្អួនៗអាចសាកល្បងបានដោយឥតគិតថ្លៃ
          និងអាចប្រើប្រាស់បានគ្រប់ទីកន្លែងគ្រាន់តែមានអ៊ីនធឺណិត។
        </p>
      </div>
      <div className=''>
        <Image
          src='/hero_images/logo-mobile.png' // Replace with the correct path to your logo
          alt='Logo icon'
          width={130}
          height={130}
          className="mx-12 rotate-12"
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
    <div className="bg-gray-50 p-6 rounded-3xl shadow flex items-center">
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
          width={60}
          height={60}
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
    <div className='w-full bg-white p-6 rounded-3xl shadow mb-6'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={index}
            name={testimonial.name}
            text={testimonial.text}
            imageSrc={testimonial.imageSrc}
          />
        ))}
      </div>
    </div>
  );
};

const SpecialitySection: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
      {/* Left Column */}
      <div className='bg-white p-8 px-12 rounded-3xl relative overflow-hidden'>
        <div className="flex items-end gap-8 mb-6">
          <h2 className='text-4xl font-bold text-primary'>លក្ខណៈពិសេស</h2>
          <Image
            src='/hero_images/LightBulb.png'
            alt='Light bulb icon'
            width={80}
            height={80}
          />
        </div>
        <ul className='text-gray-700 mb-2 list-disc list-inside'>
          <li>
            ប្រើប្រាស់ដោយ <span className="text-green-600 font-bold text-2xl">ឥតគិតថ្លៃ</span> និងអាចប្រើប្រាស់បានគ្រប់ទីកន្លែង។
          </li>
          <li>
            គន្លឹះក្នុងការធ្វើលំហាត់ និង<span className="text-green-600 font-bold text-2xl"> កម្មវិធីជំនួយ </span>ដើម្បីស្រាវជ្រាវ។
          </li>
          <li>
            ការរួមបញ្ចូល <span className="text-green-600 font-bold text-2xl">បញ្ញាសម្បនិម្មិត</span> ក្នុងការដោះស្រាយលំហាត់។
          </li>
        </ul>
        <Image
          src='/hero_images/LongMode.png'
          width={500}
          height={300}
          alt='Tablet view of application'
          className="absolute right-20 opacity-10 -bottom-10 z-10"
        />

      </div>

      {/* Right Column */}
      <div className='bg-white p-6 rounded-3xl shadow'>
        <h2 className='text-xl font-bold text-blue-700 mb-4'>របៀបប្រើប្រាស់</h2>
        <div className='bg-gray-100 rounded-3xl p-4 mb-4 flex items-center justify-center h-48'>
          <div className='rounded-full bg-gray-300 p-4'>
            <div className='h-8 w-8 flex items-center justify-center'>
              <span className='text-gray-500'>▶</span>
            </div>
          </div>
        </div>
        <div className='mt-6'>
          <p className='text-gray-700 mb-2'>ពួកយើងតាមរយៈ :</p>
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
      {/* <AboutUsSection /> */}
    </>
  );
};

export default KhmerWebsitePage;
