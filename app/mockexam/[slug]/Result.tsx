import Link from 'next/link';
import React from 'react'
import { Button } from '@nextui-org/button';
import { Kantumruy } from '@/config/fonts';
import {Progress} from "@nextui-org/progress";

const Result =({score}:{score:number})=> {

    const incorrect = 30 -score;
    
    const data = {
        labels: ['ត្រឹមត្រូវ', 'ខុស'],
        datasets: [
            {
                label: 'លទ្ធផលប្រលង',
                data: [score, incorrect],
                backgroundColor: ['#23C552', '#F84F31', ],
                borderColor: ['#23C552', '#F84F31',],
                borderWidth: 1,
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
            tooltip: {
                enabled: true,
            },
        },
    };
  return (
    <div className={`${Kantumruy.className} font-Kantumruy m-4 flex justify-center items-center flex-col md:flex-row md:flex`}>
        <div className="max-w-lg bg-white p-6 md:p-8 rounded-lg shadow-md text-gray-800">
            <p className="text-lg font-semibold text-gray-600 text-center">លទ្ធផលតេស្តរបស់អ្នក</p>
            <h1 className="text-2xl md:text-3xl font-bold text-purple-800 mt-2 mb-4 border-dashed border-4 border-red-400 p-4 text-center">
                អ្នកទទួលបាន <span className="text-green-600">{score}</span> /30
            </h1>
            <p className="text-lg font-bold text-gray-800 mb-2 text-left">កត់ចំណាំ</p>
            
            <div className="mb-4">
                <p className="text-gray-700 mt-2 text-justify">
                    លទ្ធផលតេស្តអ្នកគ្រាន់តែជាជំនួយក្នុងការតេស្តសាកល្បង ឬសម្រាប់សិក្សានិងស្វែងយល់ពីវិញ្ញាសារប្រលងចូលតែប៉ុណ្ណោះ។ នេះមានន័យថាអ្នកអាចសិក្សា និងប្រើប្រាស់មុខងារប្រលងសាកល្បង និងសិក្សាពីលំហាត់ និងដំណោះស្រាយដែលជាវិញ្ញាសាររៀនត្រៀមក៏ដូចជាវិញ្ញាសារប្រលងចូលឆ្នាំចាស់ៗ។
                </p>
            </div>

            <p className="text-lg font-semibold text-gray-800 text-left">ខាងក្រោមនេះអ្នកអាចស្វែងរកវិញ្ញាសារចាស់ៗ ជាមួយដំណោះស្រាយតាមមុខវិជ្ជានីមួយៗ។</p>

            <div className="flex flex-wrap items-center justify-center mt-4 space-x-2 space-y-2">
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
        <div className="flex justify-center items-center mt-4 flex-grow">
            <div className={`${Kantumruy.className} w-full md:w-4/6`}>
                <h1 className="text-2xl font-bold text-center mb-4">ក្រាបលទ្ធផល</h1>
                <div className="flex flex-col gap-6 w-full max-w-md">
                    <Progress color="default" aria-label="Loading..." value={70} />
                    <Progress showValueLabel={true} color="primary" aria-label="Loading..." value={70} />
                    <Progress color="secondary" aria-label="Loading..." value={70} />
                    <Progress color="success" aria-label="Loading..." value={70} />
                    <Progress color="warning" aria-label="Loading..." value={70} />
                    <Progress color="danger" aria-label="Loading..." value={70} />
                </div> 
            </div>
        </div>
        <Button
            className="text-sm mt-4 md:hidden block font-normal text-default-600 bg-default-100"
            href={'/'}
            // startContent={<HeartFilledIcon className="text-danger" />}
            variant="flat"
          >
            <Link href={'/'}>Back Home</Link>
          </Button>
    </div>
  )
}

export default Result