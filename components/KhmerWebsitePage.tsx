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
    <div className='bg-white p-6 rounded-lg shadow flex items-center mb-6'>
      <div className='flex-1'>
        <h2 className='text-xl font-bold text-blue-700 mb-4'>គោលបំណង</h2>
        <p className='text-gray-700 mb-2'>
          ប្រវត្តិនៃការបង្កើតរូបភាពសម្រាប់សិស្ស ៥ នៅសាកលវិទ្យាល័យ
          មុខវិជ្ជាវិស្វកម្ម ទូរគមនាគមន៍និងព័ត៌មាន (Information and
          Communication Engineering) ក្នុងការលំហាត់ផ្ទៃមុខអ្នកប្រើប្រាស់ ។
        </p>
        <p className='text-gray-700'>
          ប្រវត្តិនៃការបង្កើតរូបភាពសម្រាប់សិស្ស ៥ នៅសាកលវិទ្យាល័យ
          មុខវិជ្ជាវិស្វកម្ម ទូរគមនាគមន៍និងព័ត៌មាន (Information and
          Communication Engineering) ក្នុងការលំហាត់ផ្ទៃមុខអ្នកប្រើប្រាស់ ។
        </p>
      </div>
      <div className='ml-6'>
        <Image
          src='/images/logo-icon.svg' // Replace with the correct path to your logo
          alt='Logo icon'
          width={80}
          height={80}
        />
      </div>
    </div>
  );
};

const AboutUsSection: React.FC = () => {
  return (
    <div className='w-full bg-white p-8 rounded-lg shadow mb-6'>
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
    <div className="bg-gray-50 p-6 rounded-lg shadow flex items-center">
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
    <div className='w-full bg-white p-6 rounded-lg shadow mb-6'>
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
      <div className='flex justify-center mt-4'>
        <button className='border border-blue-500 text-blue-500 px-6 py-2 rounded-full hover:bg-blue-50 transition'>
          មើលបន្ថែមទៀត
        </button>
      </div>
    </div>
  );
};

const SpecialitySection: React.FC = () => {
  return (
    <div className='w-full grid grid-cols-1 md:grid-cols-2 gap-6 mb-6'>
      {/* Left Column */}
      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-xl font-bold text-blue-700 mb-4'>លក្ខណៈពិសេស</h2>
        <p className='text-gray-700 mb-4'>
          ប្រវត្តិនៃការបង្កើតរូបភាពសម្រាប់សិស្ស ៥ នៅសាកលវិទ្យាល័យ
          មុខវិជ្ជាវិស្វកម្ម ទូរគមនាគមន៍និងព័ត៌មាន (Information and
          Communication Engineering) ក្នុងការលំហាត់ផ្ទៃមុខអ្នកប្រើប្រាស់ ។
        </p>
        <div className='flex justify-end'>
          <Image
            src='/images/light-bulb.svg'
            alt='Light bulb icon'
            width={80}
            height={80}
          />
        </div>
      </div>

      {/* Right Column */}
      <div className='bg-white p-6 rounded-lg shadow'>
        <h2 className='text-xl font-bold text-blue-700 mb-4'>របៀបប្រើប្រាស់</h2>
        <div className='bg-gray-100 rounded-lg p-4 mb-4 flex items-center justify-center h-48'>
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
    <div className='container mx-auto px-4 py-8 bg-gray-50'>
      <GoalCard />
      <SpecialitySection />
      <TestimonialsSection />
      <AboutUsSection />
    </div>
  );
};

export default KhmerWebsitePage;
