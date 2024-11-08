import MyNavBar from "@/components/MyNavBar";
import Sidebars from "@/components/sidebar";
import React from "react";
import ExamPage from "./exam/page";

function page() {
  return (
    <div className="flex">
      <Sidebars />
      <div className="flex flex-col flex-grow">
        <MyNavBar />
        <div className="p-5 flex flex-col gap-4">
          {/* <h1 className="text-red-600 font-bold">System is under maintenance!!!</h1>
          <p>ជម្រាបសួរ និង សួស្តីអ្នកទាំងអស់គ្នា ដើម្បីឲប្រព័ន្ធរបស់យើងកាន់តែងាយស្រួលក្នុងការប្រើប្រាស់។ ពួកយើងសូមធ្វើការបិទប្រព័ន្ធជាបណ្តោះអាសន្នសិន ដើម្បីធ្វើការអភិវឌ្ឍន៍បន្ថែមទៅលើផ្នែកមួយចំនួន។</p>
          <p>⚠️បញ្ជាក់: ប្រព័ន្ធរបស់យើងនឹងបើកដំណើរការវិញ នៅ ថ្ងៃស្អែក ម៉ោង ១ រសៀល។</p>
          <p>8/11/2024 - 1:00PM</p>
          <p>សូមអធ្យាស្រ័យ និង សូមអរគុណ។</p>
          <span>-Mockexam Dev Team</span> */}
          <ExamPage />
        </div>
      </div>
    </div>
  );
}

export default page;
