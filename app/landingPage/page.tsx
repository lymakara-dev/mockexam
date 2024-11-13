"use client";
import React from "react";
import { Avatar, AvatarGroup } from "@nextui-org/react";


const avatarStyle = { width: '64px', height: '64px' };

function Page() {
  return (
    <div>
      <div className="md:h-[446px] h-[430px] bg-[#F1F5F9] pt-[1rem]">
        <h1 className="text-[#254061] text-center text-[30px] md:text-[32px] sm:text-[24px] font-semibold leading-[50px]">
          មុខងារ និងលក្ខណះពិសេស
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center px-4 md:px-10 mt-[2rem]">
          <div className="text-[#254061] text-[16px] sm:text-[18px] md:text-[20px]  leading-[36px] ">
            <span>មានវិញ្ញាសារចាស់ៗ ដែលធ្លាប់ចេញពីឆ្នាំកន្លងមក</span>
            <br />
            <span>មានការកំណត់រយៈពេលដូចទៅនិងការប្រឡងជាក់ស្តែង</span>
            <br />
            <span>
              មានមុខងារក្នុងការបូកសរុបលទ្ធផលប្រឡង និងមើលប្រវត្តិនៃការប្រឡង
            </span>
          </div>

          <div className="relative w-[300px] md:w-[400px] h-[200px] md:h-[300px] mt-[1rem]">
            {/* MacBook image */}
            <img
              src="/img/mac.png"
              alt="MacBook"
              className="absolute h-[150px] md:h-60 top-0 left-0 z-10"
            />
            {/* iPad image positioned relative to MacBook */}
            <img
              src="/img/ipad.png"
              alt="iPad"
              className="absolute h-[100px] md:h-40 top-[58px] md:top-[88px] left-[88px] md:left-[188px] z-20"
            />
          </div>
        </div>
      </div>
      <div className="h-auto md:h-[449px] pt-8 md:pt-[47px] pb-8 md:pb-[60px] flex flex-col">
        <h1 className="text-[#254061]  md:pl-[60px] md:text-start text-center text-[30px] md:text-[32px] sm:text-[24px] font-semibold leading-[50px]">
          អំពីយើង
        </h1>
        <div className="flex flex-col md:flex-row items-center md:items-start md:justify-between justify-center mt-4 md:px-10 ">
          <div className="md:pl-[52px] md:pt-[2rem] md:h-[241px] md:w-[241px] h-[120px] w-[120px] ">
            <img src="/img/warningsign.png" alt="" />
          </div>
          <div className="flex flex-col w-full md:w-3/5 px-4 md:items-start justify-evenly ">
            <div className="text-[#254061] text-[16px] sm:text-[18px] md:text-[20px]  leading-[36px] pt-[1rem]">
              ប្រព័ន្ធនេះបង្កើតឡើងដោយសិស្សឆ្នាំទី៤​ នៃសាលាតិចណូ មកពីដេប៉ាដឺម៉ង​
              ទេព្យកោសល្យព័ត៏មានវិទ្យា<br /> &#40;Information and Communication
              Engineering&#41; ក្នុងគោលបំណងចង់ជួយដល់ប្អូនៗ ។
            </div>
            <div className="md:mt-[68px] mt-[48px] flex justify-center">
              <AvatarGroup isBordered>
                <Avatar src="/img/orng_image.png" style={avatarStyle} />
                <Avatar src="/img/makara_image.png "  style={avatarStyle}/>
                <Avatar src="/img/kimtry_image.png" style={avatarStyle}/>
                <Avatar src="/img/sombath_image.png" style={avatarStyle}/>
                <Avatar src="/img/victor_image.jpg" style={avatarStyle}/>
              </AvatarGroup>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
