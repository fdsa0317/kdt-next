"use client"

import React, { useRef, useState } from "react";

// ref === DOM
// 사용자가 이름을 입력하고 엔터를 누르면
// 이름 뒤에 "님"자를 붙여서 p태그에 반영한다.

export default function Name() {
    const [name, setName] = useState("")
    const nameRef = useRef<HTMLParagraphElement>(null)
    const handleNameChange = (e:React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)
    const addNim = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if(e.key === "Enter"){
            if(name.endsWith("님")){
                return;
            }
            setName(name + "님")
        }
    }
    const handlePClick = (e: React.MouseEvent<HTMLButtonElement>) => {
        console.log(nameRef.current?.innerText)
    }

    return (
        <>
            <input
                className="border border-black"
                type="text" placeholder="이름을 입력하세요." 
                onChange={handleNameChange}
                onKeyDown={addNim}
            />
            <p ref={nameRef}>{name}</p>
            <button>버튼 누름!</button>
        </>
    );
}