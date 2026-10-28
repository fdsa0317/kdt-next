"use client"

import { useState } from "react";

export default function page() {

    // 사용자가 입력한 key가 Enter라면 
    // 사용자가 입력한 글자를 화면에 p태그에 출력하기
    const [name, setName] = useState("")
    const [displayName, setDisplayName] = useState("")
    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value)
    }

    const handleNameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            // setName(e.currentTarget.value)
            setDisplayName(name)
        }
    }


    return (
        <>
            <div>
                <span>이름</span>
                <input 
                    className="border border-gray-600 rounded-lg" 
                    type="text" 
                    placeholder="이름을 입력하세요"
                    onChange={handleNameChange}
                    onKeyDown={handleNameKeyDown}
                />
            </div>
            <p>{displayName}</p>
        </>
    );
}