"use client"

import { loginApi } from "@/api/auth/auth.api";
import { LoginRequestDTO } from "@/type/auth/auth.type";
import { ApiResponseDTO } from "@/type/common/common.type";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";

// 로그인
export default function Login() {

    const {
        register, handleSubmit, 
        formState: {
            isSubmitting, errors
        }
    } = useForm<LoginRequestDTO>({mode: "onChange"})

    const router = useRouter()

    // mutation 정의
    const loginMutation = useMutation({
        mutationFn: loginApi,
        onSuccess: (datas: ApiResponseDTO) => {
            alert(datas.message)
            router.push("/")
        },
        onError: (err) => {
            console.error(err.message)
        }
    })

    const onSubmit = async (loginRequestDTO: LoginRequestDTO) => {
        loginMutation.mutate(loginRequestDTO)
    }

    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[!@#])[\da-zA-Z!@#]{8,}$/;
    
    return (
        <form 
            onSubmit={handleSubmit(onSubmit)}
            className="flex flex-col gap-2 m-4"
        >
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >이메일</p>
                <input 
                    type="text"
                    className="border rounded-lg w-50 p-2"
                    placeholder="이메일을 입력하세요."
                    {...register("member_email", {
                        required: true, 
                        pattern: {
                            value: emailRegex,
                            message: "이메일 양식에 맞게 입력해주세요."
                        }
                    })}
                />
                {errors?.member_email?.type === "required" && (
                    <p className="text-red-500 text-[12px]">이메일을 입력하세요.</p>
                )}
                {errors?.member_email?.type === "pattern" && (
                    <p className="text-red-500 text-[12px]">이메일 양식에 맞게 입력해주세요.</p>
                )}
            </label>
            <label className="flex flex-col">
                <p
                    className="text-[24px] font-semibold"
                >비밀번호</p>
                <input 
                    type="password"
                    className="border rounded-lg w-50 p-2"
                    placeholder="비밀번호를 입력하세요."
                    {...register("member_password", {
                        required: true,
                        pattern: {
                            value: passwordRegex,
                            message: "올바른 비밀번호를 입력하세요."
                        }
                    })}
                />
                {errors?.member_password?.type === "required" && (
                    <p className="text-red-500 text-[12px]">비밀번호를 입력하세요.</p>
                )}
                {errors?.member_password?.type === "pattern" && (
                    <p className="text-red-500 text-[12px]">소문자, 숫자, 특수문자(!@#)를 각 하나 포함한 8자리 이상이어야 합니다.</p>
                )}
            </label>
            <button
                type="submit"
                disabled={isSubmitting}
                className="w-50 h-10 bg-purple-500 text-white rounded-2xl mt-5 cursor-pointer"
            >{isSubmitting ? "제출 중" : "로그인"}</button>
        </form>
    );
}