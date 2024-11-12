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
          width={100}
          height={100}
          alt="img"
        />
      </div>

      {/* gradient layer */}
      <div className="absolute bg-gradient-to-t from-[#254961] to-[#00000] border-larg  top-0 left-0 w-full h-full text-black"></div>

      {/* text layer */}
      <div className="absolute w-full h-full">
        <div className="flex flex-col items-center">
          <p>សាកល្បង</p>
          <div className="flex flex-col">
            <h1 className="text-[48px]">ប្រលងចូលតិចណូ</h1>
            <p className="self-end">និងរៀនត្រៀមដោយសេរី...!</p>
          </div>
        </div>
        <div className="flex flex-col gap-4 bg-red-400 items-center">
          <p className="text-center">
            ប្រព័ន្ធប្រលងសាកល្បង ជាគេហទំព័រជំនួយដល់សិស្សានុសិស្សដែលមានបំណង​{" "}
            <br />
            ​ត្រៀមប្រឡងចូលវិទ្យាស្ថានបច្ចេកវិទ្យាកម្ពុជា។
          </p>
          <button className="h-[40px] w-[184px] text-[16px] bg-[#254061] text-white rounded-2xl ">
            សាកល្បងឥឡូវនេះ​ &gt;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Hero;
