"use client"

import { useRouter } from "next/navigation";

export default function page() {

    const router = useRouter()

    return (
        <>
            <div className="fixed inset-0 bg-black/50 z-10"></div>
            <div 
                className="
                    w-100 h-100 bg-white
                    fixed left-1/2 top-1/2 -translate-1/2 z-20
                "
            >
                <button type="button" onClick={() => router.back()}>X</button>
                <div>
                    모달 페이지
                </div>
            </div>
        </>
    );
}