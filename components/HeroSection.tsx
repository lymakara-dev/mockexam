// components/HeroSection.tsx
import React from "react";
import Image from "next/image";

interface HeroSectionProps {
  locale?: string;
}

const HeroSection: React.FC<HeroSectionProps> = ({ locale }) => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-transparent">
      <div className='flex flex-col-reverse md:flex-row items-center justify-between px-4 md:px-12 py-16'>
        {/* Left Side Content */}
        <div className='w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0'>
          <h1 className='text-3xl md:text-4xl lg:text-5xl font-bold text-blue-800 mb-4 leading-[10px]'>
            សាកល្បងប្រលងចូល
            <br />
            និងរៀនត្រៀម
            <br />
            ដោយសេរី...!
          </h1>
          <p className='text-gray-600 mb-6 leading-relaxed'>
            ប្រព័ន្ធប្រមូលសាកល្បង ជាគេហទំព័រជួយដល់សិស្សានុសិស្ស
            <br />
            ដែលចង់ចុះឈ្មោះរៀនចូលផ្ទះល់ទៅកាន់ប្រព័ន្ធចុះឈ្មោះ។
          </p>
          <button className='bg-blue-700 text-white py-2 px-8 rounded-full hover:bg-blue-800 transition-colors'>
            សាកល្បងឥឡូវនេះ
          </button>
        </div>
        {/* Right Side Device Mockups */}
        <div className='w-full md:w-1/2 relative'>
          <div className='relative'>
            {/* Laptop Mockup */}
            <Image
              src='/hero_images/Frame_638.png'
              width={700}
              height={400}
              alt='Laptop view of application'
              className='z-10'
            />
            {/* Tablet Mockup - Positioned to overlap */}
            <div className='absolute -right-10 bottom-0 z-20'>
              <Image
                src='/hero_images/Layer_1.png'
                width={350}
                height={250}
                alt='Tablet view of application'
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
