"use client"

import { logoutApi } from "@/api/auth/auth.api";
import { ApiResponseDTO } from "@/type/common/common.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

export default function MyPageContainer() {

    const router = useRouter()
    
    const logoutMutation = useMutation({
        mutationFn: logoutApi,
        onSuccess: (datas: ApiResponseDTO) => {
            router.push("/")
        },
        onError: (error: Error) => {}
    })
    const handleLogout = () => {
        logoutMutation.mutate()
    }

    return (
        <>
            <div>
                <button 
                    onClick={handleLogout}
                    type="button" className="flex justify-center items-center w-50 h-10 bg-blue-500 text-white rounded-2xl mt-5 mb-5 cursor-pointer">
                    로그아웃
                </button>
            </div>
            <h1>마이페이지</h1>
        </>
    );
}