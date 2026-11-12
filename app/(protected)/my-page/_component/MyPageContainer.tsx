"use client"

import { logoutApi } from "@/api/auth/auth.api";
import { updateProfileApi } from "@/api/member/member.api";
import useAuthStore from "@/store/useAuthStore";
import { ApiResponseDTO } from "@/type/common/common.type";
import { ProfileUpdateRequestDTO } from "@/type/member/member.type";
import { useMutation } from "@tanstack/react-query";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function MyPageContainer() {

    const { member, setMember } = useAuthStore()
    const id = member?.id
    const router = useRouter()

    // 썸네일 상태 관리
    const [selectedFile, setSelectedFile] = useState<File | null>(null)
    const [previewUrl, setPreviewUrl] = useState<string | null>(null)

    const displayImage = previewUrl || member?.member_profile || "/default.jpg"

    // 1. 파일 선택, 미리보기
    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0]
        if(file){
            setSelectedFile(file)
            const objectUrl = URL.createObjectURL(file)
            setPreviewUrl(objectUrl)
        }
    }
    
    // 2. 프로필 변경 mutation
    const uploadProfileMutation = useMutation({
        mutationFn: updateProfileApi,
        onSuccess: (datas: ApiResponseDTO) => {
            setMember(datas.data)
            setSelectedFile(null)
            setPreviewUrl(null)
        },
        onError: (err) => {
            console.error(err.message)
        }
    })

    // 3. 이미지 업로드
    const handleUploadProfile = () => {
        
        if(!selectedFile){
            return alert("이미지를 선택하세요.")
        }

        if(!id){
            return alert("로그인 정보가 없습니다.")
        }
        
        const updateDto: ProfileUpdateRequestDTO = {
            id: id,
            file: selectedFile
        }

        uploadProfileMutation.mutate(updateDto)
    }

    // 4. 업로드 취소
    const handleCancelFileClick = () => {
        setSelectedFile(null)
        setPreviewUrl(null)
    }

    const logoutMutation = useMutation({
        mutationFn: logoutApi,
        onSuccess: (datas: ApiResponseDTO) => {
            router.push("/")
        },
        onError: (error: Error) => {
            console.error(error)
        }
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
            <p>{member?.member_name}님 환영합니다!</p>
            {/* 이미지 썸네일 */}
            <div
                className="
                    flex flex-col items-center gap-4 p-6
                    bg-white rounded-lg shadow-md w-80 mx-auto mt-10
                "
            >
                <h1
                    className="text-xl font-bold"
                >프로필 사진 변경</h1>
                <label htmlFor="profile-upload">
                    <div 
                        className="
                            w-50 h-50 rounded-full overflow-hidden cursor-pointer
                            border-2 border-gray-200 relative shadow-inner
                        "
                    >
                        <Image 
                            src={displayImage}
                            alt="썸네일 이미지"
                            width={200}
                            height={200}
                        />
                        <div
                            className="
                                absolute inset-0 bg-black/40 flex justify-center items-center
                                opacity-0 hover:opacity-100 text-white text-sm font-semibold
                            "
                        >이미지 선택</div>
                    </div>
                </label>
                <input 
                    id="profile-upload"
                    type="file" 
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />
                <button
                    onClick={handleUploadProfile}
                    className={`
                        w-full py-2 px-4 rounded-md text-white
                        ${!selectedFile ? "bg-gray-300 cursor-not-allowed" : "bg-purple-500 hover:bg-purple-700"}
                    `}
                >프로필 변경</button>
                {selectedFile && (
                    <button
                        onClick={handleCancelFileClick}
                        className="w-full py-2 px-4 rounded-md text-white bg-gray-300 cursor-pointer"
                    >취소</button>
                )}
            </div>
        </>
    );
}