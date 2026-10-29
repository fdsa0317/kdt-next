"use client"

import { cn } from "cn";
import { useEffect, useState } from "react";

export default function UseEffectTest() {

    const [color, setColor] = useState<string>("text-blue-500")
    const [number, setNumber] = useState<number>(0)

    const increase = () => setNumber(number + 1)
    const decrease = () => setNumber(number - 1)
    const handleColorClick = () => setColor("text-red-500")

    // 마운트된 직후 한 번 실행
    // useEffect(() => {
    //     console.log("useEffect 실헹")
    // }, [])

    useEffect(() => {
        console.log("useEffect 실헹")
    }, [color])

    return (
        <div className="w-125">
            <h1 className={cn(color, "text-[30px] flex justify-center")}>{number}</h1>
            <div className="flex gap-2 mb-10">
                <button onClick={increase} className="w-50 h-10 bg-green-500">+</button>
                <button onClick={decrease} className="w-50 h-10 bg-green-500">-</button>
            </div>
            <button onClick={handleColorClick} className="w-50 h-10 bg-purple-500">컬러 변경</button>
        </div>
    );
}