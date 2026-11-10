import { LoginRequestDTO } from "@/type/auth/auth.type"
import { ApiResponseDTO } from "@/type/common/common.type"

// 로그인 함수 
export const loginApi = async (loginRequestDTO: LoginRequestDTO): Promise<ApiResponseDTO> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include", // 쿠키를 주고 받을 때 옵션 허용
        body: JSON.stringify(loginRequestDTO)
    })

    if(!response.ok) throw new Error("")
    const datas = await response.json()
    return datas
}


// 로그아웃 함수
export const logoutApi = async (): Promise<ApiResponseDTO> => {
    const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/logout`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "include"
    })

    if(!response.ok) {
        throw new Error("logoutApi fetching Error")
    }
    const datas = await response.json();
    return datas
}