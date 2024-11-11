"use client";
import React, { useEffect, useState, useRef } from 'react';
import Question from '../../Radio';
import Image from 'next/image';
import {  useParams, useRouter } from 'next/navigation';
import { SyncLoader } from 'react-spinners';
import useToggleVisibility from '../../useToggleVisibility';


export const runtime = "edge";

interface Data {
    id: number;
    picquestions: {
      id: number;
      link: {
        href: string;
        label: string;
      };
      name: string;
    };
    multiplechoices: number;
    answer: {
      id: number;
      link: {
        href: string;
        label: string;
      };
      name: string;
    };
    solution: {
      id: number;
      link: {
        href: string;
        label: string;
      };
      name: string;
    };
    correctedAns: number;
    type: {
      key: string;
      name: string;
    };
    year: {
      key: string;
      name: string;
    };
    status: {
      code: number;
      label: string;
      label_i18n: string;
    };
}

interface Result {
    dateCreated: string;
    dateModified: string;
    externalReferenceCode: string;
    id: number;
    keywords: any[];
    status: {
        code: number;
        label: string;
        label_i18n: string;
    };
    taxonomyCategoryBriefs: any[];
    score: number;
    timeRemain: string;
    history: string;
    type: string;
    email: string;
}

interface Extract {
    questionId: number;
    value: number;
}

function Page() {
    const { isVisible, toggleVisibility } = useToggleVisibility();
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [result, setResult] = useState<Data[]>([]);
    const [getSlug, setGetSlug] = useState<Result[]>([]);
    const [parsedHistory, setParsedHistory] = useState<Extract[]>([]);
    const [date, setDate] = useState<string>()
    
    const useRefArray = useRef<Extract[]>([]);
    const questionIdsRef = useRef<number[]>([]);

    const router = useParams();
    const idnum = Number(router.slug);

    const getForm = async () => {
        const clientId = "id-ff33fd67-2662-23d2-e387-7e660796b71";
        const clientSecret = "secret-16433662-63e6-dea2-91b5-c0be0d0db7c";
        const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";

        try {
            const response = await fetch(tokenUrl, {
                method: "POST",
                headers: {
                    "Content-Type": "application/x-www-form-urlencoded",
                },
                body: new URLSearchParams({
                    grant_type: "client_credentials",
                    client_id: clientId,
                    client_secret: clientSecret,
                }),
            });

            if (response.ok) {
                const data = await response.json();
                fetchRecor(data.access_token);
                fetchRecord(data.access_token);
            } else {
                console.error("Error obtaining token");
                setIsLoading(false);
            }
        } catch (error) {
            console.error("Token fetch error:", error);
            setIsLoading(false);
        }
    };
    
    function fetchRecor(accessToken: string) {
        const url = "https://techbox.developimpact.net/o/c/mockresults/?pageSize=-1";

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.items && Array.isArray(data.items)) {
                    const filteredItems = data.items.filter((item: { id: number }) => item.id === idnum);
                    setGetSlug(filteredItems);
                } else {
                    // console.log("Unexpected data format:", data);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching records:", error);
            });
    }

    function fetchRecord(accessToken: string) {
        const url = "https://techbox.developimpact.net/o/c/mockquestions/?pageSize=-1";

        fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                Authorization: "Bearer " + accessToken,
            },
        })
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Network response was not ok");
                }
                return response.json();
            })
            .then((data) => {
                if (data.items && Array.isArray(data.items)) {
                    const filteredData = data.items.filter((item: Result) => 
                        questionIdsRef.current.includes(item.id)
                    );
                    setResult(filteredData);
                    // console.log("Filtered mock questions:", filteredData);
                } else {
                    // console.log("Unexpected data format:", data);
                }
                setIsLoading(false);
            })
            .catch((error) => {
                console.log("Error fetching records:", error);
                setIsLoading(false);
            });
    }
    
    useEffect(() => {
        getForm();
    }, []);

    useEffect(() => {
        if (!isLoading && getSlug.length > 0) {
            const parsed = parseHistory(getSlug[0].history);
            useRefArray.current = parsed;
            questionIdsRef.current = parsed.map(item => item.questionId);
            setParsedHistory(parsed); // Update state here

            const date = new Date(getSlug[0].dateCreated);
            const formattedDate = `${date.getFullYear()}-${(date.getMonth() + 1).toString().padStart(2, '0')}-${date.getDate().toString().padStart(2, '0')} ${date.getHours().toString().padStart(2, '0')}:${date.getMinutes().toString().padStart(2, '0')}នាទី`;
            setDate(formattedDate)
        }        
    }, [getSlug, isLoading]);

    function parseHistory(history: string) {
        if (!history) {
            // console.log("History is empty or undefined.");
            return [];
        }

        return history.split(", ").map((entry) => {
            const [questionId, value] = entry.split(":");
            return {
                questionId: parseInt(questionId, 10)-1,
                value: parseInt(value, 10),
            };
        });
    }
    const url = "https://techbox.developimpact.net"
    return (
        <div className='p-4'>
            <h1 className="text-2xl font-semibold p-2 text-gray-500 my-4">ប្រវត្តិនៃការប្រលង</h1>
            {isLoading ? (
                <SyncLoader/>
            ) : (
                <pre>
                    {getSlug.map((result, idx) => (
                        <div key={idx} className='p-4'>
                            <p>មុខវិជ្ជា: {result.type} </p>
                            <p>ថ្ងៃបានប្រលង: {date}</p>
                            <p>ពិន្ទុ: {result.score} / 30</p>
                        </div>
                    ))}
                    {result.map((slug, idx) => (
                        <div key={idx}>
                            <img
                                alt="Tests Question"
                                height={0}
                                sizes="100vw"
                                src={url + slug.picquestions.link.href}
                                style={{ width: "100%", height: "100" }}
                                width={0}
                            />
                                <Question correctedAns={slug.correctedAns} options={[1,2,3,4,5]} chosenValue={parsedHistory[idx]?.value}/>
                            <div>
                                <button 
                                className="md:w-[20%] w-[50%] m-2 shadow-submit py-2 rounded-custom-12 border-1 border-normal-blue bg-white text-normal-blue hover:bg-normal-blue hover:text-white"
                                onClick={toggleVisibility}>
                                {isVisible ? 'បិទ' : 'មើលដំណោះស្រាយ'}
                                </button>
                                {isVisible && (
                                    slug?.solution?.link?.href ? (
                                        <img
                                        alt="Tests Question"
                                        height={0}
                                        sizes="100vw"
                                        src={url + slug.solution.link.href}
                                        style={{ width: "100%", height: "100" }}
                                        width={0}
                                        />
                                    ) : (
                                    <p>មិនមានចម្លើយ សូមអភ័យទោស!</p>
                                    )
                                )}
                            </div>
                        </div>
                    ))}
                </pre>
            )}
        </div>
    );
}


export default Page
    