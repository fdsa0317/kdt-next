"use client"

import useAuthStore from "@/store/useAuthStore";
import { ApiResponseDTO } from "@/type/common/common.type";
import { useEffect } from "react";

export default function AuthHydration() {

    const {setIsAuthenticated, setMember} = useAuthStore()

    useEffect(() => {
        const checkAuthApi = async () => {
            try {
                // 1. 최초 한 번 accessToken으로 유저의 정보를 가져오기
                const response = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/me`, {
                    method: "POST",
                    credentials: "include"
                })

                if(response.ok){
                    // accessToken이 유효하다면
                    const result: ApiResponseDTO = await response.json()
                    setMember(result.data)
                    setIsAuthenticated(true)
                    return;
                }
                if(response.status === 401){
                    // accessToken이 만료라면
                    // refreshToken으로 accessToken을 재발급
                    const refreshResponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/refresh`, {
                        method: "GET",
                        credentials: "include"
                    })
                    
                    if(refreshResponse.ok){
                        // 3. 재발급 완료라면, 새로운 토큰으로 다시 유저의 정보 재요청
                        const retryReponse = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/members/me`, {
                            method: "POST",
                            credentials: "include"
                        })

                        if(retryReponse.ok){
                            const retryResult: ApiResponseDTO = await retryReponse.json()
                            setMember(retryResult.data)
                            setIsAuthenticated(true)
                            return;
                        }
                    }
                }
                
                // 2-2. 만약 refreshToken도 만료되었다면 로그아웃 처리
                setMember(null)
                setIsAuthenticated(false)

            } catch (error) {
                setMember(null)
                setIsAuthenticated(false)
            }
        }

        checkAuthApi()
    }, [setIsAuthenticated, setMember])

    return null;
}