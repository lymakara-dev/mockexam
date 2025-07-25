// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  locale?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  return (
    <div className="relative z-10 flex overflow-hidden max-md:flex-col-reverse items-center justify-between py-20 md:mx-40 mx-4 ">
      {/* Left */}
      <div className=" text-center md:text-left overflow-hidden md:w-1/2  w-full py-12">
        {/* text and button */}
        <h1 className='md:flex hidden text-3xl mt-12 md:mt-0 px-12 md:px-0 md:text-4xl lg:text-5xl font-bold text-primary mb-4 flex-col md:items-start md:gap-4'>
          <span className="block mt-2">សាកល្បងប្រលងចូលតិចណូ</span>
          <span className="block">និងរៀនត្រៀម ដោយសេរី...!</span>
        </h1>
        <h1 className="md:hidden block text-primary text-4xl font-bold my-6">សាកល្បងប្រលងចូលតិចណូនិងរៀនត្រៀមដោយសេរី...!</h1>
        <p className='text-gray-600 mb-6 leading-relaxed  px-6 md:px-0 md:mr-32 md:text-lg text-base'>
          ជាប្រព័ន្ធប្រលងចូលសកលវិទ្យាល័យដែលសិស្សអាចសាកល្បងតេស្តសមត្ថភាព។ យើងផ្តល់ជូននូវការប្រៀបធៀបលំហាត់ និងការបង្ហាញលទ្ធផលដែលអាចជួយអ្នកក្នុងការរៀន និងធ្វើតេស្ត។
        </p>
        <button className='bg-primary text-base text-white py-3 px-8 rounded-full hover:bg-primary-800 transition-colors'>
          សាកល្បងឥឡូវនេះ
        </button>
      </div>

      {/* Right */}
      <div className="flex-grow">
        <Image
          src='/HomePage/TabletandMac.png'
          width={0}
          height={0}
          sizes="100vw"
          alt='Laptop view of application'
          className='z-10 w-full aspect-auto h-full'
        />
        <Image
          src='/hero_images/Layer_1.png'
          width={500}
          height={300}
          alt='Tablet view of application'
          className="absolute left-36 -bottom-64 -z-10"
        />
      </div>
    </div>

  );
};

export default HeroSection;
