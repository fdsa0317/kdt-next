"use client"

import { useState } from "react"

export default function page() {
    // [number(변수), setNumber(함수)] = useState(초기값)
    const [number, setNumber] = useState<number>(0)

    const increase = () => setNumber(number + 1)
    const decrease = () => setNumber(number - 1)
    console.log(number)
    
    return (
        <>
            <button 
                className="w-25 h-12 bg-blue-500 active:bg-blue-700"
                onClick={decrease}
            >-1</button>
            <h1>{number}</h1>
            <button
                className="w-25 h-12 bg-blue-500 active:bg-blue-700"
                onClick={increase}
            >+1</button>
        </>
    );
}