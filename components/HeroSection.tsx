// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  locale?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  return (
    <div className="relative z-10 flex overflow-hidden flex-col-reverse md:flex-row items-center justify-between md:px-12 py-16">
      <div className=' w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0 flex-1 overflow-hidden'>
        {/* text and button */}
        <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4 flex flex-col items-start md:gap-4'>
          <span className="block">សាកល្បងប្រលងចូលតិចណូ</span>
          <span className="block">និងរៀនត្រៀម</span>
          <span className="block">ដោយសេរី...!</span>
        </h1>
        <p className='text-gray-600 mb-6 leading-relaxed pr-40'>
          ប្រព័ន្ធប្រមូលសាកល្បង ជាគេហទំព័រជួយដល់សិស្សានុសិស្ស
          ដែលចង់ចុះឈ្មោះរៀនចូលផ្ទះល់ទៅកាន់ប្រព័ន្ធចុះឈ្មោះ។
        </p>
        <button className='bg-primary text-white py-2 px-8 rounded-full hover:bg-primary-800 transition-colors'>
          សាកល្បងឥឡូវនេះ
        </button>
      </div>

      <div className="flex-1">
        <Image
          src='/HomePage/TabletandMac.png'
          width={0}
          height={0}
          sizes="10vw"
          alt='Laptop view of application'
          className='z-10 w-full aspect-auto'
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
