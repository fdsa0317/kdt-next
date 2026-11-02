"use client"

import useCountStore from "@/store/useCountStore";
import { useState } from "react";
// 전역 상태를 이용한 카운트

export default function page() {

    const {count, increase, decrease, addCount} = useCountStore()
    const [value, setValue] = useState<number>(0)
    const handleValueChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setValue(Number(e.target.value))
    }

    return (
        <>
            <div>
                <h1>{count}</h1>
                <button className="w-50 h-10 bg-green-500 text-white" onClick={decrease}>-1 감소</button>
                <button className="w-50 h-10 bg-green-500 text-white" onClick={increase}>+1 증가</button>
            </div>
            <div>
                <input 
                    placeholder="증가할 값"
                    onChange={handleValueChange}
                />
                <button 
                    className="w-50 h-10 bg-purple-500 text-white" 
                    onClick={() => addCount(value)}
                >카운트 추가</button>
            </div>
        </>
    );
}