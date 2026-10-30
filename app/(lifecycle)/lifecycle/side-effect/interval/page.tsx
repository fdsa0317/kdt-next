"use client"

import { useEffect, useState } from "react";

export default function page() {
    const [seconds, setSeconds] = useState(0)

    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(seconds + 1)
            setSeconds((prev) => {
                if(prev >= 4){
                    clearInterval(interval)
                }
                return prev + 1
            })
        }, 1000)

        return () => {
            console.log(seconds)
        }
    }, [])

    return (
        <>
            <h1>{seconds}</h1>
        </>
    );
}