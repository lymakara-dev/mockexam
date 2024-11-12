import Image from "next/image";
import React from "react";

function Hero() {
  return (
    <div className="relative w-full h-[50vh]">
      {/* image layer */}
      <div>
        <Image
          className="absolute h-full w-full inset-0 object-cover"
          src="/images/herobackground.jpg"
          width={2000}
          height={2000}
          alt="img"
        />
      </div>

      {/* gradient layer */}

      {/* text layer */}
      <div className=" w-full h-full flex flex-col  relative">
        <div className=" absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white">
          <div className="flex flex-col items-center">
            <p>សាកល្បង</p>
            <div className="flex flex-col">
              <h1 className="text-[48px]">ប្រលងចូលតិចណូ</h1>
              <p className="self-end">និងរៀនត្រៀមដោយសេរី...!</p>
            </div>
          </div>
          <div className="flex flex-col gap-4  items-center">
            <p className="text-center">
              ប្រព័ន្ធប្រលងសាកល្បង ជាគេហទំព័រជំនួយដល់សិស្សានុសិស្សដែលមានបំណង​{" "}
              <br />
              ​ត្រៀមប្រឡងចូលវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។
            </p>
            <button className="h-[40px] w-[184px] text-[16px] bg-common-blue text-white rounded-full hover:border-white hover:border-2 hover:bg-transparent  ">
              សាកល្បងឥឡូវនេះ​ &gt;
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
