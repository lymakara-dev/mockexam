import { Kantumruy } from '@/config/fonts'
import React from 'react'

function page() {
  return (
    <div className="font-Kantumruy px-4">
        <div className="max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-md text-gray-800">
            <p className="text-lg font-semibold text-gray-600 text-center">លទ្ធផលតេស្តរបស់អ្នក</p>
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-2 mb-4 border-dashed border-4 border-red-400 p-4 text-center">
                អ្នកទទួលបាន <span className="text-pink-600">SEO Master</span> /30
            </h1>
            <p className="text-lg font-bold text-gray-800 mb-2 text-left">កត់ចំណាំ</p>
            
            <div className="mb-4">
                <p className="text-gray-700 mt-2 text-justify">
                    លទ្ធផលតេស្តអ្នកគ្រាន់តែជាជំនួយក្នុងការតេស្តសាកល្បង ឬសម្រាប់សិក្សានិងស្វែងយល់ពីវិញ្ញាសារប្រលងចូលតែប៉ុណ្ណោះ។ នេះមានន័យថាអ្នកអាចសិក្សា និងប្រើប្រាស់មុខងារប្រលងសាកល្បង និងសិក្សាពីលំហាត់ និងដំណោះស្រាយដែលជាវិញ្ញាសាររៀនត្រៀមក៏ដូចជាវិញ្ញាសារប្រលងចូលឆ្នាំចាស់ៗ។
                </p>
            </div>

            <p className="text-lg font-semibold text-gray-800 text-left">ខាងក្រោមនេះអ្នកអាចស្វែងរកវិញ្ញាសារចាស់ៗ ជាមួយដំណោះស្រាយតាមមុខវិជ្ជានីមួយៗ។</p>

            <div className="flex items-center justify-center mt-4 space-x-2 space-y-2">
                <button className="flex items-center border-2 border-gray-500 px-3 py-1 rounded-xl">
                    <div className="w-4 h-4 rounded-full bg-red-500 mr-2"></div>
                    <span className="text-gray-600">គណិតវិទ្យា</span>
                </button>
                <button className="flex items-center border-2 border-gray-500 px-3 py-1 rounded-xl">
                    <div className="w-4 h-4 rounded-full bg-blue-500 mr-2"></div>
                    <span className="text-gray-600">រូបវិទ្យា</span>
                </button>
                <button className="flex items-center border-2 border-gray-500 px-3 py-1 rounded-xl">
                    <div className="w-4 h-4 rounded-full bg-green-500 mr-2"></div>
                    <span className="text-gray-600">តក្កវិទ្យា</span>
                </button>
                <button className="flex items-center border-2 border-gray-500 px-3 py-1 rounded-xl">
                    <div className="w-4 h-4 rounded-full bg-yellow-500 mr-2"></div>
                    <span className="text-gray-600">គីមីវិទ្យា</span>
                </button>
            </div>
        </div>
    </div>
  )
}

export default page