'use client'
import React, { useEffect, useState } from "react";
import { Table, TableHeader, TableColumn, TableBody, TableRow, TableCell, Chip, Tooltip, Button, Link } from "@nextui-org/react";
import EyeIcon from "./EyeIcon";
import Cookies from "js-cookie";
import Sidebars from "@/components/sidebar";
import MyNavBar from "@/components/MyNavBar";
import { useRouter } from "next/navigation";
import useToggleVisibility from "./useToggleVisibility";
import { SyncLoader } from "react-spinners";


interface Result {
    id: number;
    subject: string;
    score: number;
    timeRemain: string;
    type: string;
    email: string;
    dateCreated: string;
}

export default function App() {
    const { isVisible, toggleVisibility } = useToggleVisibility();
    const [result, setResult] = useState<Result[]>([]); // Use state to track result
    const [statusColorMap2, setStatusColorMap2] = useState<string[]>([]); // Use state for status colors
    const Verifyemail = Cookies.get('authenticated')

    const [isLoading, setIsLoading] = useState<boolean>(true)
    const getForm = async () => {
        const clientId = "id-ff33fd67-2662-23d2-e387-7e660796b71";
        const clientSecret = "secret-16433662-63e6-dea2-91b5-c0be0d0db7c";
        const tokenUrl = "https://techbox.developimpact.net/o/oauth2/token";

        // Fetch the access token
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
            fetchRecord(data.access_token);
        } else {
            console.log("Error obtaining token");
        }
    };

    function fetchRecord(accessToken: string) {
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
                if (Array.isArray(data)) {
                    // Process each record and format the date
                    const formattedData = data.map((record: Result) => ({
                        ...record,
                        dateCreated: new Date(record.dateCreated).toLocaleString(), // Convert date to human-readable format
                    }));
                    setResult(formattedData); // Update the result state
                } else {
                    if (data.items && Array.isArray(data.items)) {
                        // Process each record and format the date
                        const filteredData = data.items.filter((record: Result) => record.email === Verifyemail);
                        const formattedData = filteredData.map((record: Result) => ({
                            ...record,
                            dateCreated: new Date(record.dateCreated).toLocaleString(), // Convert date to human-readable format
                        }));
                        setResult(formattedData); // Update the result state
                        setIsLoading(false); // Set loading state to false
                    } else {
                        console.log("Unexpected data format:", data);
                    }
                }
            })
            .catch((error) => {
                console.log("Error fetching records:", error);
            });
    }


    useEffect(() => {
        getForm();
    }, []);

    useEffect(() => {
        if (result.length > 0) {
            const colorMap = result.map((s) => s.score > 15 ? "success" : "danger");
            setStatusColorMap2(colorMap);
        }

    }, [result]); // Run when result is updated

    const getChipColor = (score: number) => {
        // Check if score is greater than 15
        return score > 15 ? "success" : "danger";
    };


    const columns = [
        { name: "មុខវិជ្ជា", uid: "type" },
        { name: "ពិន្ទុ", uid: "score" },
        { name: "ម៉ោងនៅសល់", uid: "timeRemain" },
        { name: "ថ្ងៃបានប្រលង", uid: "dateCreated" },
        { name: "មើលលទ្ធផល", uid: "id" },
    ];

    const renderCell = React.useCallback((item: Result, columnKey: string) => {
        const cellValue = item[columnKey as keyof Result];
        const minutes = (cellValue as number / 60).toFixed(2) + " នាទី";

        switch (columnKey) {
            case "type":
                return <h1>{cellValue}</h1>;
            case "timeRemain":
                return (
                    <div className="flex flex-col">
                        <p className="text-bold text-sm capitalize">{minutes}</p>
                    </div>
                );
            case "score":
                return (
                    <Chip className="capitalize" color={getChipColor(item.score)} size="sm" variant="flat">
                        {cellValue} /30
                    </Chip>
                );
            case "dateCreated":
                return <div>{cellValue}</div>;
            case "id":
                return (
                    <Tooltip content="មើលលម្អិត">
                        <Link className="bg-inherit" onClick={() => {
                            window.location.href = `history/detail/${cellValue}`
                        }
                        }>
                            <span className="text-lg text-center text-default-400 cursor-pointer active:opacity-50">
                                <EyeIcon />
                            </span>
                        </Link>
                    </Tooltip>
                );
            default:
                return cellValue;
        }
    }, [statusColorMap2]);

    return (
        <div className="flex ">
            <Sidebars />

            <div className=" w-full ">
                <MyNavBar />
                <div className="mx-4 ">
                    <h1 className="text-xl font-semibold p-2 text-gray-500 my-4 ">ប្រវត្តិនៃការប្រលង</h1>
                    <Table aria-label="Example table with custom cells">
                        <TableHeader columns={columns}>
                            {(column) => (
                                <TableColumn key={column.uid} align={column.uid === "actions" ? "center" : "start"}>
                                    {column.name}
                                </TableColumn>
                            )}
                        </TableHeader>
                        <TableBody items={result}>
                            {(item) => (
                                <TableRow key={item.id}>
                                    {(columnKey) => <TableCell>{renderCell(item, columnKey as string)}</TableCell>}
                                </TableRow>
                            )}
                        </TableBody>
                    </Table>
                </div>
                {isLoading ? <SyncLoader className="mt-4 m-6"/> : result.length > 0 ? "" : <div className="flex flex-col gap-4 m-2">
                    <h2 className="text-red-500">គ្មានទិន្នន័យ</h2>
                    <button className="text-sm p-3 rounded-xl font-normal bg-default-100">
                        <Link href="/" className="text-black">
                            ប្រលងសាកល្បង
                        </Link>
                    </button>

                </div>}
            </div>
        </div>
    );
}
